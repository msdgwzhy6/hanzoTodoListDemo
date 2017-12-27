import React, {Component} from 'react'
import {StyleSheet, View, Modal} from 'react-native';

import TitleBar from './title-bar';
import TodoList from './todo-list';
import AddTodo from './add-todo';
import Filters from './filters';

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos, filter, addModal } = this.props;
    const { showAll, showCompleted, showIncomplete, showModal, hideModal, addTodo, completeTodo, incompleteTodo } = this.props
    return (
      <View style={styles.container}>
        <TitleBar activeFilter={filter} showModal={showModal} />
        <TodoList
          activeFilter={filter}
          todos={todos}
          addTodo={addTodo}
          completeTodo={completeTodo}
          incompleteTodo={incompleteTodo}
        />
        <Filters
          activeFilter={filter}
          showAll={showAll}
          showCompleted={showCompleted}
          showIncomplete={showIncomplete}
        />
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={addModal.visible}
        >
          <AddTodo hideModal={hideModal} addTodo={addTodo} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {

  },
  list: {
    flex: 1
  },
  add: {
    flex: 1
  }
})

module.exports = TodoApp