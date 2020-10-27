import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./porfileReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, text: "qwert", likesCount: 10 },
                { id: 2, text: "trewq", likesCount: 5 },
                { id: 3, text: "abcd", likesCount: 5 },
            ],
            newPostText: "",
        },
        dialogsPage: {
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
            newMessageText : ' ',
        },
    },
    getState() { return this._state },

    rerenderAll() { console.log("state changed"); },

    _subscribe(observer) { this.rerenderAll = observer; },

    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage, action);
        this._state.dialogsPage=dialogsReducer(this._state.dialogsPage, action);
        this.rerenderAll(this._state);  
    }
}




export default store;
