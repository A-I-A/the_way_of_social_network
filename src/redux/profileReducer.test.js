import { initializeApp } from './appReducer';
import profileReducer, { addNewPost, deletePost } from './profileReducer';

test("new post should be added", ()=>{
    let action = addNewPost("a123231231231231321");
    let state = {
        posts: [
            { id: 1, text: "qwert", likesCount: 10 },
            { id: 2, text: "trewq", likesCount: 5 },
            { id: 3, text: "abcd", likesCount: 5 },
        ]
    };
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
})

test("after deleting messages count should decrement", ()=>{
    let action = deletePost(1);
    let state = {
        posts: [
            { id: 1, text: "qwert", likesCount: 10 },
            { id: 2, text: "trewq", likesCount: 5 },
            { id: 3, text: "abcd", likesCount: 5 },
        ]
    };
    let newState = profileReducer(state,action);
    expect(newState.posts.length).toBe(2);
})