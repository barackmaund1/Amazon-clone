// set data layer
// we need this to track the basket

import React,{ createContext,useContext,useReducer } from "react";

//This is the data layer
export const stateContext = createContext();

//build a provider
export const StateProvider =({reducer,initialState,children})=>(
   <stateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
   </stateContext.Provider> 
)