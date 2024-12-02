import { TODO } from "./types";

const initialState = {
    todoList: []
}

export const todoReducer = (state = initialState, action)=> {
    console.log('todoReducer ', action)
    
    switch (action.type) {
        case TODO:

            return{
                ...state,
                todoList : [...state.todoList, action.text]
            }    
        default:
            return state;
    }
}