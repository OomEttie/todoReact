import * as React from 'react';
import { TodoList } from './todolist';
import * as InterfaceTodo from './todo.interface';

export const TodoDash = (props: InterfaceTodo.IDashProps) => {
  return (
    <div>
      <h2>Todo Dashboard</h2>
      <TodoList todos={props.todos} />
    </div>
  );
};

export default TodoDash;

{
  /* <button
onClick={() => {
  props.handleEditTodo({});
}}
>
Create New ToDo
</button> */
}
