import { applyMiddleware, combineReducers, createStore } from "redux"
import authReduser from "./Auth-reduser"
import MessandesReduser from "./Messandes-reduser "
import PostReduser from "./Post-reduser"
import saitbarReduser from "./saitbar-reduser"
import usersReduser from "./Users-reduser"
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReduser from "./App-reduser"

import React from "react"


let rootReducer = combineReducers({
    Post: PostReduser,
    Messandes: MessandesReduser,
    saitbar: saitbarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReduser,
    form: formReducer

});


type RootReduserType=typeof rootReducer;
export type AppStateType=ReturnType<RootReduserType>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store