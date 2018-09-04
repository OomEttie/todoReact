import * as React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  public render() {
    return (
      <div>
        <h1>Header Component</h1>
        <div>
          <Link to="/">
            <button>Dashboard</button>
          </Link>
          <Link to="/todos">
            <button>ToDos</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
