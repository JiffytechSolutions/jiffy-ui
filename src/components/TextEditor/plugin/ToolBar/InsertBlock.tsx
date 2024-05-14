import { $INTERNAL_isPointSelection, $createParagraphNode, $getSelection, LexicalEditor } from 'lexical'
import React from 'react'
import { Select } from '../../../Form'
import {
  $createHeadingNode,
  HeadingTagType,
} from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import CustomSelect from '../../ui/CustomSelect';

interface InsertBlockI {
  editor: LexicalEditor,
  blockType: keyof typeof blockTypeToBlockName
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
  p: 'Normal',
  quote: 'Quote',
};


const InsertBlock = ({ editor, blockType }: InsertBlockI) => {

  const formatHeading = (headingSize: HeadingTagType) => {
    if (blockType !== headingSize) {
      editor.update(() => {
        const selection = $getSelection();
        if ($INTERNAL_isPointSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode(headingSize));
        }
      });
    }
  };

  const formatParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($INTERNAL_isPointSelection(selection)) {
        $setBlocksType(selection, () => $createParagraphNode());
      }
    });
  };

  return (
    <CustomSelect
      heading='Choose Text Type'
      options={[
        { label: "Normal text", value: "p" },
        { label: 'Heading 1', value: "h1", className: "inte-textType heading1" },
        { label: 'Heading 2', value: "h2", className: "inte-textType heading2" },
        { label: 'Heading 3', value: "h3", className: "inte-textType heading3" },
        { label: 'Heading 4', value: "h4", className: "inte-textType heading4" },
        { label: 'Heading 5', value: "h5", className: "inte-textType heading5" },
        { label: 'Heading 6', value: "h6", className: "inte-textType heading6" },
      ]}
      isMultiSelect={false}
      value={blockType}
      onChange={(newvalue) => {
        newvalue === "Normal text" ? formatParagraph() : formatHeading(newvalue)
      }}
    />
  )
}

export default InsertBlock