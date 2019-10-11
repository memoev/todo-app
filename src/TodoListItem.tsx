import React from "react";
import './TodoListItem.css'

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
};

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return <li>
        {/* Here we add style to the element so it can be crossed if complete is true */}
        <label className={todo.complete ? "complete" : undefined}> 
            <input type="checkbox" checked={todo.complete} onChange={() => toggleTodo(todo)} />
            {todo.text}
        </label>
    </li>;
}