import React from 'react';
import { TodoListItem } from './TodoListItem'

const todos: Array<Todo> = [
  {text: "Learn Typescript", complete: true}, 
  {text: "Walk the dog!", complete: false}
]

const App: React.FC = () => {
  return (
    <TodoListItem todo={todos[0]}/>
  );
}

export default App;
