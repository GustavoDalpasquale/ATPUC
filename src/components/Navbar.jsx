import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Page #1</Link>
        </li>
        <li>
          <Link to="/pagetwo">Page #2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
