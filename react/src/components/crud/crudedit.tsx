import * as React from 'react';
import { getTodoFromDummyData } from '../todo/todo.mock';
import { Redirect } from 'react-router-dom';
import * as TodoInterfaces from '../todo/todo.interface';

interface ICrudEditProps {}
interface ICrudEditState {
  commitToSave: boolean;
  todoid: number;
  todo: TodoInterfaces.ITodo[];
  title: string;
  status: string;
}
export class CrudEdit extends React.Component<ICrudEditProps, ICrudEditState> {
  constructor(props: any) {
    super(props);
    this.state = {
      commitToSave: false,
      todoid: props.match.params.id,
      todo: getTodoFromDummyData(props.match.params.id),
      title: '',
      status: ''
    };
  }

  componentDidMount() {
    this.setState(prevState => ({
      title: prevState.todo[0].title,
      status: prevState.todo[0].status
    }));
  }

  handleEditTodoSave = () => {
    console.log('handleEditTodoSave->', this.state);
    this.setState({ commitToSave: true });
  };

  onChangeTitle = (e: any) => {
    this.setState({ title: e.target.value });
  };

  onChangeStatus = (e: any) => {
    this.setState({ status: e.target.value });
  };

  public render() {
    return (
      <div>
        <h2>Editing - {this.state.todo[0].title} </h2>
        <span>Title:</span>
        <input
          type="text"
          placeholder={this.state.todo[0].title}
          onChange={this.onChangeTitle}
          value={this.state.title}
        />
        <br />
        <span>Status:</span>
        <select onChange={this.onChangeStatus} value={this.state.status}>
          <option value="new">new</option>
          <option value="busy">busy</option>
          <option value="complete">complete</option>
        </select>
        <br />
        <br />
        {this.state.todo[0].todoItems.map(item => {
          return <CrudEditTodoItem key={item.todoitem_id} todoitem={item} />;
        })}
        <br />
        <button onClick={this.handleEditTodoSave}>SAVE</button>
        {this.state.commitToSave && <Redirect to="/crud" />}
      </div>
    );
  }
}

export default CrudEdit;

interface ICrudEditTodoitemProps {
  todoitem: TodoInterfaces.ITodoItem;
}
const CrudEditTodoItem = (props: ICrudEditTodoitemProps) => {
  return (
    <div>
      *{props.todoitem.description} -{' '}
      {props.todoitem.complete ? 'true' : 'false'}
    </div>
  );
};

// export const CrudEdit = (props: any) => {
//   const todo: TodoInterfaces.ITodo[] = getTodoFromDummyData(
//     props.match.params.id
//   );
//   return (
//     <div>
//       <h2>Editing - {todo[0].title} </h2>
//       <span>Title: {todo[0].title}</span>
//       <br />
//       <span>Status: {todo[0].status}</span>
//       <br />
//       {todo[0].todoItems.map(item => {
//         return <CrudEditTodoItem key={item.todoitem_id} todoitem={item} />;
//       })}
//       <br />
//       <Link to="/crud">SAVE</Link>
//     </div>
//   );
// };
