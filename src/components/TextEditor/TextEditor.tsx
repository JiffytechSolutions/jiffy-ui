import React, { useEffect, useState } from "react";

import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import EditorTheme from "./EditorTheme";
import "./TextEditor.css";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { EditorState } from "lexical";
import CustomLinkPlugin from "./plugin/CustomLinkPlugin";
import ToolBar from "./plugin/ToolBar/ToolBar";
import { ImageNode } from "./nodes/ImageNode";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import { TableContext } from "./plugin/Table/TablePlugin";
import TableCellResizerPlugin from "./plugin/Table/TableCellResizer";
import ImagesPlugin from "./plugin/ImagesPulgin";
import CodeHighlightPlugin from "./plugin/CodeHighlightPlugin";
import FloatingLinkEditorPlugin from "./plugin/FloatingLinkEditorPlugin";
import DragDropPaste from "./plugin/DragDropPastePlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import useMobileDevice from "../../utilities/useMobileDevice";
import getClassNames from "../../utilities/getClassnames";
import OnChangePlugin from "./plugin/OnChangePlugin";

const editorConfig: InitialConfigType = {
  namespace: "TextEditor",
  theme: EditorTheme,
  onError(error: Error) {
    throw error;
  },
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    ImageNode,
  ],
};

export interface TextEditorI {
  placeholder?: string;
  onChange?: (newState: EditorState) => void;
}

const TextEditor = ({ placeholder, onChange }: TextEditorI) => {
  const [floatingAnchorElem, setFloatingAnchorElem] =
    useState<HTMLDivElement | null>(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const isMobileDevice = useMobileDevice();

  const onChange1 = (e: EditorState) => {
    onChange && onChange(e);
  };

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <div className="inte-TextEditor">
      <LexicalComposer initialConfig={editorConfig}>
        <TableContext>
          <>
            <ToolBar />
            <AutoFocusPlugin />
            <DragDropPaste />
            <div className="inte-TextEditor__body--wrapper">
              <RichTextPlugin
                contentEditable={
                  <div ref={onRef}>
                    <ContentEditable
                      spellCheck={false}
                      className={getClassNames({
                        "inte-TextEditor__body": true,
                        "inte-TextEditor--mobile": isMobileDevice,
                      })}
                    />
                  </div>
                }
                placeholder={
                  <div className="inte-TextEditor__placeholder">
                    {placeholder}
                  </div>
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
            </div>
            <TablePlugin />
            <TableCellResizerPlugin />
            <HistoryPlugin />
            <ListPlugin />
            <CustomLinkPlugin />
            <ImagesPlugin />
            <CodeHighlightPlugin />
            <OnChangePlugin onChange={onChange1} />
            {!!floatingAnchorElem && (
              <FloatingLinkEditorPlugin
                anchorElem={floatingAnchorElem}
                isLinkEditMode={isLinkEditMode}
                setIsLinkEditMode={setIsLinkEditMode}
              />
            )}
          </>
        </TableContext>
      </LexicalComposer>
    </div>
  );
};

export default TextEditor;
