import * as React from 'react';
import './App.css';

import Dashboard from './components/dashboard/dashboard';

class App extends React.Component {
  state = {
    response: ''
  };

  public componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(data => this.setState({ response: data.response }));
  }

  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res }))
  //     .catch(err => this.setState({ response: err.message }));
  // }

  // callApi = async () => {
  //   const response = await fetch('/users');
  //   // return response.body;
  //   const body = await response.json();

  //   // console.log(body);
  //   // if (response.status !== 200) { throw Error(body.message); }

  //   return body;
  // };

  public render() {
    return (
      <div>
        <p>{this.state.response}</p>
        <Dashboard />
      </div>
    );
  }
}

export default App;
