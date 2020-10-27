import React from 'react';
import { reduxForm, Field } from 'redux-form';

const AddMessageForm = (props) => {
    return(<form onSubmit={props.handleSubmit}>
            {/* <div><Field component='textarea' name='MessageText' placeholder='Введите сообщение' /></div>  */}
            <Field placeholder={"Login"} name={"login"} component={"input"}/>
            <button> Отправить </button>
        </form>
    )    
}

 
export default reduxForm({form : "dialogAddMessageForm",})(addMessageForm);