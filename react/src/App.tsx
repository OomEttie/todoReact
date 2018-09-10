import * as React from 'react';
import './App.css';

// import createHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './components/about/about';
import CRUD from './components/crud/crud';
import Dashboard from './components/dashboard/dashboard';
import Header from './components/header/header';
import Todo from './components/todo/todo';

// export const history = createHistory();

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <div>
            <Header />
          </div>
          <div>
            <div>
              <Route exact={true} path="/" component={Dashboard} />
              <Route path="/about" component={About} />
              <Route path="/crud" component={CRUD} />
              <Route path="/todos" render={() => <Todo />} />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

//simple route
//authenticated public vs private routes

// state = {
//   response: '',
//   todos: []
// };

// public componentDidMount() {
//   fetch('/todos/list')
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       this.setState({ todos: data });
//     });
//   //.then(data => this.setState({ response: data.response }));
// }
{
  /* <ul>
            {this.state.todos.map(item => {
              return <li key={item}>{item}</li>;
            })}
          </ul> */
}
{
  /* <h2>List of Todos</h2>
{this.state.todos.map((item: InterfaceTodo) => {
  return (
    <p key={item.id}>
      ({item.id}) - {item.title}
    </p>
  );
})} */
}
