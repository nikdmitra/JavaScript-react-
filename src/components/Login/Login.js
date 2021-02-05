import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { reguired } from '../../utils/validators/validators'
import { Input } from '../../components/common/FormControls/FormControls';
import { connect } from 'react-redux';
import { login } from '../../redux/Auth-reduser';
import { Redirect } from 'react-router-dom';
import styles from '../common/FormControls/FormControls.module.css' 

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={'email'} placeholder={'Login'}
                    validate={[reguired]} />

            </div>
            <div>
                <Field component={Input} name={'password'} placeholder={'Password'} type='password'
                    validate={[reguired]} />

            </div>

            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'} />remember me
            </div>
            {props.error&&<div className={styles.formSummaryError}>
                {props.error}
                </div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={'/Стена'} />
    }

    return (
        <LoginReduxForm onSubmit={onSubmit} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})



export default connect(mapStateToProps, { login })(Login);