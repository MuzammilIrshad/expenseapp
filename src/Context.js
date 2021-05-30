import React, { createContext, useReducer } from 'react';
import {Reducer} from './Reducer';



const DefaultValues = {
    history: []
}


export const TransactionContext = createContext(DefaultValues);


const TransactionProvider = ({ children }) => {
    const [state, Dispatch] = useReducer(Reducer, DefaultValues);
    function addTrans(transObj) {
        Dispatch({ type: 'ADD_TRANSACTION', payLoad: { amount: transObj.Amount, name: transObj.Name, id: transObj.id } })
    }
    function delTrans(transObj) {
        Dispatch({ type: 'REMOVE', payload:transObj })
    }
    return (
        <TransactionContext.Provider value={{ transactions: state, addTrans, delTrans }} >
        { children }
        </TransactionContext.Provider>
    )
}
export default TransactionProvider; 
    
