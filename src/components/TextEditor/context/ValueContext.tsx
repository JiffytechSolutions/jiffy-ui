import React, { createContext, useState } from 'react';

interface ValueContextI {
  children: React.ReactNode;
}

export const ValueContext = createContext({
  editorOnchangePrevValue: '',
  setEditorOnchangePrevValue:(newVal:string)=>{} ,
});

const ValueContextProvider = ({ children }: ValueContextI) => {
  const [editorOnchangePrevValue, setEditorOnchangePrevValue] = useState('');

  return (
    <ValueContext.Provider
      value={{
        editorOnchangePrevValue,
        setEditorOnchangePrevValue,
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};

export default ValueContextProvider;