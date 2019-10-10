import React from "react";

interface TodoListItemProps {
    todo: Todo;
};

export const TodoListItem: React.FunctionComponent<TodoListItemProps> = ({ todo }) => {
    return <li>
        {/* Here we add style to the element so it can be crossed if complete is true */}
        <label style={{textDecoration: todo.complete ? "line-through": "none"}}> 
            <input type="checkbox" checked={todo.complete}/>
            {todo.text}
        </label>
    </li>;
}