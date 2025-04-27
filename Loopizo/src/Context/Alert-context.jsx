// src/Context/Alert-context.js
import { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type = "success") => {
    setAlert({ message, type });

    // Auto hide alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const hideAlert = () => setAlert(null);

  return (
    <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

// Custom hook
export const useAlert = () => useContext(AlertContext);
