import React, { useEffect, useState } from 'react'

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import EditorTheme from './EditorTheme';
import './TextEditor.css'
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { EditorState } from 'lexical';
import CustomLinkPlugin from './plugin/CustomLinkPlugin';
import ToolBar from './plugin/ToolBar/ToolBar';
import { ImageNode } from './nodes/ImageNode';
import { TablePlugin } from '@lexical/react/LexicalTablePlugin';
import { TableContext } from './plugin/Table/TablePlugin';
import TableCellResizerPlugin from './plugin/Table/TableCellResizer';
import ImagesPlugin from './plugin/ImagesPulgin';
import CodeHighlightPlugin from './plugin/CodeHighlightPlugin';
import FloatingLinkEditorPlugin from './plugin/FloatingLinkEditorPlugin';

function Placeholder() {
  return <div className="inte-TextEditor__placeholder"></div>;
}

const editorConfig = {
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
    ImageNode
  ]
};



const TextEditor = () => {

  const [floatingAnchorElem, setFloatingAnchorElem] = useState<HTMLDivElement | null>(null);
  const [isLinkEditMode, setIsLinkEditMode] = useState<boolean>(false);

  const onChange = (e: EditorState) => {
    e.read(() => {
      console.log(e)
    })
  }

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (
    <div className='inte-TextEditor'>
      <LexicalComposer initialConfig={editorConfig}>
        <TableContext>
          <>
            <ToolBar />
            <RichTextPlugin
              contentEditable={<div ref={onRef}><ContentEditable spellCheck={false} className="inte-TextEditor__body" /></div>}
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
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