import _ from 'lodash';
import { VisibilityFilters } from './enums'
import { addTodo } from './action'

module.exports = {
  namespace: 'todoApp',
  state: {
    todos: [],
    filter: VisibilityFilters.ALL,
    addModal: {
      visible: false
    }
  },
  handlers: [
    'showAll',
    'showCompleted',
    'showIncomplete',
    'showModal',
    'hideModal',
    { name: 'addTodo', action: addTodo },
    'completeTodo',
    'incompleteTodo',
  ],
  reducers: {
    showModal: (state, action) => ({
      ...state,
      addModal: {
        visible: true
      }
    }),
    hideModal: (state, action) => ({
      ...state,
      addModal: {
        visible: false
      }
    }),
    showAll: (state, action) => ({
      ...state,
      filter: VisibilityFilters.ALL,
    }),
    showCompleted: (state, action) => ({
      ...state,
      filter: VisibilityFilters.COMPLETED,
    }),
    showIncomplete: (state, action) => ({
      ...state,
      filter: VisibilityFilters.INCOMPLETE,
    }),
    addTodo: (state, action) => ({
      ...state,
      todos: [
        ...state.todos,
        action.payload
      ]
    }),
    completeTodo: (state, action) => {
      var index = _.findIndex(state.todos, (todo) => todo.id === action.payload);
      if (index === -1) {
        return {
          ...state
        }
      }
      return {
        ...state,
        todos:[
          ...state.todos.slice(0, index),
          Object.assign({}, state.todos[index], {
            completed: true
          }),
          ...state.todos.slice(index + 1)
        ]
      };
    },
    incompleteTodo: (state, action) => {
      var index = _.findIndex(state.todos, (todo) => todo.id === action.payload);
      if (index === -1) {
        return {
          ...state
        }
      }
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          Object.assign({}, state.todos[index], {
            completed: false
          }),
          ...state.todos.slice(index + 1)
        ]
      };
    },
  }
}