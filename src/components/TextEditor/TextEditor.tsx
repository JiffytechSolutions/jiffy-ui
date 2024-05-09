import React, { useState } from "react";

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
import UpdatePlugin from "./plugin/UpdatePlugin";
import ValueContextProvider from "./plugin/ValueContext";

export type toolbarItems = {
  headings?:boolean
  fontFamily?:boolean
  bold?:boolean
  italic?:boolean
  underline?:boolean
  strikeThrough?:boolean
  subScript?:boolean
  superScript?:boolean
  textColor?:boolean
  fontSize?:boolean
  code?:boolean
  fontColor?:boolean
  clearFormatting?:boolean
  list?: {
    orderedList?:boolean
    unOrderedList?:boolean
  }
  textAlign?:{
    left?:boolean
    right?:boolean
    center?:boolean
    justify?:boolean
  }
  link?:boolean
  image?:boolean
  table?:boolean
  codeBlock?:boolean
}
export interface TextEditorI {
  placeholder?: string
  onChange?: (newState: string) => void;
  value?: string;
  hasError?:boolean;
  isDisabled?:boolean;
  customClass?: string;
  hasAutoFocus?:boolean;
  toolbarItems?:toolbarItems;
  onError?: (error: Error) => void;
}



const TextEditor = ({ placeholder, onChange, value, onError, customClass , hasAutoFocus , toolbarItems , isDisabled , hasError }: TextEditorI) => {
  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);
  const isMobileDevice = useMobileDevice()
  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };
  const editorConfig: InitialConfigType = {
    namespace: "TextEditor",
    theme: EditorTheme,
    onError: onError ? onError : (err: Error) => new Error(err.message),
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
    ]
  };


  return (
    <div className={getClassNames({
      "inte-TextEditor": true,
      'inte-TextEditor--disabled': isDisabled,
      "inte-TextEditor--hasError": hasError,
      [customClass as string]: customClass
    })}>
      <LexicalComposer initialConfig={editorConfig}>
        <ValueContextProvider>
          <OnChangePlugin onChange={onChange} />
          <UpdatePlugin value={value ?? ""} />
        </ValueContextProvider>
        <TableContext>
          <>
            <ToolBar value={value} onChange={onChange} toolbarItems={toolbarItems}/>
           {
            hasAutoFocus &&  <AutoFocusPlugin />
           }
            <DragDropPaste />
            <div className='inte-TextEditor__body--wrapper'>
              <RichTextPlugin
                contentEditable={
                  <div ref={onRef}>
                    <ContentEditable
                      spellCheck={false}
                      className={getClassNames({
                        "inte-TextEditor__body": true,
                        'inte-TextEditor--mobile': isMobileDevice
                      })
                      }
                    />
                  </div>}
                placeholder={
                  <div
                    className="inte-TextEditor__placeholder"
                  >
                    {placeholder}
                  </div>}
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
            {
              !!floatingAnchorElem && <FloatingLinkEditorPlugin
                anchorElem={floatingAnchorElem}
                isLinkEditMode={isLinkEditMode}
                setIsLinkEditMode={setIsLinkEditMode}
              />
            }
          </>
        </TableContext>
      </LexicalComposer>
    </div>
  )
}
export default TextEditor
