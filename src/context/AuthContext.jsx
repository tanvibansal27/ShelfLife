import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
});
const [token, setToken] = useState(() => {
  return localStorage.getItem("token") || null;
});
  const login = (userData, jwtToken) => {
  setUser(userData);
  setToken(jwtToken);
};

  const logout = () => {
  setUser(null);
  setToken(null);

  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

  const register = (userData) => {
  setUser(userData);
};
  useEffect(() => {
  localStorage.setItem(
    "user",
    JSON.stringify(user)
  );
}, [user]);
useEffect(() => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
}, [token]);
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
