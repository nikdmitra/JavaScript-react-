import { reduxForm, Field } from 'redux-form'
import { Input, Textarea } from '../../common/FormControls/FormControls';
import React from 'react'
import styles from '../../common/FormControls/FormControls.module.css' 
import { reguired } from '../../../utils/validators/validators'
import { saveProfile } from '../../../redux/Post-reduser';



export const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div><button>SAVE</button></div>

            <div>
                <b>Full name</b>:
                <Field component={Input} name={'fullName'} placeholder={'FullName'}
                    validate={[]} />

            </div>
            <div>
                <b>Looking for a job</b>
                <Field component={Input} name={'lookingForAJob'} placeholder={''}
                    validate={[reguired]} type={'checkbox'} />
            </div>
            <div>
                <b>My professional skills</b>
                <Field component={Textarea} name={'lookingForAJobDescription'} placeholder={'My professional skills'}
                    validate={[reguired]}  />
            </div>

            <div>
                <b>About me</b>
                <Field component={Textarea} name={'aboutMe'} placeholder={'AboutMe'}
                    validate={[reguired]}   />
            </div>


            { <div>
                <b>Contacts</b>:{Object.keys(props.profile.contacts).map(key => {
                    return <div ><b>{key}: <Field component={Input} name={'contacts.' + key} placeholder={'key'}
                        validate={[]} /></b></div>
                })}
            </div>}
        </form>
    )

}

const ProfileDataFormRedux = reduxForm({ form: 'edit-profile' })(ProfileDataForm)

export default ProfileDataFormRedux;