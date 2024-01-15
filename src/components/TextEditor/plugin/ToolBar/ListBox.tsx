import React, { useState } from 'react'
import Button from '../../../Button/Button'
import { ListIcon } from '../../../../icons'
import ActionList from '../../../ActionList/ActionList'
import { LexicalEditor } from 'lexical'

import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
  $isListNode,
  ListNode
} from "@lexical/list";

interface ListSelectBoxI {
  editor : LexicalEditor
  currListType : undefined | "number" | "bullet"
}

const ListSelectBox = ({editor , currListType}:ListSelectBoxI) => {
  const [open, setOpen] = useState(false)

  const activator = (
    <Button
      customClass='custom-width-btn'
      icon={<ListIcon size="20" color='#1C2433' />}
      onClick={() => setOpen(prev => !prev)}
      type={open ? "secondary" : 'textButton'}
      disclosure
    />
  )

  return (
    <ActionList
      isOpen={open}
      onClose={() => setOpen(false)}
      activator={activator}
      options={[{
        items: [
          {
            content: "Bullet List",
            prefixIcon: <ListIcon size="20" color='#1C2433' />,
            onClick:() =>currListType === "bullet" ? editor.dispatchCommand(REMOVE_LIST_COMMAND , undefined) : editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND , undefined)
          },
          {
            content: "Number List",
            prefixIcon: <ListIcon size="20" color='#1C2433' />,
            onClick:() =>currListType === "number" ? editor.dispatchCommand(REMOVE_LIST_COMMAND , undefined) : editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND , undefined)
          }
        ]
      }]}
    />
  )
}

export default ListSelectBox