import { NavLink, Redirect } from 'react-router-dom';
import Dialogitem from './SMS/Dialogitem';
import s from './Dialogs.module.css';
import Dialogsms from './SMS/Dialogsms';
import React from "react"
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormControls/FormControls';
import { maxLengthCreator, reguired } from '../../utils/validators/validators';



const Dialogs = (props:any) => {
    let state = props.Messandes;
    let User = state.dialogsD.map((d:any) => < Dialogitem id={d.id} key={d.id} name={d.name} />);
    let SmsA = state.smsD.map((s:any) => < Dialogsms id={s.id} key={s.id} sms={s.sms} />);
    let newPostElement = React.createRef();


    let addNewMessage = (values:any) => {
        props.AddSMSka(values.newMessageBody)
    }


    return (

        <div className={s.dialogs} >
            <div className={s.user} > {User} </div>
            <div className={s.sms} > {SmsA}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div >
        </div >
    );
}
let maxLength50 = maxLengthCreator(50)
const AddMessageForm = (props:any) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody' placeholder='Enter you message'
                    validate={[reguired, maxLength50]} />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;