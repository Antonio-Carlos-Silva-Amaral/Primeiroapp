import { createContext, useState, useContext } from "react";

export const UserContext1 = createContext();

export const UseStore = ({children}) =>{

    const [login,setLogin] = useState(false)

    return(
        <UserContext1.Provider value={{login,setLogin}}>
            {children}
        </UserContext1.Provider>
    )
}