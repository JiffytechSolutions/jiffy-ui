import { $INTERNAL_isPointSelection, $getSelection, $isRangeSelection, LexicalEditor, SELECTION_CHANGE_COMMAND } from 'lexical'
import React, { useEffect, useMemo, useState } from 'react'
import { Select } from '../../../Form'
import { $getSelectionStyleValueForProperty, $patchStyleText } from '@lexical/selection';
import { mergeRegister } from "@lexical/utils";

interface FontFamilyChangerI {
  editor: LexicalEditor,
}


const fontCheck = new Set([
  // Windows 10
  'Arial', 'Arial Black', 'Bahnschrift', 'Calibri', 'Cambria', 'Cambria Math', 'Candara', 'Comic Sans MS', 'Consolas', 'Constantia', 'Corbel', 'Courier New', 'Ebrima', 'Franklin Gothic Medium', 'Gabriola', 'Gadugi', 'Georgia', 'HoloLens MDL2 Assets', 'Impact', 'Ink Free', 'Javanese Text', 'Leelawadee UI', 'Lucida Console', 'Lucida Sans Unicode', 'Malgun Gothic', 'Marlett', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Sans Serif', 'Microsoft Tai Le', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU-ExtB', 'Mongolian Baiti', 'MS Gothic', 'MV Boli', 'Myanmar Text', 'Nirmala UI', 'Palatino Linotype', 'Segoe MDL2 Assets', 'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Historic', 'Segoe UI Emoji', 'Segoe UI Symbol', 'SimSun', 'Sitka', 'Sylfaen', 'Symbol', 'Tahoma', 'Times New Roman', 'Trebuchet MS', 'Verdana', 'Webdings', 'Wingdings', 'Yu Gothic',
  // macOS
  'American Typewriter', 'Andale Mono', 'Arial', 'Arial Black', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS', 'Avenir', 'Avenir Next', 'Avenir Next Condensed', 'Baskerville', 'Big Caslon', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bradley Hand', 'Brush Script MT', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charter', 'Cochin', 'Comic Sans MS', 'Copperplate', 'Courier', 'Courier New', 'Didot', 'DIN Alternate', 'DIN Condensed', 'Futura', 'Geneva', 'Georgia', 'Gill Sans', 'Helvetica', 'Helvetica Neue', 'Herculanum', 'Hoefler Text', 'Impact', 'Lucida Grande', 'Luminari', 'Marker Felt', 'Menlo', 'Microsoft Sans Serif', 'Monaco', 'Noteworthy', 'Optima', 'Palatino', 'Papyrus', 'Phosphate', 'Rockwell', 'Savoye LET', 'SignPainter', 'Skia', 'Snell Roundhand', 'Tahoma', 'Times', 'Times New Roman', 'Trattatello', 'Trebuchet MS', 'Verdana', 'Zapfino',
].sort());

const getSystemFonts = async () => {
  await document.fonts.ready;
  const fontAvailable = new Set();
  for (const font of Array.from(fontCheck.values())) {
    if (document.fonts.check(`12px "${font}"`)) {
      fontAvailable.add(font);
    }
  }
  return [...Array.from(fontAvailable.values())];
}

const FontFamilyChanger = ({ editor }: FontFamilyChangerI) => {

  const [availableFonts, setAvailableFonts] = useState<string[]>([])
  const [fontFamily, setFontFamily] = useState<string>('Arial')

  const checkForFontFamily = () => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      setFontFamily(
        $getSelectionStyleValueForProperty(selection, 'font-family', 'Arial'),
      );
    }
  }

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          checkForFontFamily();
        });
      }),
      editor.registerCommand(
        SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          checkForFontFamily();
          return false;
        },
        1
      ),
    )
  }, [editor, availableFonts])

  useEffect(() => {
    getSystemFonts().then(res => setAvailableFonts(res as string[]))
  }, [])

  const options = useMemo(() => {
    return availableFonts.map(font => ({
      label: font,
      value: font
    }))
  }, [availableFonts])

  const handelFontChange = (newFont: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($INTERNAL_isPointSelection(selection)) {
        $patchStyleText(selection, {
          "font-family": newFont,
        });
      }
    });
  }

  return (
    <Select
      options={options}
      value={fontFamily}
      onChange={handelFontChange}
      isSearchable={false}
      isMultiSelect={false}
    />
  )

}

export default FontFamilyChanger