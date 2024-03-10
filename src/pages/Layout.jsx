import { Outlet, Link } from "react-router-dom";
import React from 'react';

const Layout = () => {
  return (
    <>
      <nav className="bg-violet-900">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;