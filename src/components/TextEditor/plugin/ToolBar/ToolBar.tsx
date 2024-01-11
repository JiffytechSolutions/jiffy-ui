import React, { useState } from 'react'
import { Select, TextField } from '../../../Form'
import './ToolBar.css'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Code, Image, Italic, Link2, List, ListIcon, Minus, MoreVertical, Plus, RotateCcw, RotateCw, Underline } from '../../../../icons'
import Button from '../../../Button/Button'

import { TextColorSvg, GridSvg } from './toolBarSvg'
import ActionList from '../../../ActionList/ActionList'
import Seprator from '../../../Seprator/Seprator'

const FontSizeToggle = () => {

  const [value , setValue] = useState(11)

  return <div className='inte-textEditor__fontSizeToggle'>
    <Button
      icon={<Minus size="24" color='#1C2433' />}
      type='textButton'
      onClick={() => setValue(prev => prev === 1 ? 1 : prev -1)}
    />
    <TextField value={value}  customClass='inte-customSmallInput'/>
    <Button
      icon={<Plus size="24" color='#1C2433' />}
      type='textButton'
      onClick={() => setValue(prev => prev+1)}
    />
  </div>
}

const ListSelectBox = () => {
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
            content : "Bullet List",
            prefixIcon : <ListIcon size="20" color='#1C2433' />
          },
          {
            content : "Number List",
            prefixIcon : <ListIcon size="20" color='#1C2433' />
          }
        ]
      }]}
    />
  )
}

const TextAlignBox = () => {
  const [open, setOpen] = useState(false)

  const activator = (
    <Button
      customClass='custom-width-btn'
      icon={<AlignLeft size="20" color='#1C2433' />}
      onClick={() => setOpen(prev => !prev)}
      type={open ? "secondary" : 'textButton'}
      disclosure
      content=''
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
            content : "Align Left",
            prefixIcon : <AlignLeft size="20" color='#1C2433' />
          },
          {
            content : "Align Right",
            prefixIcon : <AlignRight size="20" color='#1C2433' />
          },
          {
            content : "Align Center",
            prefixIcon : <AlignCenter size="20" color='#1C2433' />
          },
          {
            content : "Align Justify",
            prefixIcon : <AlignJustify size="20" color='#1C2433' />
          },
        ]
      }]}
    />
  )
}

const Line = () => <span className='inte-line'></span>

const ToolBar = () => {
  return (
    <div className='inte-TextEditor__toolBar'>
      <div className='inte-TextEditor__fontFormat'>
        <Select
          options={[
            { label: "Normal text", value: "Normal text" },
            { label: 'Heading 1', value: "Heading 1" },
            { label: 'Heading 2', value: "Heading 2" },
            { label: 'Heading 3', value: "Heading 3" },
          ]}
          value={"Normal text"}
        />
        <Select
          options={[
            { label: "Arial", value: "Arial" },
            { label: 'Heading 1', value: "Heading 1" },
            { label: 'Heading 2', value: "Heading 2" },
            { label: 'Heading 3', value: "Heading 3" },
          ]}
          value={"Arial"}
        />
      </div>
      <div className='inte-textEditor__fontStyle'>
        <Button
          icon={<Bold size="20" color='#1C2433' />}
          type='textButton'
        />
        <Button
          icon={<Italic size="20" color='#1C2433' />}
          type='textButton'
        />
        <Button
          icon={<Underline size="20" color='#1C2433' />}
          type='textButton'
        />
        <Button
          icon={<TextColorSvg />}
          type='textButton'
        />

        <Button
          icon={<MoreVertical size="20" color='#1C2433' />}
          type='textButton'
        />
      </div>
      <Line />
      <FontSizeToggle />
      <Line />
      <div className='inte-textEditor__blockStyle'>
        <ListSelectBox />
        <TextAlignBox />
      </div>
      <Line />
      <div className='inte-textEditor__specialNodes'>
        <Button
          icon={<Link2 size="20" color='#1C2433' />}
          type='textButton'
        />
        <Button
          icon={<Image size="20" color='#1C2433' />}
          type='textButton'
        />
        <Button
          icon={<GridSvg />}
          type='textButton'
        />
        <Button
          icon={<Code size="20" color='#1C2433' />}
          type='textButton'
        />
      </div>
      <Line />
      <div className="inte-textEditor__history">
        <Button
          icon={<RotateCcw size="20" color='#1C2433' />}
          type='textButton'
        />
        <Button
          icon={<RotateCw size="20" color='#1C2433' />}
          type='textButton'
        />
      </div>
    </div>
  )
}

export default ToolBar