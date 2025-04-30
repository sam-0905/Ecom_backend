import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({ login: false });

const getStoredLogin = () => {
  const storedLogin = localStorage.getItem("login");
  return storedLogin === "true";
};

const AuthProvider = ({ children }) => {
  const [isLoggedIn , setIsLoggedIn] = useState(getStoredLogin);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  useEffect(() => {
    localStorage.setItem("login", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn ,login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
