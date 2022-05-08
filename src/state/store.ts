import {combineReducers, createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import {counterReducer} from "./counterReducer";


export type RootStateType = ReturnType<typeof rootReducer>


const rootReducer = combineReducers({
    counterR: counterReducer,
})

export const store = createStore(rootReducer, devToolsEnhancer({}));