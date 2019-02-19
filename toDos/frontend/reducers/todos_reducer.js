import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  let newState;
  switch(action.type) {
    case RECEIVE_TODO:
      newState = Object.assign({}, state);
      newState[action.todo.id] = action.todo;
      return newState;
    case RECEIVE_TODOS:
      newState = action.todos.reduce(function(map, todo) {
        map[todo.id] = todo;
        return map;
      }, {})
      return newState;
    default:
      return state;
  }
};

export default todosReducer;