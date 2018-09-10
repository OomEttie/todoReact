import * as React from 'react';
import { getTodoFromDummyData } from '../todo/todo.mock';
import { Redirect } from 'react-router-dom';
import * as TodoInterfaces from '../todo/todo.interface';

import { CrudEditItem } from './crudedititem';

interface ICrudEditProps {}
interface ICrudEditState {
  commitToSave: boolean;
  todo: TodoInterfaces.ITodo;
}
export class CrudEdit extends React.Component<ICrudEditProps, ICrudEditState> {
  constructor(props: any) {
    super(props);
    this.state = {
      commitToSave: false,
      todo: getTodoFromDummyData(props.match.params.id)
    };
  }

  handleEditTodoSave = () => {
    console.log('handleEditTodoSave->', this.state);
    this.setState({ commitToSave: true });
  };

  onChangeTitle = (e: any) => {
    this.setState({ todo: { ...this.state.todo, title: e.target.value } });
  };

  onChangeStatus = (e: any) => {
    this.setState({ todo: { ...this.state.todo, status: e.target.value } });
  };

  public render() {
    return (
      <div>
        <h2>Editing</h2>
        <span>Title:</span>
        <input
          type="text"
          placeholder={this.state.todo.title}
          onChange={this.onChangeTitle}
          value={this.state.todo.title}
        />
        <br />
        <span>Status:</span>
        <select onChange={this.onChangeStatus} value={this.state.todo.status}>
          <option value="new">new</option>
          <option value="busy">busy</option>
          <option value="complete">complete</option>
        </select>
        <br />
        <br />
        {this.state.todo.title &&
          this.state.todo.todoItems.map(item => {
            return <CrudEditItem key={item.todoitem_id} todoitem={item} />;
          })}
        <br />
        <button onClick={this.handleEditTodoSave}>SAVE</button>
        {this.state.commitToSave && <Redirect to="/crud" />}
      </div>
    );
  }
}

export default CrudEdit;
