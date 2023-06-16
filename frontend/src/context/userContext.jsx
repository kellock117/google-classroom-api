import React, { useState, createContext } from "react";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const item = localStorage.getItem(process.env.REACT_APP_KEY);
  if (item) {
    if (item.expiry_date * 1000 < Date.now()) {
      localStorage.removeItem(process.env.REACT_APP_KEY);
    }
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
