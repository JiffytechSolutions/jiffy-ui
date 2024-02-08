import React, { useEffect, useState } from "react"
import { Minus, Plus } from "../../../../icons"
import Button from "../../../Button/Button"
import { Select, TextField } from "../../../Form"
import { $INTERNAL_isPointSelection, $getSelection, LexicalEditor } from "lexical"
import { $patchStyleText } from '@lexical/selection';

interface FontSizeToggleI {
  editor: LexicalEditor
  value: string
}

const fontSizeOptions = Array(43).fill(0).map((_, ind) => {
  return {
    label: `${ind + 8}`,
    value: `${ind + 8}px`
  }
})

const FontSizeToggle = ({ editor, value }: FontSizeToggleI) => {

  const handleFontSizeChange = (newSize: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($INTERNAL_isPointSelection(selection)) {
        $patchStyleText(selection, {
          'font-size': newSize,
        });
      }
    });
  }
  return (
    <div className="inte-textEditor__fontSizeChanger">
      <Select
        options={fontSizeOptions}
        value={value}
        onChange={handleFontSizeChange}
      />
    </div>
  )
}

export default FontSizeToggle