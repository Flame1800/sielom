import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { ruleReducer} from './slices/rules';
import {navReducer} from "./slices/nav";


export function makeStore() {
    return configureStore({
        reducer: {
            rules: ruleReducer,
            nav: navReducer
        },
        devTools: process.env.NODE_ENV !== 'production'
    })
}

const store = makeStore()


export default store