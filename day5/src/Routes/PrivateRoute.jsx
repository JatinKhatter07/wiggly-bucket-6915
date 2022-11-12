import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { state } = useContext(AppContext);
  if (!state.isAuth) return <Navigate to="/login" />;
  return children;
}
