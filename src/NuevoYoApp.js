import React, { useReducer } from 'react'
import { AppRouter } from './routers/AppRouter'
import { Context } from './context/Context'
import { Reducer } from './context/Reducer'

const init = () => {
    return { login: {} };
}

export const NuevoYoApp = () => {

    const [ login, dispatch ] = useReducer(Reducer, {}, init);

    return (
        <Context.Provider value={{ login, dispatch }}>
            <AppRouter/>
        </Context.Provider>
    )
}