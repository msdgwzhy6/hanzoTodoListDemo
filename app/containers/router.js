import React from 'react';
import { Scene, Actions } from 'hanzojs/router';

module.exports = (store, modules) => {
  return Actions.create(
    <Scene key="root">
        <Scene key="todoApp" component={modules.TodoApp} hideNavBar />
    </Scene>
  );
}
