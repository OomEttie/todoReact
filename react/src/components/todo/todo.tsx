import * as React from 'react';

class Header extends React.Component {
  state = {
    newTodo: '',
    todos: [
      'item1',
      'item2',
      'item3'
    ]
  };

  //**HELP ??? state object not working */
  handleRemoveItem = (item: any) => {
    this.setState((prevState) => ({ todos: this.state.todos.filter(todoItem => todoItem !== item) }));
    // this.state.todos = this.state.todos.filter(obj => obj !== item);
  }

  handleAddTodo = () => {
    const newTodoItem = this.state.newTodo;
    if (newTodoItem.length > 0) {
      this.setState((prevState) => ({ todos: this.state.todos.concat([newTodoItem]), newTodo: '' }));
    }
  }

  handleChange = (e: any) => {
    this.setState({ newTodo: e.target.value })
  }

  public render() {
    return (
      <div>
        <div>
          <h2>Todo List Component</h2>
          <button onClick={this.handleAddTodo}>ADD todo</button>
          <input type="text" value={this.state.newTodo} onChange={this.handleChange} />
        </div>
        <div>
          <ul>
            {this.state.todos.map(todoItem => {
              const todoItemDiv = todoItem + 'div';
              const todoItemLi = todoItem + 'li';
              const todoItemBtn = todoItem + 'btn';
              return (
                <div key={todoItemDiv}>
                  <li key={todoItemLi}>{todoItem}</li>
                  <button key={todoItemBtn} onClick={e => { this.handleRemoveItem(todoItem) }}>X</button>
                </div>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
