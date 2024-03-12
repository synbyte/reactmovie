import { Outlet, Link } from "react-router-dom";
import React from 'react';

const Layout = () => {
  return (
    <div className="">
      <nav className="bg-violet-900">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;