import { connect } from 'react-redux';
import { compose } from 'redux';
import { sendMessage} from '../../redux/dialogsReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import Dialogs from './Dialogs';

let mapStateToProps = (state) =>{
    return {
        messages : state.dialogsPage.messages,
        dialogs : state.dialogsPage.dialogs,
        newMessageText : state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return {
        sendMessage : (newMessageBody)=>{
            dispatch(sendMessage(newMessageBody));
        },
    }
}


export default  compose (connect (mapStateToProps, mapDispatchToProps),  withAuthRedirect) 
                                                                        (Dialogs)