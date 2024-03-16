import { Outlet, Link } from "react-router-dom";
import React from 'react';
import MovieSearch from "../components/MovieSearch";

const Layout = () => {
  const resetTrending = () => {
    MovieSearch.orTrending();
  }
  return (
    <div className="">
      <nav className="bg-gray-800 keania-one-regular">
        <ul>
          <li id='logo' className="inline text-2xl font-bold text-gray-900">
            <Link onClick={resetTrending} to="/">Blueys Movies</Link>
          </li>
          
        </ul>
      </nav>
      
      <Outlet />
    </div>
  )
};

export default Layout;