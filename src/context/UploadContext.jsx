// src/context/UploadContext.js
import React, { createContext, useState, useContext } from 'react';

const UploadContext = createContext();

export const useUploadContext = () => useContext(UploadContext);

export const UploadProvider = ({ children }) => {
  const [files, setFiles] = useState([]);

  return (
    <UploadContext.Provider value={{ files, setFiles }}>
      {children}
    </UploadContext.Provider>
  );
};
