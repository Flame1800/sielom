import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { ruleReducer} from './slices/rules';


export function makeStore() {
    return configureStore({
        reducer: {
            rules: ruleReducer
        },
        devTools: process.env.NODE_ENV !== 'production'
    })
}

const store = makeStore()


export default store