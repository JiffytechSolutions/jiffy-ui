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

const classList = {
  BOLD : 'bold',
  ITALIC : 'italic',
  UNDERLINE : 'underline',
  NOTBOLD : 'notBold',
  NOTITALIC : 'notItalic',
  NOTUNDERLINE : 'notUnderline'
  
}

const TextEditor = ({
  placeholder,
  initialText
}: TextEditorI) => {

  const selection = document.getSelection()
  const range = new Range
  const [currStyleApplied, setCurrStyleApplied] = useState({
    bold: false,
    italic: false,
    underline: false,
  })

  const [inputType, setInputType] = useState<string>("")

  const editorRef = useRef<HTMLDivElement>(null)

  const findAppliedStyleInRange = (range: Range) => {
    let currentContainer: Node | null = null
    let appliedStyle: { [key: string]: null | boolean } = {
      bold: null,
      italic: null,
      underline: null
    }
    if (range.endOffset - range.startOffset === 1) {
      currentContainer = range.startContainer;
    }
    while (currentContainer && currentContainer !== editorRef.current) {

      console.log((currentContainer as HTMLElement).classList)

      if ((currentContainer as HTMLElement).classList?.contains(classList.BOLD)) {
        if (appliedStyle.bold === null) appliedStyle.bold = true
      }
      if ((currentContainer as HTMLElement).classList?.contains(classList.NOTBOLD)) {
        if (appliedStyle.bold === null) appliedStyle.bold = false
      }

      if ((currentContainer as HTMLElement).classList?.contains(classList.ITALIC)) {
        if (appliedStyle.italic === null) appliedStyle.italic = true;
      }
      if ((currentContainer as HTMLElement).classList?.contains(classList.NOTITALIC)) {
        if (appliedStyle.italic === null) appliedStyle.italic = false;
      }

      if ((currentContainer as HTMLElement).classList?.contains(classList.UNDERLINE)) {
        if (appliedStyle.underline === null) appliedStyle.underline = true
      }
      if ((currentContainer as HTMLElement).classList?.contains(classList.NOTUNDERLINE)) {
        if (appliedStyle.underline === null) appliedStyle.underline = false
      }

      currentContainer = currentContainer.parentElement
    }

    Object.keys(appliedStyle).forEach(i => {
      if(!appliedStyle[i]) appliedStyle[i] = false
    })

    return appliedStyle
  }


  const handelOnInput = (e: React.FormEvent) => {
    if (!selection) return
    const currRange = selection.getRangeAt(0);
    if (inputType === "insertText") {
      currRange.setStart(currRange.startContainer, currRange.startOffset - 1)
      const appliedStyle = findAppliedStyleInRange(currRange)
      console.log(appliedStyle , currStyleApplied)
      const container = document.createElement("span")

      if (appliedStyle.italic !== currStyleApplied.italic) {
        if (currStyleApplied.italic) {
          container.classList.add(classList.ITALIC)
        }
        else container.classList.add(classList.NOTITALIC)
      }

      if (appliedStyle.bold !== currStyleApplied.bold) {
        if (currStyleApplied.bold) {
          container.classList.add(classList.BOLD)
        }
        else container.classList.add(classList.NOTBOLD)
      }

      if (appliedStyle.underline !== currStyleApplied.underline) {
        if (currStyleApplied.underline) {
          container.classList.add(classList.UNDERLINE)
        }
        else container.classList.add(classList.NOTUNDERLINE)
      }

      if (container.classList.length) currRange.surroundContents(container)

      selection.removeAllRanges()
      selection.addRange(currRange)
      selection.collapseToEnd()

      // console.clear()
      // console.log(editorRef.current?.innerHTML)
    }

    // currRange.set
  };

  const handelToolBarButtonClick = (type: "bold" | "italic" | "underline") => {
    if(!selection)  return
    setCurrStyleApplied(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
    const currRange = selection.getRangeAt(0);
    selection?.removeAllRanges()
    selection?.addRange(currRange)
  }

  const handelBeforeInput = (e: InputEvent) => {
    setInputType(e.inputType)

  }

  useEffect(() => {
    if (!editorRef.current) return
    editorRef.current.addEventListener("beforeinput", handelBeforeInput);
    return () => {
      editorRef.current?.removeEventListener("beforeinput", handelBeforeInput)
    }
  }, [])


  return (
    <div className='inte-textEditor'>
      <div className='inte-textEditor__toolbar'>
        <Button size='extraThin' onClick={() => handelToolBarButtonClick("bold")} type={currStyleApplied.bold ? "secondary" : "outlined"}><b>B</b></Button>
        <Button size='extraThin' onClick={() => handelToolBarButtonClick("italic")} type={currStyleApplied.italic ? "secondary" : "outlined"}><i>I</i></Button>
        <Button size='extraThin' onClick={() => handelToolBarButtonClick("underline")} type={currStyleApplied.underline ? "secondary" : "outlined"}><u>U</u></Button>
      </div>
      <div
        ref={editorRef}
        className="inte-textEditor__body"
        contentEditable={true}
        onInput={handelOnInput}
      >
      </div>
    </div>
  );
};

export default TextEditor;
