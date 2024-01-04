import React, { FormEvent, useEffect, useRef, useState } from "react";
import "./TextEditor.css";
import Button from "../Button/Button";

export interface TextEditorI {
  placeholder?: string;
  initialText?: string;
}

const classList = {
  BOLD: 'bold',
  ITALIC: 'italic',
  UNDERLINE: 'underline',
  NOTBOLD: 'notBold',
  NOTITALIC: 'notItalic',
  NOTUNDERLINE: 'notUnderline'

}

type appliedStyle = {
  bold: boolean,
  italic: boolean,
  underline: boolean,
}

const TextEditor = ({
  placeholder,
  initialText
}: TextEditorI) => {

  const selection = document.getSelection()
  const range = new Range

  const [currStyleApplied, setCurrStyleApplied] = useState<appliedStyle>({
    bold: false,
    italic: false,
    underline: false,
  })

  const [inputType, setInputType] = useState<string>("")

  const editorRef = useRef<HTMLDivElement>(null)


  // const findAppliedStyleInRange = (range: Range) => {
  //   let currentContainer: Node | null = null
  //   let appliedStyle: { [key: string]: null | boolean } = {
  //     bold: null,
  //     italic: null,
  //     underline: null
  //   }
  //   if (range.endOffset - range.startOffset === 1) {
  //     currentContainer = range.startContainer;
  //   }
  //   while (currentContainer && currentContainer !== editorRef.current) {
  //     if ((currentContainer as HTMLElement).classList?.contains(classList.BOLD)) {
  //       if (appliedStyle.bold === null) appliedStyle.bold = true
  //     }
  //     if ((currentContainer as HTMLElement).classList?.contains(classList.NOTBOLD)) {
  //       if (appliedStyle.bold === null) appliedStyle.bold = false
  //     }

  //     if ((currentContainer as HTMLElement).classList?.contains(classList.ITALIC)) {
  //       if (appliedStyle.italic === null) appliedStyle.italic = true;
  //     }
  //     if ((currentContainer as HTMLElement).classList?.contains(classList.NOTITALIC)) {
  //       if (appliedStyle.italic === null) appliedStyle.italic = false;
  //     }

  //     if ((currentContainer as HTMLElement).classList?.contains(classList.UNDERLINE)) {
  //       if (appliedStyle.underline === null) appliedStyle.underline = true
  //     }
  //     if ((currentContainer as HTMLElement).classList?.contains(classList.NOTUNDERLINE)) {
  //       if (appliedStyle.underline === null) appliedStyle.underline = false
  //     }

  //     currentContainer = currentContainer.parentElement
  //   }

  //   Object.keys(appliedStyle).forEach(i => {
  //     if(!appliedStyle[i]) appliedStyle[i] = false
  //   })

  //   return appliedStyle
  // }

  const findAppliedStyle = (node: Node):appliedStyle => {
    const res = {
      bold: node.parentElement?.classList.contains('bold') ?? false,
      italic: node.parentElement?.classList.contains('italic') ?? false,
      underline: node.parentElement?.classList.contains('underline') ?? false
    }

    return res
  }

  const handelOnInput = (e: React.FormEvent) => {
    if (!selection) return
    const currRange = selection.getRangeAt(0);
    if (inputType === "insertText") {
      currRange.setStart(currRange.startContainer, currRange.startOffset - 1)
      const appliedStyle = findAppliedStyle(currRange.startContainer)
      let makeNewNode = false;
      Object.keys(appliedStyle).map(i => {
        if (appliedStyle[i as keyof appliedStyle] !== currStyleApplied[i as keyof appliedStyle]) makeNewNode = true
      })

      if(makeNewNode){
        const container = document.createElement('span');
        let classListArr : string[] = []
        Object.keys(currStyleApplied).map(i => {
          if(currStyleApplied[i as keyof appliedStyle]) classListArr.push(i)
        })
        container.classList.add(...classListArr)
        console.clear()
        console.log( selection.getRangeAt(0) , range)
        container.appendChild(currRange.extractContents())
        
        currRange.endContainer.parentElement?.insertAdjacentElement("afterend" , container)

        selection.removeAllRanges()
        range.selectNode(container)
        selection.addRange(range)
        selection.collapseToEnd()
      }
      else {
        selection.removeAllRanges()
        selection.addRange(currRange)
        selection.collapseToEnd()
      }
    }
  };

  const handelToolBarButtonClick = (type: "bold" | "italic" | "underline") => {
    if (!selection) return
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
        data-placeholder={placeholder}
        spellCheck={false}
        className="inte-textEditor__body"
        contentEditable={true}
        dangerouslySetInnerHTML={{__html : "<p><span>a</span></p>"}}
        onInput={handelOnInput}
      >
      </div>
    </div>
  );
};

export default TextEditor;
