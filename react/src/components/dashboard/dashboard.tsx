import * as React from 'react';
import Header from '../header/header';
import ToDo from '../todo/todo';

class Dashboard extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <ToDo />
      </div>
    );
  }
}

export default Dashboard;
