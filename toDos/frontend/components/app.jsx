import React from 'react';
import { TodoList } from './todos/todo_list';
import TodoListContainer from "./todos/todo_list_container";

const App = (props) => (
  <>
    <marquee><big>TODOLIST IS RUNNING!!!</big></marquee>
    <TodoListContainer />
  </>
);

export default App;