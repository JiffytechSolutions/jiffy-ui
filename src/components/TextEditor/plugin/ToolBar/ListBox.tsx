import React, { useState } from 'react'
import { ListIcon } from '../../../../icons'
import { LexicalEditor } from 'lexical'

import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";
import Switcher, { SwitcherI } from '../../../Switcher/Switcher'
import { NumberedListSvg } from './toolBarSvg';

interface ListSelectBoxI {
  editor: LexicalEditor
  currListType: undefined | "number" | "bullet"
}

const ListSelectBox = ({ editor, currListType }: ListSelectBoxI) => {
  const [value, setValue] = useState<any>({
    icon: <ListIcon size="20" color='#1C2433' />,
    label: "",
  })

  const handelValueChange = (newValue: SwitcherI["value"]) => {
    setValue(newValue)
    if (newValue.label === "Bullet List") {
      currListType === "bullet" ? editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined) : editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
    }
    else {
      currListType === "number" ? editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined) : editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
    }
  }

  return (
    <Switcher
      onChange={handelValueChange}
      value={{ ...value, label: "" }}
      options={[
        {
          icon: <ListIcon size="20" color='#1C2433' />,
          label: "Bullet List",
        },
        {
          icon: <NumberedListSvg />,
          label: "Number List",
        }
      ]}
    />
  )
}

export default ListSelectBox