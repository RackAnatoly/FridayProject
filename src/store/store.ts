import { combineReducers, createStore } from "redux";
import {FirstReducer} from "./Firstreducer";

const rootReducer = combineReducers({
    state:FirstReducer
})

const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>