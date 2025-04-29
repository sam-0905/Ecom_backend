import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext({ login: false });

const getStoredLogin = () => {
  const storedLogin = localStorage.getItem("login");
  return storedLogin === "true";
};

const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(getStoredLogin);

  useEffect(() => {
    localStorage.setItem("login", login);
  }, [login]);

  return (
    <AuthContext.Provider value={{ login, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
