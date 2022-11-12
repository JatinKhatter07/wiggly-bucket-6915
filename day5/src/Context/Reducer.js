import { loginFailure, loginSuccess } from "./ActionCreaters";

export default function Reducer(state, { type, payload }) {
  switch (type) {
    case loginSuccess: {
      localStorage.setItem("token", JSON.stringify(payload.token));
      return {
        ...state,
        isAuth: true,
        token: payload.token,
      };
    }
    case loginFailure: {
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        token: null,
      };
    }
    default:
      return state;
  }
}
