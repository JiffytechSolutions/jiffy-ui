import React, { useMemo } from 'react'
import { ElementFormatType } from "lexical"
import { useState } from "react"
import Button from "../../../Button/Button"
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from "../../../../icons"
import ActionList from '../../../ActionList/ActionList'
import Switcher from '../../../Switcher/Switcher'

interface TextAlignBoxI {
  onClick: (align: ElementFormatType) => void,
  currAlign: ElementFormatType
}

const AlignIcons: { [key: string]: React.ReactNode } = {
  left: <AlignLeft size="20" color='#1C2433' />,
  right: <AlignRight size="20" color='#1C2433' />,
  center: <AlignCenter size="20" color='#1C2433' />,
  justify: <AlignJustify size="20" color='#1C2433' />,
  '': <AlignLeft size="20" color='#1C2433' />,
  start: <AlignLeft size="20" color='#1C2433' />,
  end: <AlignRight size="20" color='#1C2433' />
}

const TextAlignBox = ({ onClick, currAlign }: TextAlignBoxI) => {
  const handelValueChange = (newValue: any) => {
    const newAlignment = newValue.label.split(" ")[1]
    onClick(newAlignment)
  }

  const options = useMemo(() => {
    return Object.keys(AlignIcons).slice(0, 4).map(i => ({
      label: "Align " + i,
      icon: AlignIcons[i],
    }))
  }, [])

  console.log(currAlign)

  return (
    <Switcher
      onChange={handelValueChange}
      value={{
        icon: AlignIcons[currAlign],
        label: "",
      }}
      options={options}

    />
  )
}

export default TextAlignBox