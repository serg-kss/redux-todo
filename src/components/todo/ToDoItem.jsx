

function ToDoItem(props) {
    return (
        <ul>
            {props.todoList.map((el, index) => <li key={index}>{el}</li>)}
        </ul>
    )
}

export default ToDoItem