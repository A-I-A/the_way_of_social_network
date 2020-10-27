const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState ={
        dialogs: [
            { id: 1, name: "Case" },
            { id: 2, name: "Molly" },
            { id: 3, name: "Finn" },
            { id: 4, name: "Pauley" },
        ],
        messages: [
            { id: 1, text: "Hi" },
            { id: 2, text: "Hello" },
            { id: 3, text: "How are you" },
        ],
};

export const dialogsReducer=(state = initialState, action)=>{
    switch (action.type){
        case SEND_MESSAGE : {
            let text = action.newMessageBody;
            return {...state, messages : [...state.messages, {id:12, text}],};
        }
        default : return state;


    }
}


export const sendMessage = (newMessageBody)=>{
    return {type : SEND_MESSAGE, newMessageBody};
}
