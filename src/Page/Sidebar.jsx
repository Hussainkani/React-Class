import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-blue-900  h-screen p-3">
      <h2 className="p-5 text-3xl font-bold text-white ">DashBoard</h2>

      <div className="space-y-5">
        <div className="text-white bg-blue-500 p-4 rounded-xl">
          <Link to="/">Home</Link>
        </div>
        <div className="text-white bg-blue-500 p-4 rounded-xl">
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
