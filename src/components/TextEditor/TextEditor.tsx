import React, { FormEvent, useEffect, useRef, useState } from "react";
import "./TextEditor.css";
import Button from "../Button/Button";

export interface TextEditorI {
  placeholder?: string;
  initialText?: string;
}

const convertStringToHTML = (htmlString: string) => {
  const parser = new DOMParser();
  const html = parser.parseFromString(htmlString, "text/html");

  return { __html: html.body.innerHTML } as { __html: string | TrustedHTML };
};

const setEndOfContenteditable = (contentEditableElement: Element) => {
  let range, selection;
  range = document.createRange(); //Create a range (a range is a like the selection but invisible)
  range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
  range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
  selection = window.getSelection(); //get the selection object (allows you to change selection)
  selection?.removeAllRanges(); //remove any selections already made
  selection?.addRange(range); //make the range you have just created the visible selection
};

const TextEditor = ({ placeholder, initialText }: TextEditorI) => {
  const [currStyleApplied, setCurrStyleApplied] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const editorRef = useRef<HTMLDivElement>(null);

  const makeHTMLStringToBold = (htmlString: string) => {
    let res = "";
    const tempDiv = document.createElement("p");
    tempDiv.innerHTML = htmlString;
    const textNodes = tempDiv.querySelectorAll("p");
    textNodes.forEach((node) => {
      let html = node.innerHTML;
      html = html.replaceAll("<strong>", "");
      html = html.replaceAll("</strong>", "");
      html = `<p><strong>${html}</strong></p>`;
      res += html;
    });
    return res;
  };

  const findCaretPosition = () => {
    const selection = document.getSelection();
    const currAppliedStyles = selection?.anchorNode;

    const selectedRange = selection?.getRangeAt(0).cloneRange();

    if (!selection || !selectedRange || !editorRef.current) return;

    // const boldTag = document.createElement('strong')
    // selectedRange?.surroundContents(boldTag)

    // selection.removeAllRanges();
    // selection.addRange(selectedRange);
  };

  const handelOnInput = (e: React.FormEvent) => {};

  // const handelEditorKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
  //   if (!editorRef.current) return
  //   if (e.key === "Enter") {
  //     findCaretPosition()
  //     // e.preventDefault()

  //     // editorRef.current.innerHTML =html + `<p><br></p>`

  //   }
  // }

  const handelToolBarButtonClick = (type: "bold" | "italic" | "underline") => {
    const selection = document.getSelection();
    const range = new Range();
    if (!selection || !editorRef.current) return;
    const selectedRange = selection.getRangeAt(0).cloneRange();
    const boldTag = document.createElement("strong");

    if (selection.type === "Caret") {
      const textNode = document.createTextNode("asvgfkdjsfvgk");
      boldTag.appendChild(textNode);
    }

    selectedRange.surroundContents(boldTag);

    selection.removeAllRanges();
    range.selectNode(boldTag);
    range.collapse(false);
    selection.addRange(range);
  };

  const handelOnFocus = () => {
    // if(!editorRef.current)  return
    // if(editorRef.current.innerHTML === ""){
    //   editorRef.current.innerHTML = `<p></p>`
    //   setEndOfContenteditable(editorRef.current)
    // }
  };

  return (
    <div className="inte-textEditor">
      <div className="inte-textEditor__toolbar">
        <Button
          size="extraThin"
          onClick={() => handelToolBarButtonClick("bold")}
          type={currStyleApplied.bold ? "secondary" : "outlined"}
        >
          <b>B</b>
        </Button>
        <Button
          size="extraThin"
          onClick={() =>
            setCurrStyleApplied((prev) => ({ ...prev, italic: !prev.italic }))
          }
          type={currStyleApplied.italic ? "secondary" : "outlined"}
        >
          <i>I</i>
        </Button>
        <Button
          size="extraThin"
          onClick={() =>
            setCurrStyleApplied((prev) => ({
              ...prev,
              underline: !prev.underline,
            }))
          }
          type={currStyleApplied.underline ? "secondary" : "outlined"}
        >
          <u>U</u>
        </Button>
      </div>
      <div
        ref={editorRef}
        className="inte-textEditor__body"
        contentEditable={true}
        onInput={handelOnInput}
        onFocus={handelOnFocus}
        // onKeyDown={handelEditorKeyDown}
      >
        {initialText}
      </div>
    </div>
  );
};

export default TextEditor;
