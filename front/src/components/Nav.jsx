import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
  // ... código del componente Nav

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      {/* ... otros elementos del componente Nav */}
    </div>
  );
};

export default Nav;