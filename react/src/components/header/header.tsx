import * as React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Boilerplate VLabs</h1>
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
      </header>
    </div>
  );
};

export default Header;
