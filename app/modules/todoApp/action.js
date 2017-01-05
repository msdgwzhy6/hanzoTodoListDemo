import _ from 'lodash';

export function addTodo(name, completed) {
  return {
    id: _.uniqueId('todo_'),
    name: name,
    completed: completed === true
  };
}
