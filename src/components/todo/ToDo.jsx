import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../../redux/actions";
import { useState } from "react";
import ToDoItem from "./ToDoItem";


function ToDo() {

    const [textToDo, setTextToDo]= useState('');
    const dispatch = useDispatch()

    function handleInput(e) {
        setTextToDo(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        dispatch(inputText(textToDo))
    }

    const todoList = useSelector(state => {
        console.log(state)
        const {todoReducer} = state
        return todoReducer.todoList
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="todo">Enter ToDo</label>
                <input id="todo" type="text" onChange={handleInput}/>
                <input type="submit" hidden />
            </form>
            <div><ToDoItem todoList={todoList}/></div>
        </div>
    )
}

export default ToDo