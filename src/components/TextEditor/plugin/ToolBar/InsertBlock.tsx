import { $INTERNAL_isPointSelection, $createParagraphNode, $getSelection, LexicalEditor } from 'lexical'
import React from 'react'
import { Select } from '../../../Form'
import {
  $createHeadingNode,
  HeadingTagType,
} from '@lexical/rich-text';
import {$setBlocksType} from '@lexical/selection';

interface InsertBlockI {
  editor: LexicalEditor,
  blockType : keyof typeof blockTypeToBlockName
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


const InsertBlock = ({ editor , blockType }: InsertBlockI) => {

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
    <Select
      options={[
        { label: "Normal text", value: "paragraph" },
        { label: 'Heading 1', value: "h1" },
        { label: 'Heading 2', value: "h2" },
        { label: 'Heading 3', value: "h3" },
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