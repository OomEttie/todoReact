import * as React from 'react';
import * as TodoInterfaces from '../todo/todo.interface';

interface ICrudEditItemProps {
  todoitem: TodoInterfaces.ITodoItem;
}
interface ICrudEditItemState {
  todoitem: TodoInterfaces.ITodoItem;
}
export class CrudEditItem extends React.Component<
  ICrudEditItemProps,
  ICrudEditItemState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      todoitem: props.todoitem
    };
  }

  onChangeTodoItemDescription = (e: any) => {
    this.setState({
      todoitem: { ...this.state.todoitem, description: e.target.value }
    });
  };

  onChangeTodoItemComplete = (e: any) => {
    this.setState({
      todoitem: { ...this.state.todoitem, complete: e.target.checked }
    });
  };

  render() {
    return (
      <div>
        <li>
          <input
            type="text"
            placeholder={this.state.todoitem.description}
            onChange={this.onChangeTodoItemDescription}
            value={this.state.todoitem.description}
          />
          <input
            type="checkbox"
            checked={this.state.todoitem.complete}
            onChange={this.onChangeTodoItemComplete}
          />
        </li>
      </div>
    );
  }
}

export default CrudEditItem;
