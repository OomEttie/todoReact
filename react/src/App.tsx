import * as React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/about/about';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import Todos from './components/todo/todo';

class App extends React.Component {
  state = {
    response: ''
  };

  public render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            <Header />
          </header>
          <div>
            <Route exact={true} path="/" component={Dashboard} />
            <Route exact={true} path="/todos" component={Todos} />
            <Route exact={true} path="/about" component={About} />
          </div>
          <p>{this.state.response}</p>
        </div>
      </Router>
    );
  }
}

export default App;

//simple route
//authenticated public vs private routes
