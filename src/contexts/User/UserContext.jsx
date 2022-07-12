import { createContext, useEffect, useState } from "react";

import { api } from "../../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
      setTimeout(() => {
      api
        .get(`/users/${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`)
        .then((res) => setUser(res.data))
        .catch((e) => console.log(e));
      }, 2000);
    }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
