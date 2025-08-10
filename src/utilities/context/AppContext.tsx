import React, { useCallback, useState } from "react";
// import Toast from "../../components/Toast/component/Toast";
interface AppContextI {
  sideBar: [boolean, (value: boolean) => void];
  toast: {
    toastItems: [];
    handleToastItems: (value: any) => void;
    handleClearToastItems: (e: any) => void;
  };
}
interface AppProviderI {
  children?: any;
}

export const initialState: AppContextI = {
  sideBar: [false, () => {}],
  toast: {
    toastItems: [],
    handleToastItems: () => {},
    handleClearToastItems: () => {},
  },
};

export const AppContext = React.createContext<AppContextI>(initialState);

const AppProvider = ({ children }: AppProviderI) => {
  const [sideBar, setSideBar] = useState(false);
  const [toastItems, setToastItems] = useState<any>([]);
  const toggleSideBar = (value: boolean) => {
    setSideBar(value);
  };
  const handleToastItems = useCallback(
    (value: any) => {
      setToastItems((prevToastItems: any) => [...prevToastItems, value]);
    },
    [toastItems]
  );
  const handleClearToastItems = (ele: any) => {
    if (ele?.children.length !== 1) return;
    setToastItems([]);
  };
  return (
    <AppContext.Provider
      value={{
        sideBar: [sideBar, toggleSideBar],
        toast: {
          toastItems,
          handleToastItems,
          handleClearToastItems,
        },
      }}
    >
      {children}
      {toastItems.length !== 0 && 
        // <Toast />
        <></>
      }
    </AppContext.Provider>
  );
};

export default AppProvider;
