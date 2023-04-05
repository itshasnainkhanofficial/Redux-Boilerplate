import {createContext} from 'react'


export const UserContext  = createContext("No provider")

export const ContextProvider = UserContext.Provider
// export const ContextConsumer = UserContext.Consumer