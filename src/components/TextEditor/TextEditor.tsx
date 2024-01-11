import React, { useEffect } from 'react'

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode , TablePlugin } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import EditorTheme from './EditorTheme';
import './TextEditor.css'
import ToolbarPlugin from './plugin/ToolBarPlugin';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { EditorState } from 'lexical';
import OnChangePlugin from './plugin/OnChangePlugin';
import CustomLinkPlugin from './plugin/CustomLinkPlugin';
import { TableContext } from './plugin/TablePlugin';
import TableCellResizerPlugin from './plugin/TableCellResizerPlugin';
import ToolBar from './plugin/ToolBar/ToolBar';

function Placeholder() {
  return <div className="inte-textEditor__placeholder"></div>;
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
    LinkNode
  ]
};



const TextEditor = () => {
  const onChange = (e: EditorState) => {
    e.read(() => {
      console.log(e)
    })
  }

  return (
    <div className='inte-TextEditor'>
      <LexicalComposer initialConfig={editorConfig}>
        <TableContext>
          <>
            <ToolBar />
            {/* <TablePlugin />
            <TableCellResizerPlugin /> */}
            <RichTextPlugin
              contentEditable={<ContentEditable spellCheck={false} className="inte-textEditor__body" />}
              placeholder={<Placeholder />}
              ErrorBoundary={LexicalErrorBoundary}
            />
            <HistoryPlugin />
            <ListPlugin />
            <CustomLinkPlugin />
            <OnChangePlugin onChange={onChange} />
          </>
        </TableContext>
      </LexicalComposer>
    </div>
  )
}

export default TextEditor