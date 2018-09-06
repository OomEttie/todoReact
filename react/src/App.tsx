import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/about/about';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import Todos from './components/todo/todo';

interface InterfaceTodo {
  id: number;
  title: string;
}

class App extends React.Component {
  state = {
    response: '',
    todos: []
  };

  public componentDidMount() {
    fetch('/todos/list')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ todos: data });
      });
    //.then(data => this.setState({ response: data.response }));
  }

  public render() {
    return (
      <Router>
        <div>
          <div>
            <header className="App-header">
              <h1 className="App-title">Boilerplate</h1>
              <Header />
            </header>
          </div>
          <div>
            <div>
              <Route exact={true} path="/" component={Dashboard} />
              <Route exact={true} path="/todos" component={Todos} />
              <Route exact={true} path="/about" component={About} />
            </div>
            <h2>List of Todos</h2>
            {this.state.todos.map((item: InterfaceTodo) => {
              return (
                <p key={item.id}>
                  ({item.id}) - {item.title}
                </p>
              );
            })}
          </div>
          {/* <ul>
            {this.state.todos.map(item => {
              return <li key={item}>{item}</li>;
            })}
          </ul> */}
        </div>
      </Router>
    );
  }
}

export default App;

//simple route
//authenticated public vs private routes
