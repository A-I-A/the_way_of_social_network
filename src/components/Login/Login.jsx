import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { SuperInput } from '../common/supertext/supertext';
import { textRequired } from '../utils/validator';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import style from './Login.module.css'

const LoginForm = (props,captchaURL) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"} name="email" component={SuperInput}
                       validate={[textRequired]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name="password" component={SuperInput}
                       type='password' validate={[textRequired]}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberME"} type={"checkbox"} />Remember me
                  </div>
            <div>
                <button>Log In </button>
                <div>
                    {captchaURL && <img src={captchaURL} alt=''/>}
                    {captchaURL &&  <Field  name="captcha" component="input"/>}
                </div>
            </div>
    {props.error && <div className={style.loginFormError}> {props.error} </div>}
        </form>
    )
};

const LoginReduxForm = reduxForm({form : "login",})(LoginForm);



const Login=(props)=>{

    const onSubmit=(FormData)=>{
        props.login(FormData.email, FormData.password, FormData.rememberMe, FormData.captcha);
    }
    if (props.isAuth){return <Redirect to="/profile"/>}
    return <div>
              <hi>Login</hi>
              <LoginReduxForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
              
           </div>
}

const mapStateToProps = (state)=>{
    return {isAuth : state.auth.isAuth,
            captchaURL : state.auth.captchaURL,}
}

export default connect (mapStateToProps, {login} ) (Login) ;

