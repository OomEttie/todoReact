import * as React from 'react';
// import { dummyData, getTodoFromDummyData } from '../todo/todo.mock';
import { Link } from 'react-router-dom';
import * as TodoInterfaces from '../todo/todo.interface';

interface ICrudDisplayProps {
  todos: TodoInterfaces.ITodo[];
}
//retrieve list of todos
export const CrudDisplay = (props: ICrudDisplayProps) => (
  <div>
    {props.todos.map((todo: TodoInterfaces.ITodo) => {
      return <CrudDisplayTodo key={todo.todo_id} todo={todo} />;
    })}
  </div>
);

interface ICrudDisplayTodoProps {
  todo: TodoInterfaces.ITodo;
}
const CrudDisplayTodo = (props: ICrudDisplayTodoProps) => {
  return (
    <div>
      <h3>{props.todo.title}</h3>
      <CrudDisplayTodoItem todoItems={props.todo.todoItems} />
      <Link to={`/crud/edit/${props.todo.todo_id}`}>EDIT</Link>
    </div>
  );
};

interface ICrudDisplayTodoItemProps {
  todoItems: TodoInterfaces.ITodoItem[];
}
const CrudDisplayTodoItem = (props: ICrudDisplayTodoItemProps) => {
  return (
    <div>
      {props.todoItems.map((todoitem: TodoInterfaces.ITodoItem) => {
        return <div key={todoitem.todoitem_id}>* {todoitem.description}</div>;
      })}
    </div>
  );
};
