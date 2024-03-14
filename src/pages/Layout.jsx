import { Outlet, Link } from "react-router-dom";
import React from 'react';
import MovieSearch from "../components/MovieSearch";

const Layout = () => {
  const resetTrending = () => {
    MovieSearch.orTrending();
  }
  return (
    <div className="">
      <nav className="bg-gray-800">
        <ul>
          <li>
            <Link onClick={resetTrending} to="/">Home</Link>
          </li>
          
        </ul>
      </nav>
      
      <Outlet />
    </div>
  )
};

export default Layout;