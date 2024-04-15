import React, { useCallback, useEffect, useRef, useState } from "react";
import "./ToolBar.css";
import { RotateCcw, RotateCw } from "../../../../icons";
import Button from "../../../Button/Button";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $isAtNodeEnd,
  $getSelectionStyleValueForProperty,
  $patchStyleText,
} from "@lexical/selection";
import { $isLinkNode } from "@lexical/link";
import {
  mergeRegister,
  $getNearestNodeOfType,
  $findMatchingParent,
} from "@lexical/utils";
import TextAlignBox from "./TextAlignBox";
import ListSelectBox from "./ListBox";
import { $isHeadingNode } from "@lexical/rich-text";
import { $isListNode, ListNode } from "@lexical/list";
import InsertBlock from "./InsertBlock";
import FontSizeToggle from "./FontSizeToggle";
import FontStyle, { FontColorPicker } from "./FontColorPicker";
import FontFamilyChanger from "./FontFamilyChanger";
import ToolTip from "../../../ToolTip/ToolTip";
import SpecialNodes from "./SpecialNodes";
import useMobileDevice from "../../../../utilities/useMobileDevice";
import { $generateNodesFromDOM } from '@lexical/html';
import { $generateHtmlFromNodes } from '@lexical/html';
import OnChangePlugin from '../OnChangePlugin'
import { $INTERNAL_isPointSelection, $getRoot, $getSelection, $insertNodes, $isElementNode, $isRangeSelection, $isRootOrShadowRoot, EditorState, ElementFormatType, FORMAT_ELEMENT_COMMAND, REDO_COMMAND, RangeSelection, SELECTION_CHANGE_COMMAND, UNDO_COMMAND } from 'lexical'

const rootTypeToRootName = {
  root: "Root",
  table: "Table",
};

const Line = () => <span className="inte-line"></span>;
const LowPriority = 1;

function getSelectedNode(selection: RangeSelection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

export const blockTypeToBlockName = {
  bullet: "Bulleted List",
  check: "Check List",
  code: "Code Block",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  number: "Numbered List",
  paragraph: "Normal",
  quote: "Quote",
};

interface ToolBarI {
  value?: string;
  onChange?: (newState: string) => void;
}
const textHtmlMimeType = 'text/html';
const ToolBar = ({ value, onChange }: ToolBarI) => {
  const [editor] = useLexicalComposerContext();
  const [rootType, setRootType] =
    useState<keyof typeof rootTypeToRootName>("root");
  const [isList, setIsList] = useState<undefined | "number" | "bullet">();
  const [isLink, setIsLink] = useState(false);
  const [blockType, setBlockType] =
    useState<keyof typeof blockTypeToBlockName>("paragraph");
  const [currAlign, setCurrAlign] = useState<ElementFormatType>("left");
  const [fontSize, setFontSize] = useState("14px");
  const [fontColor, setFontColor] = useState("");
  const [selectedText, setSelectedText] = useState("");
  const isMobileDevice = useMobileDevice();

  const updateToolBar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      let element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : $findMatchingParent(anchorNode, (e) => {
            const parent = e.getParent();
            return parent !== null && $isRootOrShadowRoot(parent);
          });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }

      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      // const listType = selection.anchor.getNode().getTopLevelElementOrThrow().__listType
      const listType: any = selection.anchor
        .getNode()
        .getTopLevelElementOrThrow();
      setSelectedText(selection.getTextContent());
      setIsList(listType);

      const node = getSelectedNode(selection);

      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }

      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType<ListNode>(
            anchorNode,
            ListNode
          );
          const type = parentList
            ? parentList.getListType()
            : element.getListType();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          if (type in blockTypeToBlockName) {
            setBlockType(type as keyof typeof blockTypeToBlockName);
          }
        }
      }

      let matchingParent;
      if ($isLinkNode(parent)) {
        // If node is a link, we need to fetch the parent paragraph node to set format
        matchingParent = $findMatchingParent(
          node,
          (parentNode) => $isElementNode(parentNode) && !parentNode.isInline()
        );
      }

      setCurrAlign(
        $isElementNode(matchingParent)
          ? matchingParent.getFormatType()
          : $isElementNode(node)
            ? node.getFormatType()
            : parent?.getFormatType() || "left"
      );
      setFontSize(
        $getSelectionStyleValueForProperty(selection, "font-size", "14px")
      );
      setFontColor(
        $getSelectionStyleValueForProperty(selection, "color", "#000")
      );
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolBar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolBar();
          return false;
        },
        LowPriority
      )
    );
  }, [editor]);

  const changeElementFormat = (align: ElementFormatType) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, align);
  };

  const handelColorChange = (newColor: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($INTERNAL_isPointSelection(selection)) {
        $patchStyleText(selection, { color: newColor });
      }
    });
  };

  useEffect(() => {
    if (!value) return;
    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(value, textHtmlMimeType);
      const nodes = $generateNodesFromDOM(editor, dom);
      $getRoot().clear();
      $insertNodes(nodes);
    });
  }, [value]);;
  const handelEditorChange = (editorState: EditorState) => {
    editorState.read(() => {
      const newHtml = $generateHtmlFromNodes(editor, null);
      onChange && onChange(newHtml);
    });
  };
  return (
    <>
      <OnChangePlugin onChange={handelEditorChange} />
      {!isMobileDevice ? (
        <div className="inte-TextEditor__toolBar">
          <div className="inte-TextEditor__fontFormat">
            <InsertBlock editor={editor} blockType={blockType} />
            <FontFamilyChanger editor={editor} />
          </div>
          <FontStyle editor={editor} />
          <FontSizeToggle editor={editor} value={fontSize} />
          <div className="inte-textEditor__blockStyle">
            {!isMobileDevice ? (
              <>
                <ToolTip
                  activator={
                    <ListSelectBox editor={editor} currListType={isList} />
                  }
                  helpText={"Insert List"}
                />
                <ToolTip
                  activator={
                    <TextAlignBox
                      onClick={changeElementFormat}
                      currAlign={currAlign}
                    />
                  }
                  helpText={"Change Text Align"}
                />
              </>
            ) : (
              <>
                <ListSelectBox editor={editor} currListType={isList} />
                <TextAlignBox
                  onClick={changeElementFormat}
                  currAlign={currAlign}
                />
              </>
            )}
          </div>
          <Line />
          <SpecialNodes
            blockType={blockType}
            editor={editor}
            isLink={isLink}
            selectedText={selectedText}
          />
          <Line />
          <div className="inte-textEditor__history">
            {!isMobileDevice ? (
              <ToolTip
                activator={
                  <Button
                    icon={<RotateCcw size="20" color="#1C2433" />}
                    type="textButton"
                    onClick={() =>
                      editor.dispatchCommand(UNDO_COMMAND, undefined)
                    }
                  />
                }
                helpText="Undo"
              />
            ) : (
              <Button
                icon={<RotateCcw size="20" color="#1C2433" />}
                type="textButton"
                onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
              />
            )}
            {!isMobileDevice ? (
              <ToolTip
                activator={
                  <Button
                    icon={<RotateCw size="20" color="#1C2433" />}
                    type="textButton"
                    onClick={() =>
                      editor.dispatchCommand(REDO_COMMAND, undefined)
                    }
                  />
                }
                helpText="Redo"
              />
            ) : (
              <Button
                icon={<RotateCw size="20" color="#1C2433" />}
                type="textButton"
                onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="inte-TextEditor__toolBar--mobile">
          <div className="inte-TextEditor__fontFormat">
            <InsertBlock editor={editor} blockType={blockType} />
            <FontFamilyChanger editor={editor} />
            <FontSizeToggle editor={editor} value={fontSize} />
          </div>
          <div className="inte-textEditor__toolBar__actions">
            <div className="inte-textEditor__history">
              {!isMobileDevice ? (
                <>
                  <ToolTip
                    activator={
                      <Button
                        icon={<RotateCcw size="20" color="#1C2433" />}
                        type="textButton"
                        onClick={() =>
                          editor.dispatchCommand(UNDO_COMMAND, undefined)
                        }
                      />
                    }
                    helpText="Undo"
                  />
                  <ToolTip
                    activator={
                      <Button
                        icon={<RotateCw size="20" color="#1C2433" />}
                        type="textButton"
                        onClick={() =>
                          editor.dispatchCommand(REDO_COMMAND, undefined)
                        }
                      />
                    }
                    helpText="Redo"
                  />
                </>
              ) : (
                <>
                  <Button
                    icon={<RotateCcw size="20" color="#1C2433" />}
                    type="textButton"
                    onClick={() =>
                      editor.dispatchCommand(UNDO_COMMAND, undefined)
                    }
                  />
                  <Button
                    icon={<RotateCw size="20" color="#1C2433" />}
                    type="textButton"
                    onClick={() =>
                      editor.dispatchCommand(REDO_COMMAND, undefined)
                    }
                  />
                </>
              )}
            </div>
            <Line />
            <FontStyle editor={editor} />
            <FontColorPicker color={fontColor} onChange={handelColorChange} />
            <ListSelectBox editor={editor} currListType={isList} />
            <TextAlignBox onClick={changeElementFormat} currAlign={currAlign} />
            <SpecialNodes
              blockType={blockType}
              editor={editor}
              isLink={isLink}
              selectedText={selectedText}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ToolBar;
