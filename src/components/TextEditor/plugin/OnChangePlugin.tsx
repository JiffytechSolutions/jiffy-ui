import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EditorState } from "lexical";
import React from "react";
import { useEffect } from "react";

export interface OnChangePluginI {
    onChange : (e: EditorState) => void
}

function OnChangePlugin({ onChange }:OnChangePluginI) {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
      return editor.registerUpdateListener(({editorState}) => {
        onChange(editorState);
      });
    }, [editor, onChange]);

    return <></>
  }
export default OnChangePlugin