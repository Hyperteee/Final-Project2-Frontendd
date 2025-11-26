import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  const login = (email, password) => {
    if (email === "admin@test.com" && password === "1234") {
      setUser({ role: 'admin', email });
      return 'admin';
    } else if (email === "user@test.com" && password === "1234") {
      setUser({ role: 'user', email });
      return 'user';
    }
    setUser(null);
    throw new Error("Invalid credentials");
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};