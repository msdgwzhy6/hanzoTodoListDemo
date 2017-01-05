import { connect } from 'hanzojs'
import model from './model'
import { VisibilityFilters } from './enums'

module.exports = {
  models: model,
  views: {
    TodoApp: connect((state) => {
      return {
        ...state.todoApp,
        todos: state.todoApp.todos.filter(todo => {
          if (state.todoApp.filter === VisibilityFilters.ALL) {
            return true;
          } else if (state.todoApp.filter === VisibilityFilters.COMPLETED) {
            return todo.completed;
          } else if (state.todoApp.filter === VisibilityFilters.INCOMPLETE) {
            return !todo.completed;
          }
        })
      }
    }, model)(require('./views/index.js'))
  }
}
