import React, { useEffect, useState } from "react"
import { Minus, Plus } from "../../../../icons"
import Button from "../../../Button/Button"
import { TextField } from "../../../Form"
import { $INTERNAL_isPointSelection, $getSelection, LexicalEditor } from "lexical"
import {$patchStyleText} from '@lexical/selection';

interface FontSizeToggleI {
  editor: LexicalEditor
  value: string
}

const FontSizeToggle = ({editor , value}:FontSizeToggleI) => {

  const [textFieldValue , setTextFieldValue] = useState(value.split('px')[0]) 

  const handleClick =  (newSize:string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($INTERNAL_isPointSelection(selection)) {
        $patchStyleText(selection, {
          'font-size': newSize,
        });
      }
    });
  }

  const handelBlur = () => {
    if(isNaN(Number(textFieldValue))) return
    else if(Number(textFieldValue) < 1)  handleClick("1px");
    else if(Number(textFieldValue) > 40) handleClick("40px");
    else handleClick(textFieldValue + "px");
  }

  const handelChange = (newValue: string) => {
    if(isNaN(Number(newValue))) return
    setTextFieldValue(newValue)
  }

  useEffect(() => {
    setTextFieldValue(value.split('px')[0])
  },[value])

  return <div className='inte-textEditor__fontSizeToggle'>
    <Button
      icon={<Minus size="24" color='#1C2433' />}
      isDisabled={Number(textFieldValue) === 1}
      type='textButton'
      onClick={() => handleClick(Number(textFieldValue) - 1 + 'px')}
    />
    <TextField onBlur={handelBlur} value={textFieldValue} customClass='inte-customSmallInput' onChange={handelChange} />
    <Button
      icon={<Plus size="24" color='#1C2433' />}
      type='textButton'
      isDisabled={Number(textFieldValue) === 40}
      onClick={() => handleClick(Number(textFieldValue) + 1 + 'px')}
    />
  </div>
}

export default FontSizeToggle