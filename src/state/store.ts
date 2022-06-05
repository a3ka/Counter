import {combineReducers, createStore} from "redux";
import {devToolsEnhancer} from "redux-devtools-extension";
import {counterReducer} from "./counterReducer";
import {loadState, saveState} from "../utils/localstorage-utils";

export type RootStateType = ReturnType<typeof rootReducer>


const rootReducer = combineReducers({
    counterR: counterReducer,
})


// export const store = createStore(rootReducer, devToolsEnhancer({}));
export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
    saveState({
        counterR: store.getState().counterR
    })
    // localStorage.setItem('app-state', JSON.stringify(store.getState()))
    // localStorage.setItem('number', JSON.stringify(store.getState().counterR.actualNumber))
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppStoreType = typeof store