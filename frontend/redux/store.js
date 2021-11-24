import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { postReducer } from './slices/posts';


export function makeStore() {
    return configureStore({
        reducer: {
            posts: postReducer
        },
        devTools: process.env.NODE_ENV !== 'production'
    })
}

const store = makeStore()


export default store