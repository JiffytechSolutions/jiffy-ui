import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Select, TextField } from '../../../Form'
import './ToolBar.css'
import { Bold, Code, Italic, Minus, MoreVertical, Plus, RotateCcw, RotateCw, Underline } from '../../../../icons'
import Button from '../../../Button/Button'

import { TextColorSvg } from './toolBarSvg'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import {$getSelection, $isRangeSelection, $isRootOrShadowRoot, ElementFormatType, FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, REDO_COMMAND, RangeSelection, SELECTION_CHANGE_COMMAND, UNDO_COMMAND } from 'lexical'
import { $isAtNodeEnd , $wrapNodes, } from "@lexical/selection"
import { $isLinkNode } from "@lexical/link";
import { mergeRegister , $getNearestNodeOfType , $findMatchingParent } from "@lexical/utils";
import TextAlignBox from './TextAlignBox'
import InsertLink from './InsertLink'
import ListSelectBox from './ListBox'
import {$createCodeNode} from "@lexical/code";
import { InsertTableModal } from '../Table/TablePlugin'
import { InsertImageDialog } from '../ImagesPulgin'
import {$isHeadingNode} from '@lexical/rich-text';
import {
  $isListNode,
  ListNode,
} from '@lexical/list';
import InsertBlock from './InsertBlock'

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

const rootTypeToRootName = {
  root: 'Root',
  table: 'Table',
};



const Line = () => <span className='inte-line'></span>
const LowPriority = 1;

function getSelectedNode(selection: RangeSelection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return $isAtNodeEnd(focus) ? anchorNode : focusNode;
  } else {
    return $isAtNodeEnd(anchor) ? focusNode : anchorNode;
  }
}

const blockTypeToBlockName = {
  bullet: 'Bulleted List',
  check: 'Check List',
  code: 'Code Block',
  h1: 'Heading 1',
  h2: 'Heading 2',
  h3: 'Heading 3',
  h4: 'Heading 4',
  h5: 'Heading 5',
  h6: 'Heading 6',
  number: 'Numbered List',
  paragraph: 'Normal',
  quote: 'Quote',
};

const ToolBar = () => {

  const toolbarRef = useRef<HTMLDivElement>(null)
  const [editor] = useLexicalComposerContext();
  const [rootType, setRootType] =
    useState<keyof typeof rootTypeToRootName>('root');

  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isList, setIsList] = useState<undefined | "number" | "bullet">();
  const [isLink, setIsLink] = useState(false);
  const [blockType, setBlockType] = useState<keyof typeof blockTypeToBlockName>('paragraph');
  const [currAlign , setCurrAlign] = useState<"center" | "justify" | "right" | "left">('left')

  const [selectedText , setSelectedText] = useState("");

  const updateToolBar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      let element = anchorNode.getKey() === 'root'? anchorNode : $findMatchingParent(anchorNode, (e) => {
        const parent = e.getParent();
        return parent !== null && $isRootOrShadowRoot(parent);
      });

      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }

      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      const listType = selection.anchor.getNode().getTopLevelElementOrThrow().__listType
      setSelectedText(selection.getTextContent())
      setIsList(listType)
      setIsBold(selection.hasFormat("bold"))
      setIsItalic(selection.hasFormat("italic"))
      setIsUnderline(selection.hasFormat('underline'))

      const node = getSelectedNode(selection);

      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }

      if (elementDOM !== null) {
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType<ListNode>(
            anchorNode,
            ListNode,
          );
          const type = parentList
            ? parentList.getListType()
            : element.getListType();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();
          if (type in blockTypeToBlockName) {
            setBlockType(type as keyof typeof blockTypeToBlockName);
          }
        }
      }
    }
  }, [editor])

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
        LowPriority
      ),
    )
  })

  const changeElementFormat  = (align:ElementFormatType) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND , align);
  }

  const formatCode = () => {
    if (blockType !== "code") {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createCodeNode());
        }
      });
    }
  };

  

  return (
    <div className='inte-TextEditor__toolBar'>
      <div className='inte-TextEditor__fontFormat'>
        <InsertBlock editor={editor} blockType={blockType}/>
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
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
          }}
          icon={<Bold size="20" color='#1C2433' />}
          type={isBold ? "secondary" : 'textButton'}
        />
        <Button
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
          }}
          icon={<Italic size="20" color='#1C2433' />}
          type={isItalic ? "secondary" : 'textButton'}
        />
        <Button
          onClick={() => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
          }}
          icon={<Underline size="20" color='#1C2433' />}
          type={isUnderline ? "secondary" : 'textButton'}
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
        <ListSelectBox editor={editor} currListType={isList}/>
        <TextAlignBox onClick={changeElementFormat} currAlign={currAlign}/>
      </div>
      <Line />
      <div className='inte-textEditor__specialNodes'>
        <InsertLink editor={editor} isLink={isLink} selectedText={selectedText}/>
        <InsertImageDialog editor={editor}/>
        <InsertTableModal editor={editor}/>
        <Button
          onClick={formatCode}
          icon={<Code size="20" color='#1C2433' />}
          type='textButton'
        />
      </div>
      <Line />
      <div className="inte-textEditor__history">
        <Button
          icon={<RotateCcw size="20" color='#1C2433' />}
          type='textButton'
          onClick={() => editor.dispatchCommand(UNDO_COMMAND , undefined)}
        />
        <Button
          icon={<RotateCw size="20" color='#1C2433' />}
          type='textButton'
          onClick={() => editor.dispatchCommand(REDO_COMMAND , undefined)}
        />
      </div>
    </div>
  )
}

export default ToolBar