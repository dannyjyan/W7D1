import React from 'react';

export const TodoListItem = ({todo}) => (
  <li>id: {todo.id}  title: {todo.title} body: {todo.body}</li>
);