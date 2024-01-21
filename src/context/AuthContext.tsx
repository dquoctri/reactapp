import React, { createContext, useState } from 'react';

export const AuthContext = createContext<string>("");

// define interface to represent component props
export interface Props {
  children: JSX.Element
}

export const AuthProvider = ({ children } : Props) => {
  const [text, setText] = useState("black")

  // Auth methods and state go here

  return (
    <AuthContext.Provider value={text}>
      {children}
    </AuthContext.Provider>
  );
};