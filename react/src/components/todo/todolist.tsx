import * as React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import * as InterfaceTodo from './todo.interface';

export const TodoList = (props: InterfaceTodo.IListProps) => {
  return (
    <ul>
      {props.todos.map((todo: InterfaceTodo.ITodo) => {
        return (
          <li key={todo.todo_id}>
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;

//functional units
interface ITodoList_Generic {
  todo: InterfaceTodo.ITodo;
}

const Todo = (props: ITodoList_Generic) => (
  // <div>testing todo swith comp</div>
  <Switch>
    <Route
      path={`/todos/edit/${props.todo.todo_id}`}
      render={() => <EditTodo todo={props.todo} />}
    />
    <DisplayTodo todo={props.todo} />
  </Switch>
);

const DisplayTodo = (props: ITodoList_Generic) => (
  <div>
    <h3>{props.todo.title}</h3>
    {props.todo.todoItems.map((item: InterfaceTodo.ITodoItem) => {
      return <div>{item.description}</div>;
    })}
    <div>
      <br />
      <Link to={`/todos/edit/${props.todo.todo_id}`}>EDIT ITEM</Link>
    </div>
  </div>
);

const EditTodo = (props: ITodoList_Generic) => (
  <div>
    <h3>EDITING {props.todo.title}</h3>
    {props.todo.todoItems.map((item: InterfaceTodo.ITodoItem) => {
      return <div>{item.description}</div>;
    })}
    <div>
      <br />
      <Link to={`/todos/`}>BACK</Link>
    </div>
  </div>
);
