
import React from 'react';




export const Reducer = (state, action) => {
    if (action.type === 'ADD_TRANSACTION') {
        const item = [...state.history, action.payLoad];
        return {
            ...state,
            history: item
        }

    }
    if (action.type === 'REMOVE') {
        const item = state.history.filter((detail) => detail.id !== action.payload);
        return { ...state, history: item };
    }
}