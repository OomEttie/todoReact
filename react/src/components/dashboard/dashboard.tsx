import * as React from 'react';
class Dashboard extends React.Component {
  handleCreateNew = () => {
    fetch('/todos', {
      body: JSON.stringify({
        content: 'TodoItem from DASHBOARD'
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(data => {
      console.log(data);
    });
  };

  public render() {
    return (
      <div>
        <p>Welcome to the dashboard component</p>
        <button onClick={this.handleCreateNew}>
          Create New todo on engine
        </button>
      </div>
    );
  }
}

export default Dashboard;
