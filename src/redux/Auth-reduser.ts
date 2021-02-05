import { stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authApi } from "../api/userApi";
import { AppStateType } from "./redux-store";

const SET_USER_DATA = ' SET_USER_DATA'

export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean

};

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

};
const authReduser = (state = initialState, action: SetAuthUserDataActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload

            };

        default:
            return state;
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}


export const setUserDataVV = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => (
    { type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

    type ThunkType=ThunkAction<Promise<void>, AppStateType, unknown, SetAuthUserDataActionType>

export const getHeaderAuth = ():ThunkType => async (dispatch: any) => {

    let response = await authApi.me()
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setUserDataVV(id, login, email, true));
    }
}


export const login = (email: string, password: string, rememberMe: any):ThunkType => async (dispatch: any) => {

    let response = await authApi.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getHeaderAuth())
    }
    else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some Error'
        dispatch(stopSubmit('login', { _error: message }))
    }


}

export const logout = ():ThunkType => async (dispatch: any) => {

    let response = await authApi.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserDataVV(null, null, null, false))
    }

}




export default authReduser;