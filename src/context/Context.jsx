import {createContext, useEffect, useReducer} from 'react';
import Reducer from './Reducer';

//первоначальное состояние
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};

//создание контекста
export const UserContext = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) =>{
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

  useEffect(()=>{
    localStorage.setItem('user', JSON.stringify(state.user));
  },[state.user])

  return (
    <UserContext.Provider 
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch
      }}
    >
      {children}
    </UserContext.Provider>
  )
}