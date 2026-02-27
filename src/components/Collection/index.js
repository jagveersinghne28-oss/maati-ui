import React from "react";
import { Outlet } from "react-router-dom";

const Collections = () => {
  return (
    <div className="page collections-page">
      {/* <h1>Our Collections</h1>
      <p>Explore our luxurious ceramic collections.</p> */}
      <Outlet />
    </div>
  );
};

export default Collections;
