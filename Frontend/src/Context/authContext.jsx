import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [User, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("User");

    if (token && savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setIsLoggedIn(true);
        setUser(parsedUser);
      } catch (error) {
        console.log("Invalid user data in localStorage",error);
        localStorage.removeItem("User");
        localStorage.removeItem("token");
      }
    }
  }, []);

  const login = (token, userData) => {
    localStorage.setItem("token", token);
    localStorage.setItem("User", JSON.stringify(userData));
    
    
    setIsLoggedIn(true);
    setUser(userData);
    console.log(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("User");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, User, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
