import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator,textRequired} from '../utils/validator';
import { SuperText } from '../common/supertext/supertext';
// import addMessageForm from './addMessageForm';


const Dialogs = (props)=>{
  let messagesElements =props.messages.map(message => <Message text={message.text} /> );
  let dialogElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    
  let addNewMessage = (e)=>{
    props.sendMessage(e.MessageText);
  }

   return(
     <div className={styles.dialogs}>
     <div className={styles.dialogsItems}>
      {dialogElements}
    </div>
    <div className={styles.messages}>
    <AddMessageFormRedux onSubmit={addNewMessage}/>
     {messagesElements}
   </div> 
   </div>
     );
}

const maxLength=maxLengthCreator(20);

const AddMessageForm = (props) => {
  return(<form onSubmit={props.handleSubmit}>
          <div>
            <Field component={SuperText} name='MessageText' placeholder='Введите сообщение'
            validate={[textRequired,maxLength ]}/>
            </div> 
          <button> Отправить </button>
      </form>
  )    
}

const AddMessageFormRedux = reduxForm({form : "dialogAddMessageForm",})(AddMessageForm);

export default Dialogs;