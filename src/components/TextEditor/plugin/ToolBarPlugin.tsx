import React, { useCallback, useEffect, useRef, useState } from 'react'
import Button from '../../Button/Button';
import { AlignCenter, AlignLeft, AlignRight, Bold, Image, Italic, Link, List, ListIcon, Table, Underline } from '../../../icons';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection, DEPRECATED_$isGridSelection, FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, LexicalEditor, PASTE_COMMAND, RangeSelection, SELECTION_CHANGE_COMMAND } from 'lexical';
import { mergeRegister } from "@lexical/utils";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $isAtNodeEnd } from "@lexical/selection";

import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode
} from "@lexical/list";

import {
  $getHtmlContent,
  $getLexicalContent,
  $insertDataTransferForRichText,
} from '@lexical/clipboard';
import { INSERT_TABLE_COMMAND } from './TablePlugin';
import { Select } from '../../Form';

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

const ToolBarPlugin = () => {
  const toolbarRef = useRef<HTMLDivElement>(null)
  const [editor] = useLexicalComposerContext();

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isList, setIsList] = useState<undefined | "number" | "bullet">();
  const [isLink, setIsLink] = useState(false);
  const [blockType , setBlockType] = useState("paragraph")

  const updateToolBar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const listType = selection.anchor.getNode().getTopLevelElementOrThrow().__listType
      setIsList(listType)
      setIsBold(selection.hasFormat("bold"))
      setIsItalic(selection.hasFormat("italic"))
      setIsUnderline(selection.hasFormat('underline'))

      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
    }
  }, [editor])

  function onPasteForRichText(
    event: ClipboardEvent,
    editor: LexicalEditor,
  ): void {
    event.preventDefault();
    editor.update(() => {
      const selection = $getSelection();
      const clipboardData = event.clipboardData;
      console.log(event)
      if (
        clipboardData != null &&
        ($isRangeSelection(selection) || DEPRECATED_$isGridSelection(selection))
      ) {
        $insertDataTransferForRichText(clipboardData, selection, editor);
      }
    });
  }

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
      ),
      editor.registerCommand<ClipboardEvent>(
        PASTE_COMMAND,
        (event) => {
          const selection = $getSelection();
          if ($isRangeSelection(selection) || DEPRECATED_$isGridSelection(selection)) {
            onPasteForRichText(event, editor);
            return true;
          }
          return false;
        },
        LowPriority,
      ),
    )
  })

  const insertLink = useCallback(() => {
    if (!isLink) {
      console.log(editor , "------------");

      editor.dispatchCommand(TOGGLE_LINK_COMMAND, "https://");
    } else {
      console.log("remove Link")
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  return (
    <div className="inte-TextEditor__toolbar" ref={toolbarRef}>
      {/* <Select 
        
      /> */}
      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
        }}
        type={isBold ? "secondary" : "outlined"}
        size='extraThin'
        aria-label="Format Bold"
      >
        <Bold size="16" color="var(--inte-G450)" />
      </Button>
      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
        }}
        type={isItalic ? "secondary" : "outlined"}
        size='extraThin'
        aria-label="Format Bold"
      >
        <Italic size="16" color="var(--inte-G450)" />
      </Button>
      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
        }}
        type={isUnderline ? "secondary" : "outlined"}
        size='extraThin'
        aria-label="Format Bold"
      >
        <Underline size="16" color="var(--inte-G450)" />
      </Button>
      <Button
        onClick={() => {
          editor.dispatchCommand(isList ? REMOVE_LIST_COMMAND : INSERT_UNORDERED_LIST_COMMAND, undefined)
        }}
        type={isList === "bullet" ? "secondary" : "outlined"}
        aria-label="Format Unordered List"
        size='extraThin'
      >
        <ListIcon size="16" color="var(--inte-G450)" />
      </Button>

      <Button
        onClick={insertLink}
        type={isLink ? "secondary" : "outlined"}
        aria-label="Insert Link"
        size='extraThin'
      >
        <Link size="16" color="var(--inte-G450)"/>
      </Button>
      <Button
      onClick={() => {
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
      }}
        aria-label="Align Right"
        size='extraThin'
        type={false ? "secondary" : "outlined"}
      >
        <Image size="16" color="var(--inte-G450)"/>
      </Button>

      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        }}
        aria-label="Align Left"
        size='extraThin'
        type={false ? "secondary" : "outlined"}
      >
        <AlignLeft size="16" color="var(--inte-G450)"/>
      </Button>
      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        }}
        aria-label="Align Center"
        size='extraThin'
        type={false ? "secondary" : "outlined"}
      >
        <AlignCenter size="16" color="var(--inte-G450)"/>
      </Button>
      <Button
        onClick={() => {
          editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        }}
        aria-label="Align Right"
        size='extraThin'
        type={false ? "secondary" : "outlined"}
      >
        <AlignRight size="16" color="var(--inte-G450)"/>
      </Button>

      <Button
        onClick={() => {
          editor.dispatchCommand(INSERT_TABLE_COMMAND, {columns : "4" , rows : "4"});
        }}
        aria-label="Insert Table"
        size='extraThin'
        type={false ? "secondary" : "outlined"}
      >
        <Table size="24" color="var(--inte-G450)" />
      </Button>
    </div>
  )
}

export default ToolBarPlugin