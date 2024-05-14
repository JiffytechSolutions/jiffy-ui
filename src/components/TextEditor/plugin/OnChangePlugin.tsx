import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React, { useContext } from "react";
import { useEffect } from "react";
import { $generateHtmlFromNodes } from '@lexical/html';
import { ValueContext } from "../context/ValueContext";

export interface OnChangePluginI {
  onChange?: (e: string) => void
}

function OnChangePlugin({ onChange }: OnChangePluginI) {
  const [editor] = useLexicalComposerContext();
  const { setEditorOnchangePrevValue } = useContext(ValueContext)

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const newHtml = $generateHtmlFromNodes(editor, null);

        const purifiedHtml = purifyHTMLofLexical(newHtml)
        if (onChange) {
          setEditorOnchangePrevValue(purifiedHtml)
          onChange(purifiedHtml);
        }
      });
    });
  }, [editor, onChange]);

  return null;
}

export const purifyHTMLofLexical = (html: string) => {
  let purifiedHtml = html
    .replaceAll('white-space: pre-wrap;', '') // Remove specific style attribute
    .replaceAll(' style=""', '') // Remove empty style attribute
    .replaceAll('dir="ltr"', "")
    .replaceAll('<p class="editor-paragraph"><br></p>', "")

  let tt = createElementFromHTML(purifiedHtml)
  tt = removeAttributes(tt)
  purifiedHtml = tt.innerHTML

  purifiedHtml = purifiedHtml
    .replaceAll('<strong>', '') // Remove <strong> tags
    .replaceAll('</strong>', '') // Remove </strong> tags
    .replaceAll('<em>', '') // Remove <em> tags
    .replaceAll('</em>', '') // Remove </em> tags

  purifiedHtml = removeEmptySpan(purifiedHtml)

  purifiedHtml = purifiedHtml.replaceAll('<strong ', '<b ').replaceAll('</strong>', '</b>').replaceAll('</b></b>', "</b>").replaceAll("<b><b ", "<b ")
    .replaceAll('<em ', '<i ').replaceAll('</em>', '</i>').replaceAll('</i></i>', "</i>").replaceAll("<i><i ", "<i ")
  return purifiedHtml
}

function createElementFromHTML(htmlString: string) {
  var div = document.createElement('div');
  div.innerHTML = htmlString.trim();

  // Change this to div.childNodes to support multiple top-level nodes.
  return div;
}

function removeAttributes(ele: any) {
  if (typeof ele === "object" && ele.nodeType === 1) {
    ele.removeAttribute("class")
    ele.removeAttribute("value")
    ele.removeAttribute("rel")
  };
  ele?.childNodes?.forEach((item: any) => removeAttributes(item));

  return ele;
}

function removeEmptySpan(html: string) {
  let res = html.replaceAll("<span>", "")
  res = createElementFromHTML(res).innerHTML
  return res
}
export default OnChangePlugin