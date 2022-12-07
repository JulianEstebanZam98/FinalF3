import axios from "axios";
import { useReducer } from "react";
import { useEffect, useState, createContext, useContext } from "react";

export const initialState = {theme:"dark"}

const reducer = (state,action) =>{
  switch (action.type){
    case "theme":
      return {theme:state.theme === "light" ? "dark":"light"}

      default:
        throw new Error()
  }
};

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [theme, dispatch] = useReducer (reducer,initialState)
  const [dentist, setDentist] = useState([])

  const getDentist = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then( res => setDentist(res.data) )
  }

  useEffect(() => {
    getDentist()
  }, [] )
  

  return (
    <ContextGlobal.Provider value={{
      dentist,
      theme,
      dispatch,
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal)
}