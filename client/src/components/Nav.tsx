import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <nav >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-new-course">Add New Course</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

