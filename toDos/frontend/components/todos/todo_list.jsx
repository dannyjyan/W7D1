import React from 'react';
import {TodoListItem} from './todo_list_item'
import TodoForm from "./todo_form"

export const TodoList = (props) => (
  
  <>
    <ul>
      {props.todos.map((todo) => (
        <TodoListItem todo = {todo}/>
      ))}
    </ul>
    <TodoForm receiveTodo={props.receiveTodo}/>
  </>
);

