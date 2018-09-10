import * as React from 'react';
import { TodoDash } from './tododash';

import { dummyData } from './todo.mock';

export class Todo extends React.Component {
  state = {
    todos: dummyData
  };

  public render() {
    return (
      <div>        
        <TodoDash todos={this.state.todos} />
      </div>
    );
  }
}

export default Todo;

// //**HELP ??? state object not working */
// handleRemoveItem = (item: any) => {
//   this.setState(prevState => ({
//     todos: this.state.todos.filter(todoItem => todoItem !== item)
//   }));
//   // this.state.todos = this.state.todos.filter(obj => obj !== item);
// };

// handleAddTodo = () => {
//   const newTodoItem = this.state.newTodo;
//   if (newTodoItem.length > 0) {
//     this.setState(prevState => ({
//       todos: this.state.todos.concat([newTodoItem]),
//       newTodo: ''
//     }));
//   }
// };

// handleChange = (e: any) => {
//   this.setState({ newTodo: e.target.value });
// };

// public componentDidMount() {
//   console.log('Todo-componentDidMount');
// }

// handleEditTodo = (item: any) => {
//   this.setState(
//     {
//       todoForEdit: item
//     },
//     () => {
//       // this.props.history.push('/todos/edit');
//       console.log(this.state.todoForEdit);
//       // this.setState({ redirectToEdit: true });
//       // this.context.history.push('/todos/edit');
//       // Redirect({ to: '/todos/edit' });

//       // var transitionTo = Router.tra;
//       // transitionTo('your_route_name', (query = { keyword: input_value }));
//     }
//   );
// };

// handleRemoveTodo = (item: any) => {
//   this.setState(prevState => ({
//     todos: this.state.todos.filter(todo => todo !== item)
//   }));
// };
