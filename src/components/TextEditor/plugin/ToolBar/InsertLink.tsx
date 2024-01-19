import React, { useCallback, useEffect, useState } from 'react'
import Button from '../../../Button/Button'
import { Link2 } from '../../../../icons'
import { $getSelection, $isRangeSelection, LexicalEditor } from 'lexical'
import { TOGGLE_LINK_COMMAND,toggleLink} from "@lexical/link";
import Modal from '../../../Modal/Modal';
import { TextField } from '../../../Form';
import { FlexLayout } from '../../../FlexLayout';

interface InsertLinkI {
  editor: LexicalEditor
  isLink: boolean
  selectedText: string
}

const InsertLink = ({ editor, isLink, selectedText }: InsertLinkI) => {

  const [open, setOpen] = useState(false)
  const [linkTextValue, setLinkTextValue] = useState(selectedText)
  const [linkHref, setLinkHref] = useState("https://")

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
            const { anchor, focus } = selection;
            // inserting just the link text at the current selection
            selection.insertText(linkTextValue);

            // selecting the inserted text
            anchor.offset -= linkTextValue.length;
            focus.offset = anchor.offset + linkTextValue.length;
            
            // transforming selection into a link
            toggleLink(linkHref);
          }
      });
    } else {
      console.log("remove Link")
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
    setOpen(false)
  }, [editor, isLink , linkHref , linkTextValue]);

  useEffect(() => {
    setLinkTextValue(selectedText)
  },[selectedText])

  // console.log(selectedText , "selectedText")

  return (
    <>
      <Button
        onClick={isLink ? () => insertLink() : () => setOpen(prev => !prev)}
        icon={<Link2 size="20" color='#1C2433' />}
        type='textButton'
      />

      <Modal
        modalSize='small'
        isOpen={open}
        onClose={() => setOpen(false)}
        heading='Add Link'
        isCloseOnEsc
        isOverlayClose
        primaryAction={{
          type: "primary",
          onClick: insertLink,
          content: "Add Link",
        }}
        secondaryAction={{
          type: "secondary",
          onClick:() => setOpen(false),
          content: "Cancel",
        }}
      >
        <FlexLayout direction='vertical' spacing='loose'>
          <TextField label="Text" value={linkTextValue} onChange={(newValue) => setLinkTextValue(newValue)} />
          <TextField label="Link" value={linkHref} onChange={(newValue) => setLinkHref(newValue)} />
        </FlexLayout>
      </Modal>
    </>
  )
}

export default InsertLink