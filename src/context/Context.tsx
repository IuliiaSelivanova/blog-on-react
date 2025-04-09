import React, {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from "react";
import Reducer from "./Reducer";
import { UserState } from "../types/actionTypes";
import { UserActions } from "../types/actionTypes";

interface ContextType extends UserState {
  dispatch: React.Dispatch<UserActions>;
}
interface ContextProviderProps {
  children: ReactNode;
}

//первоначальное состояние
const INITIAL_STATE: UserState = {
  user: (() => {
    try {
      const userData = localStorage.getItem("user");
      return userData ? JSON.parse(userData) : null;
    } catch (error) {
      return null;
    }
  })(),
  isFetching: false,
  error: false,
};

//создание контекста
export const UserContext = createContext<ContextType>({
  ...INITIAL_STATE,
  dispatch: () => {},
});

export const ContextProvider: React.FunctionComponent<
  ContextProviderProps
> = ({ children }) => {
  const [state, dispatch] = useReducer(
    Reducer,
    INITIAL_STATE,
  );

  useEffect(() => {
    localStorage.setItem(
      "user",
      JSON.stringify(state.user),
    );
  }, [state.user]);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
