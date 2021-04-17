import React, { createContext, useReducer } from 'react';
import {Reducer} from './Reducer';



const DefaultValues = {
    history: []
}


export const TransactionContext = createContext(DefaultValues);


const TransactionProvider = ({ children }) => {
    const [state, Dispatch] = useReducer(Reducer, DefaultValues);
    function addTransaction(transObj) {
        Dispatch({ type: 'ADD_TRANSACTION', payLoad: { amount: transObj.Amount, name: transObj.Name, id: transObj.id } })
    }
    function delTransaction(transObj) {
        Dispatch({ type: 'REMOVE', payload:transObj })
    }
    return (
        <TransactionContext.Provider value={{ transactions: state, addTransaction, delTransaction }} >
        { children }
        </TransactionContext.Provider>
    )
}
export default TransactionProvider; 
    
