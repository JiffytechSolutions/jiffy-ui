import React, { useMemo, useState } from 'react'
import { ListIcon } from '../../../../icons'
import { LexicalEditor } from 'lexical'

import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";
import Switcher, { SwitcherI } from '../../../Switcher/Switcher'
import { NumberedListSvg } from './toolBarSvg';
import { toolbarItems } from '../../TextEditor';

interface ListSelectBoxI {
  editor: LexicalEditor
  currListType: undefined | "number" | "bullet",
  toolbarItems?: toolbarItems
}

const ListSelectBox = ({ editor, currListType, toolbarItems }: ListSelectBoxI) => {
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

  const listOptions = useMemo(() => {
    let items = [
      {
        icon: <ListIcon size="20" color='#1C2433' />,
        label: "Bullet List",
      },
      {
        icon: <NumberedListSvg />,
        label: "Number List",
      }
    ]

    if (toolbarItems?.list?.unOrderedList === false) items = items.filter(i => i.label !== "Bullet List")
    if (toolbarItems?.list?.orderedList === false) items = items.filter(i => i.label !== "Number List")

    return items
  }, [toolbarItems])

  return (
    <>
      {
        listOptions.length > 0 ? <Switcher
          onChange={handelValueChange}
          value={{ ...value, label: "" }}
          options={listOptions}
        /> : null
      }
    </>
  )
}

export default ListSelectBox