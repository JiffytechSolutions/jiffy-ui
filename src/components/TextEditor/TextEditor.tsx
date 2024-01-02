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


  const selection = document.getSelection()
  const range = new Range
  const [currStyleApplied, setCurrStyleApplied] = useState({
    bold: false,
    italic: false,
    underline: false,
  });

  const editorRef = useRef<HTMLDivElement>(null);

  const handelOnInput = (e: React.FormEvent) => {
    console.log("onInputCalling");
    if (!selection || !editorRef.current) return;

    const parent = selection.anchorNode?.parentElement;

    if (!parent) return;

    if (parent === editorRef.current) {
      const currTag = document.createElement('p');
      range.selectNode(selection.anchorNode)
      range.surroundContents(currTag)
      selection.removeAllRanges();
      range.collapse(false)
      selection.addRange(range);
    }

    // Replace the zero-width character directly
    else {
      parent.innerHTML = parent.innerHTML.replace(/\u200B/g, '');

      selection.removeAllRanges();
      range.selectNode(parent);
      range.collapse(false);
      selection.addRange(range);
    }
  };


  const giveCurrentFormat = (selectedRange:Range , currentStyle : {bold:boolean , italic:boolean , underline:boolean}) => {
    const treeWalker = document.createTreeWalker(selectedRange.startContainer)
    console.log(selectedRange , currentStyle , treeWalker)
  }

  const handelToolBarButtonClick = (type: "strong" | "i" | "u") => {
    const currStyle = type === "strong" ? "bold" : type === "i" ? "italic" : "underline";

    const currStyleToBeApplied = {
      ...currStyleApplied,
      [currStyle] : !currStyleApplied[currStyle]
    }

    if (!selection || !editorRef.current) return
    const selectedRange = selection.getRangeAt(0).cloneRange()

    const val = giveCurrentFormat(selectedRange , currStyleToBeApplied)

    const currTag = document.createElement(type)

    let currT;
    if(currStyleToBeApplied.bold){
      currT = document.createElement('strong')
      currT.setAttribute('class' , 'bold')
    }
    if(currStyleToBeApplied.italic) {
      if(!currT)  currT = document.createElement('i');
      else {
        console.log(currT , "beforeInsert")
        
        const t = document.createElement('i')
        t.setAttribute('class' , 'italic')
        t.insertAdjacentHTML("beforeend", '&#8203;')
        currT.insertAdjacentElement('beforeend',t)
        // currT.appendChild(t)
        console.log(currT , "afterInser")
      }
    }
    if(currStyleToBeApplied.underline)  {
      if(!currT)  currT = document.createElement('u');
      else currT.appendChild(document.createElement('u'))
    }

    console.log(currT , currStyleToBeApplied)

    currT = currT ? currT : document.createElement('p')

    if(selectedRange.startContainer !== selectedRange.endContainer) {
      console.log("not same")
      range.setStart(selectedRange.startContainer , selectedRange.startOffset)
      range.setEnd(selectedRange.startContainer ,selectedRange.startContainer.textContent?.length ?? 0 )


      const fragment = document.createDocumentFragment();

      

      range.surroundContents(currT)
    }

    else selectedRange.surroundContents(currT)

    if (selection.type === "Caret") {
      currT.insertAdjacentHTML("beforeend", '&#8203;')
    }

    selection.removeAllRanges()
    range.selectNode(currT)
    range.collapse(false)
    selection.addRange(range)

    setCurrStyleApplied(currStyleToBeApplied)
  }


  return (
    <div className='inte-textEditor'>
      <div className='inte-textEditor__toolbar'>
        <Button size='extraThin' onClick={() => handelToolBarButtonClick("strong")} type={currStyleApplied.bold ? "secondary" : "outlined"}><b>B</b></Button>
        <Button size='extraThin' onClick={() => handelToolBarButtonClick("i")} type={currStyleApplied.italic ? "secondary" : "outlined"}><i>I</i></Button>
        <Button size='extraThin' onClick={() => handelToolBarButtonClick("u")} type={currStyleApplied.underline ? "secondary" : "outlined"}><u>U</u></Button>
      </div>
      <div
        ref={editorRef}
        className="inte-textEditor__body"
        contentEditable={true}
        onInput={handelOnInput}
      >
        {initialText}
      </div>
    </div>
  );
};

export default TextEditor;
