import { createContext, useState} from "react";

export const DashboardPaiContext = createContext({});

export const DashboardPaiProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  return (
    <DashboardPaiContext.Provider value={{ users, setUsers }}>
      {children}
    </DashboardPaiContext.Provider>
  );
};
