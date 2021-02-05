import { getHeaderAuth } from './Auth-reduser'


const SET_APP_INICIALAZET = ' SET_APP_INICIALAZET'

export type InitialStateType = {
    inicialiset: boolean
}

let initialState: InitialStateType = {
    inicialiset: false
};



const appReduser = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_APP_INICIALAZET:
            return {
                ...state,
                inicialiset: true
            };

        default:
            return state;
    }
}

type InicialisetSuccessActionType = {
    type: typeof SET_APP_INICIALAZET
}

export const inicialisetSuccess = (): InicialisetSuccessActionType => ({ type: SET_APP_INICIALAZET })


export const inicialisetApp = () => (dispatch: any) => {

    let promise = dispatch(getHeaderAuth());

    promise.then(() => {
        dispatch(inicialisetSuccess());
    })

}





export default appReduser;