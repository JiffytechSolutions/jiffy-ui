import React from 'react'
import { ElementFormatType } from "lexical"
import { useState } from "react"
import Button from "../../../Button/Button"
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "../../../../icons"
import ActionList from '../../../ActionList/ActionList'

interface TextAlignBoxI {
  onClick: (align: ElementFormatType) => void,
  currAlign : "center" | "justify" | "right" | "left" 
}

const AlignIcons = {
  left : <AlignLeft size="20" color='#1C2433' />,
  right : <AlignRight size="20" color='#1C2433' />,
  center : <AlignCenter size="20" color='#1C2433' />,
  justify : <AlignJustify size="20" color='#1C2433' />,
}

const TextAlignBox = ({ onClick , currAlign }: TextAlignBoxI) => {
  const [open, setOpen] = useState(false)

  const activator = (
    <Button
      customClass='custom-width-btn'
      icon={<AlignLeft size="20" color='#1C2433' />}
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
            content: "Align Left",
            prefixIcon: AlignIcons.left,
            onClick: () => onClick("left")
          },
          {
            content: "Align Right",
            prefixIcon: AlignIcons.right,
            onClick: () => onClick("right")
          },
          {
            content: "Align Center",
            prefixIcon: AlignIcons.center,
            onClick: () => onClick("center")
          },
          {
            content: "Align Justify",
            prefixIcon: AlignIcons.justify,
            onClick: () => onClick("justify")
          },
        ]
      }]}
    />
  )
}

export default TextAlignBox