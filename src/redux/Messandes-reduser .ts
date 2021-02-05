import { act } from "react-dom/test-utils";


const SMS_UPP = 'SMS-UPP'

type DialogType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    sms: string
}
let initialState = {
    dialogsD: [
        { id: 1, name: 'Nik' },
        { id: 2, name: 'Dikon' },
        { id: 3, name: 'Milana' },
        { id: 4, name: 'Galka' },
        { id: 5, name: 'Valya' },
        { id: 6, name: 'Grinya' }
    ] as Array<DialogType>,

    smsD: [
        { id: 1, sms: 'Hello' },
        { id: 2, sms: 'I wont to drink' },
        { id: 3, sms: 'I wont to see it' },
        { id: 4, sms: 'Yo yo yo' },
        { id: 5, sms: 'Gut' },
        { id: 6, sms: 'Masafaka' }
    ] as Array<MessageType>,
}

export type InicialStateType = typeof initialState


const MessandesReduser = (state = initialState, action: any): InicialStateType => {


    switch (action.type) {

        case SMS_UPP:


            let body = action.newMessageBody;
            return {
                ...state,
                smsD: [...state.smsD, { id: 5, sms: body }],
                
            };



        default:
            return state;

    }



}

type SendMessageCreatorActionType = {
    type: typeof SMS_UPP
    newMessageBody: string
}

export const AddSMS = (newMessageBody: string): SendMessageCreatorActionType => {
    return {
        type: SMS_UPP, newMessageBody
    }
}









export default MessandesReduser;