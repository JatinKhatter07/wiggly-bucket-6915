import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

export const AppContext = createContext();

const token = localStorage.getItem("token") || null;

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, {
    isAuth: token === null ? false : true,
    token: token,
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
