import { useState } from "react";

export const useRowSelection = (initialOrders: any[]) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [allRowsSelected, setAllRowsSelected] = useState(false);

  const handleSelectionChange = (id: string) => {
    const newSelection = [...selectedRows];
    if (Array.isArray(id)) {
      setSelectedRows(id);
      setAllRowsSelected(id.length > 0);
    } else {
      const selectedIndex = selectedRows.indexOf(id);
      if (selectedIndex === -1) {
        newSelection.push(id);
      } else {
        newSelection.splice(selectedIndex, 1);
      }
      setSelectedRows(newSelection);
      setAllRowsSelected(newSelection.length === initialOrders.length);
    }
  };
  return { selectedRows, allRowsSelected, handleSelectionChange };
};
