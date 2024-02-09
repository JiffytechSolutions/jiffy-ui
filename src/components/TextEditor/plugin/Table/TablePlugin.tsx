import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $createTableNodeWithDimensions,
  INSERT_TABLE_COMMAND,
  TableNode,
} from '@lexical/table';
import {
  $insertNodes,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  EditorThemeClasses,
  Klass,
  LexicalCommand,
  LexicalEditor,
  LexicalNode,
} from 'lexical';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import * as React from 'react';
// import invariant from 'shared/invariant';

import Button from '../../../Button/Button';
import Modal from '../../../Modal/Modal';
import Text from '../../../Text/Text';
import { TextField } from '../../../Form';
import { GridSvg } from '../ToolBar/toolBarSvg';
import { FlexLayout } from '../../../FlexLayout';
import ToolTip from '../../../ToolTip/ToolTip';

export type InsertTableCommandPayload = Readonly<{
  columns: string;
  rows: string;
  includeHeaders?: boolean;
}>;

export type CellContextShape = {
  cellEditorConfig: null | CellEditorConfig;
  cellEditorPlugins: null | JSX.Element | Array<JSX.Element>;
  set: (
    cellEditorConfig: null | CellEditorConfig,
    cellEditorPlugins: null | JSX.Element | Array<JSX.Element>,
  ) => void;
};

export type CellEditorConfig = Readonly<{
  namespace: string;
  nodes?: ReadonlyArray<Klass<LexicalNode>>;
  onError: (error: Error, editor: LexicalEditor) => void;
  readOnly?: boolean;
  theme?: EditorThemeClasses;
}>;

export const INSERT_NEW_TABLE_COMMAND: LexicalCommand<InsertTableCommandPayload> = createCommand('INSERT_NEW_TABLE_COMMAND');

export const CellContext = createContext<CellContextShape>({
  cellEditorConfig: null,
  cellEditorPlugins: null,
  set: () => {
    // Empty
  },
});

export function TableContext({ children }: { children: JSX.Element }) {
  const [contextValue, setContextValue] = useState<{
    cellEditorConfig: null | CellEditorConfig;
    cellEditorPlugins: null | JSX.Element | Array<JSX.Element>;
  }>({
    cellEditorConfig: null,
    cellEditorPlugins: null,
  });
  return (
    <CellContext.Provider
      value={useMemo(
        () => ({
          cellEditorConfig: contextValue.cellEditorConfig,
          cellEditorPlugins: contextValue.cellEditorPlugins,
          set: (cellEditorConfig, cellEditorPlugins) => {
            setContextValue({ cellEditorConfig, cellEditorPlugins });
          },
        }),
        [contextValue.cellEditorConfig, contextValue.cellEditorPlugins],
      )}>
      {children}
    </CellContext.Provider>
  );
}

export const InsertTableModal = ({ editor , insidePopover , close }: { editor: LexicalEditor ,insidePopover: boolean , close : () => void }) => {
  const [open, setOpen] = useState(false)
  const [rows, setRows] = useState('5');
  const [columns, setColumns] = useState('5');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    const row = Number(rows);
    const column = Number(columns);
    if (row && row > 0 && row <= 500 && column && column > 0 && column <= 50) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [rows, columns]);

  const onClick = () => {
    editor.dispatchCommand(INSERT_TABLE_COMMAND, {
      columns,
      rows,
    });
    close()
    setOpen(false)
  };

  const onClose = () => setOpen(false)
  const activator = <Button
    onClick={() => setOpen(prev => !prev)}
    icon={<GridSvg />}
    size={insidePopover ? "large" : "thin"}
    type={"plainSecondary"}
  >
    {
      insidePopover ? "Insert Table" : null
    }
  </Button>

  return (
    <>
     {
        insidePopover ? activator : <ToolTip
          activator={activator}
          helpText="Insert Table"
        />
      }
      <Modal
        heading='Add Table'
        modalSize='small'
        isOpen={open}
        onClose={onClose}
        primaryAction={{
          onClick: onClick,
          content: "Insert",
          isDisabled: isDisabled
        }}
        secondaryAction={{
          onClick: onClose,
          content: "Cancel"
        }}
      >
        <FlexLayout spacing='loose' direction='vertical'>
          <TextField
            type='number'
            value={rows}
            onChange={(newValue) => setRows(newValue)}
            label={"Rows"}
          />
          <TextField
            type='number'
            value={columns}
            onChange={(newValue) => setColumns(newValue)}
            label={"Columns"}
          />
        </FlexLayout>
      </Modal>
    </>
  );
}

export function TablePlugin({
  cellEditorConfig,
  children,
}: {
  cellEditorConfig: CellEditorConfig;
  children: JSX.Element | Array<JSX.Element>;
}): JSX.Element | null {
  const [editor] = useLexicalComposerContext();
  const cellContext = useContext(CellContext);

  useEffect(() => {
    cellContext.set(cellEditorConfig, children);
    return editor.registerCommand<InsertTableCommandPayload>(
      INSERT_NEW_TABLE_COMMAND,
      ({ columns, rows, includeHeaders }) => {
        const tableNode = $createTableNodeWithDimensions(
          Number(rows),
          Number(columns),
          includeHeaders,
        );
        $insertNodes([tableNode]);
        return true;
      },
      COMMAND_PRIORITY_EDITOR,
    );
  }, [cellContext, cellEditorConfig, children, editor]);

  return null;
}
