import * as React from 'react';
import { v1 as uuid } from 'uuid';

const getNewItem = (desc: string = "") => ({
  description: desc,
  id: uuid(),
  todoItems: [
    {
      title: 'test'
    },
    { title: 'test2' }
  ]
});

class Header extends React.Component {
  state = {
    newTodoDescription: '',
    todos: [getNewItem('sell Apples'), getNewItem('buy Apples')]
  };

  
  handleRemoveItem = (item: any) => {
    this.setState((prevState) => ({ todos: this.state.todos.filter(todoItem => todoItem !== item) }));
  }

  handleAddTodo = () => {
    if (this.state.newTodoDescription !== "") {
      this.setState({ todos: this.state.todos.concat(getNewItem(this.state.newTodoDescription)) });
      this.setState({ newTodoDescription: '' });
    }
  }

  EditItem = (todoItem: any) => {
    console.log(todoItem)
  }

  handleChange = (e: any) => {
    this.setState({ newTodoDescription: e.target.value })
  }

  public render() {
    return (
      <div >
        <div>
          <h2>Todo List Component</h2>
          <input type="text" value={this.state.newTodoDescription} onChange={this.handleChange} />
          <button onClick={this.handleAddTodo}>ADD todo</button>
        </div>
        <div>
          <ul> 
            {this.state.todos.map(todoItem => (
                <div key={uuid()} >
                  <button key={uuid()} onClick={() => { this.handleRemoveItem(todoItem) }}>X</button>
                  <div key={uuid()}>
                    <li key={uuid()} onClick={() => this.EditItem(todoItem)}>{todoItem.description}</li>
                    {todoItem.todoItems.map(item => (
                      <ul key={uuid()}>
                        <li key={uuid()} onClick={() => this.EditItem(todoItem)}>{item.title}</li>
                      </ul>))}
                  </div>
                </div>)
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
