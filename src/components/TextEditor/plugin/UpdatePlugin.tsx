import React, { useContext, useRef, useState } from 'react'
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot, $getSelection, $insertNodes, $setSelection, BaseSelection } from "lexical";
import { $generateNodesFromDOM } from '@lexical/html';
import { useEffect } from "react";
import { ValueContext } from './ValueContext';

interface UpdatePluginI {
    value: string
}

const textHtmlMimeType = 'text/html';

const UpdatePlugin = ({ value }: UpdatePluginI) => {
    const [editor] = useLexicalComposerContext();
    const { editorOnchangePrevValue, setEditorOnchangePrevValue } = useContext(ValueContext)

    const updateEditor = () => {
        editor.setEditable(false);
        let initialSelection: BaseSelection | undefined
        editor.update(() => {
            initialSelection = $getSelection()?.clone()
            const parser = new DOMParser();
            const dom = parser.parseFromString(value, textHtmlMimeType);
            const nodes = $generateNodesFromDOM(editor, dom);
            $getRoot().clear();
            $insertNodes(nodes);
            // $setSelection(null)
        });
        requestAnimationFrame(() => {
            editor.setEditable(true)
        });
    }

    useEffect(() => {
        if (editorOnchangePrevValue !== value) {
            updateEditor();
        }
    }, [value])

    return <></>
};

export default UpdatePlugin