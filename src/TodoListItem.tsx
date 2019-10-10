import React from "react";
import './TodoListItem.css'

interface TodoListItemProps {
    todo: Todo;
};

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({ todo }) => {
    return <li>
        {/* Here we add style to the element so it can be crossed if complete is true */}
        <label className={todo.complete ? "complete" : undefined}> 
            <input type="checkbox" checked={todo.complete}/>
            {todo.text}
        </label>
    </li>;
}