import React, { useEffect } from 'react'

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import EditorTheme from './EditorTheme';
import './TextEditor.css'
import ToolbarPlugin from './plugin/ToolBarPulgin';
import {ListPlugin} from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { EditorState } from 'lexical';
import OnChangePlugin from './plugin/OnChangePlugin';
import ToolBarPlugin1 from './plugin/ToolBarPlugin1';

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
    const onChange = (e:EditorState) => {
        e.read(() => {

        })
    }

    return (
        <div className='inte-TextEditor'>
            <LexicalComposer initialConfig={editorConfig}>
                <ToolBarPlugin1 />
                <RichTextPlugin
                    contentEditable={<ContentEditable spellCheck={false} className="inte-textEditor__body" />}
                    placeholder={<Placeholder />}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <HistoryPlugin />
                <ListPlugin />
                <LinkPlugin />
                <OnChangePlugin onChange={onChange}/>
            </LexicalComposer>
        </div>
    )
}

export default TextEditor