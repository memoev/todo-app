import React from 'react';
import { TodoListItem } from './TodoListItem'

type Todo = {
  text: string;
  complete: boolean;
}

const todos: Array<Todo> = [
  {text: "Learn Typescript", complete: false}, 
  {text: "Walk the dog!", complete: false}
]

const App: React.FC = () => {
  return (
    <TodoListItem />
  );
}

export default App;
