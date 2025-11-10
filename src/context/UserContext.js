// src/context/UserContext.js
import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [username, setUsername] = useState("");
  const [respiracaoCount, setRespiracaoCount] = useState(0);
  const [muralCount, setMuralCount] = useState(0);

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        respiracaoCount,
        setRespiracaoCount,
        muralCount,
        setMuralCount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
