import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authChecked, setAuthChecked] = useState(false);

  const BASE_URL = process.env.REACT_APP_API_BASE_URL;

  // Check token validity and fetch user details
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get(`${BASE_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setUser(res.data.user);
        })
        .catch(() => {
          localStorage.removeItem('token');
          setUser(null);
        })
        .finally(() => {
          setAuthChecked(true);
        });
    } else {
      setAuthChecked(true);
    }
  }, [BASE_URL]);

  // Login and store user + token
  const loginUser = (userData, token) => {
    setUser(userData);
    localStorage.setItem('token', token);
  };

  // Logout user
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser, authChecked }}>
      {children}
    </UserContext.Provider>
  );
};
