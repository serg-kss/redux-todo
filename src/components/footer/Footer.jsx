import { useSelector } from "react-redux";


function Footer() {

    const todoList = useSelector(state => {
        const {todoReducer} = state
        return todoReducer.todoList
    })

    return(
        <div><p>ToDo amounts: {todoList.length}</p></div>
    )
}

export default Footer