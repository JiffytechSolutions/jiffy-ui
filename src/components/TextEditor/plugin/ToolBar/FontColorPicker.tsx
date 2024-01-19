import { $INTERNAL_isPointSelection, $createParagraphNode, $getSelection, $isRangeSelection, $isTextNode, FORMAT_TEXT_COMMAND, LexicalEditor, SELECTION_CHANGE_COMMAND } from 'lexical'
import React, { useCallback, useEffect, useState } from 'react'
import Button from '../../../Button/Button'
import { Bold, Italic, MoreVertical, Underline } from '../../../../icons'
import { TextColorSvg } from './toolBarSvg'
import { mergeRegister, $getNearestBlockElementAncestorOrThrow } from "@lexical/utils";
import ActionList from '../../../ActionList/ActionList'
import { $isHeadingNode, $isQuoteNode } from '@lexical/rich-text';
import { $isDecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode';
import Popover from '../../../Popover/Popover'
import { FlexLayout } from '../../../FlexLayout'
import { $patchStyleText , $getSelectionStyleValueForProperty} from '@lexical/selection';
import ColorPicker from '../../ui/color-picker/ColorPicker'
import ToolTip from '../../../ToolTip/ToolTip'

interface FontStyleI {
  editor: LexicalEditor
}

const FontStyle = ({ editor }: FontStyleI) => {

  const [open, setOpen] = useState(false)

  const [isBold, setIsBold] = useState(false)
  const [isItalic, setIsItalic] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)
  const [isStrikeThrough, setIsStrikeThrough] = useState(false)
  const [isSubscript, setIsSubscript] = useState(false)
  const [isSuperscript, setIsSuperscript] = useState(false)
  const [fontColor , setFontColor] = useState('')

  const updateToolBar = () => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"))
      setIsItalic(selection.hasFormat("italic"))
      setIsUnderline(selection.hasFormat('underline'))
      setIsStrikeThrough(selection.hasFormat('strikethrough'))
      setIsSubscript(selection.hasFormat('subscript'))
      setIsSuperscript(selection.hasFormat('superscript'))
      setFontColor(
        $getSelectionStyleValueForProperty(selection, 'color', '#000'),
      );
    }
  }

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolBar();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          updateToolBar();
          return false;
        },
        1
      ),
    )
  })

  const activator = <Button
    icon={<MoreVertical size="20" color='#1C2433' />}
    type='textButton'
    onClick={() => setOpen(prev => !prev)}
  />

  const onClose = () => setOpen(false)

  const clearFormatting = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const anchor = selection.anchor;
        const focus = selection.focus;
        const nodes = selection.getNodes();

        if (anchor.key === focus.key && anchor.offset === focus.offset) {
          return;
        }

        nodes.forEach((node, idx) => {
          // We split the first and last node by the selection
          // So that we don't format unselected text inside those nodes
          if ($isTextNode(node)) {
            // Use a separate variable to ensure TS does not lose the refinement
            let textNode = node;
            if (idx === 0 && anchor.offset !== 0) {
              textNode = textNode.splitText(anchor.offset)[1] || textNode;
            }
            if (idx === nodes.length - 1) {
              textNode = textNode.splitText(focus.offset)[0] || textNode;
            }

            if (textNode.__style !== '') {
              textNode.setStyle('');
            }
            if (textNode.__format !== 0) {
              textNode.setFormat(0);
              $getNearestBlockElementAncestorOrThrow(textNode).setFormat('');
            }
            node = textNode;
          } else if ($isHeadingNode(node) || $isQuoteNode(node)) {
            node.replace($createParagraphNode(), true);
          } else if ($isDecoratorBlockNode(node)) {
            node.setFormat('');
          }
        });
      }
    });
  }, [editor]);

  const handelColorChange = (newColor:string) => {
    editor.update(
      () => {
        const selection = $getSelection();
        if ($INTERNAL_isPointSelection(selection)) {
          $patchStyleText(selection, {color : newColor});
        }
      }
    );
  }

  return (
    <div className='inte-textEditor__fontStyle'>
      <ToolTip 
        activator={<Button
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
          }}
          icon={<Bold size="20" color='#1C2433' />}
          type={isBold ? "secondary" : 'textButton'}
        />}
        helpText="Bold"
      />
      <ToolTip 
        activator={<Button
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
          }}
          icon={<Italic size="20" color='#1C2433' />}
          type={isItalic ? "secondary" : 'textButton'}
        />}
        helpText={"Italic"}
      />
      <ToolTip 
        activator={<Button
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
          }}
          icon={<Underline size="20" color='#1C2433' />}
          type={isUnderline ? "secondary" : 'textButton'}
        />}
        helpText={"Underline"}
      />
      <ToolTip 
        activator={<FontColorPicker onChange={handelColorChange} color={fontColor} />}
        helpText={"Change Text Color"}
      />

      <ActionList
        isOpen={open}
        onClose={onClose}
        activator={activator}
        options={[{
          items: [
            {
              content: "Strikethrough",
              onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")
            },
            {
              content: "Subscript",
              onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript")
            },
            {
              content: "Superscript",
              onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript")
            },
            {
              content: 'Code',
              onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")
            },
            {
              content: "Clear Formatting",
              onClick: clearFormatting
            }
          ]
        }]}
      />

    </div>
  )
}

interface FontColorPickerI {
  onChange : (colorValue:string) => void
  color : string
}

const FontColorPicker = ({onChange , color}:FontColorPickerI) => {
  const [open, setOpen] = useState(false)
  const onClose = () => setOpen(false)

  const activator = <Button
    icon={<TextColorSvg />}
    type='textButton'
    onClick={() => setOpen(prev => !prev)}
  />

  return (
    <Popover
      isOpen={open}
      onClose={onClose}
      activator={activator}
      customClass='inte-textEditor--customHeight'
    >
     <ColorPicker color={color} onChange={(value) => onChange(value)}/>
    </Popover>
  )
}

export default FontStyle