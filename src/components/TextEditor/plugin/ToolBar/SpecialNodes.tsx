import React, { useState } from 'react'
import InsertLink from './InsertLink'
import { InsertImageDialog } from '../ImagesPulgin'
import { InsertTableModal } from '../Table/TablePlugin'
import ToolTip from '../../../ToolTip/ToolTip'
import Button from '../../../Button/Button'
import { Code, Plus } from '../../../../icons'
import { $INTERNAL_isPointSelection, $getSelection, $isRangeSelection, LexicalEditor } from 'lexical'
import { blockTypeToBlockName } from './ToolBar'
import { $createCodeNode } from "@lexical/code";
import { $setBlocksType } from "@lexical/selection"
import Popover from '../../../Popover/Popover'
import { toolbarItems } from '../../TextEditor'

interface SpecialNodesI {
  editor: LexicalEditor,
  isLink: boolean,
  selectedText: string,
  blockType: keyof typeof blockTypeToBlockName
  toolbarItems?: toolbarItems
}

const insidePopover = true

const SpecialNodes = ({ editor, isLink, selectedText, blockType, toolbarItems }: SpecialNodesI) => {

  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)

  const formatCode = () => {
    if (blockType !== 'code') {
      editor.update(() => {
        let selection = $getSelection();

        if ($INTERNAL_isPointSelection(selection)) {
          if (selection.isCollapsed()) {
            $setBlocksType(selection, () => $createCodeNode());
          } else {
            const textContent = selection.getTextContent();
            const codeNode = $createCodeNode();
            selection.insertNodes([codeNode]);
            selection = $getSelection();
            if ($isRangeSelection(selection))
              selection.insertRawText(textContent);
          }
        }
      });
    }
    onClose()
  };

  const codeBlock = <Button
    onClick={formatCode}
    icon={<Code size="20" color='#1C2433' />}
    size={insidePopover ? "large" : "thin"}
    type={"plainSecondary"}
  >
    {
      insidePopover ? "Insert Code Block" : null
    }
  </Button>

  const activator = <Button type={`${open ? "secondary" : "plainSecondary"}`} icon={<Plus size="20" color="#1c2433" />} onClick={() => setOpen(prev => !prev)} />

  const body = (
    <>
      {toolbarItems?.link === false ? null : <InsertLink close={onClose} editor={editor} isLink={isLink} selectedText={selectedText} insidePopover={insidePopover} />}
      {toolbarItems?.image === false ? null : <InsertImageDialog close={onClose} editor={editor} insidePopover={insidePopover} />}
      {toolbarItems?.table === false ? null : <InsertTableModal close={onClose} editor={editor} insidePopover={insidePopover} />}
      {
        toolbarItems?.codeBlock === false ? null : !insidePopover ? <ToolTip activator={codeBlock} helpText="Insert Code Block" /> : codeBlock
      }
    </>
  )

  return (
    <>
      {
        body.props.children.every((i: any) => i === null) === true ? null : insidePopover ? (
          <Popover
            heading='More Options'
            isOpen={open}
            activator={activator}
            onClose={onClose}
            customClass='inte-textEditor__popover--specialNodes'
          >
            {
              body
            }
          </Popover>
        ) : (
          <div className='inte-textEditor__specialNodes'>
            {
              body
            }
          </div>
        )
      }
    </>
  )
}

export default SpecialNodes