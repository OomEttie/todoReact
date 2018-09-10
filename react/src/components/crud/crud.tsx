import * as React from 'react';
import { dummyData } from '../todo/todo.mock';
import { Switch, Route } from 'react-router-dom';

import { CrudDisplay } from './cruddisplay';
import { CrudEdit } from './crudedit';

export class CRUD extends React.Component {
  state = {
    todos: dummyData
  };

  public render() {
    return (
      <div>
        <h1>welcome to the CRUD component</h1>
        <h3>
          We are working with Todos and there are {this.state.todos.length} of
          them
        </h3>
        <Switch>
          <Route path={`/crud/edit/:id`} component={CrudEdit} />
          <CrudDisplay todos={this.state.todos} />
        </Switch>
      </div>
    );
  }
}

export default CRUD;
