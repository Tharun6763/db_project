import React from "react";
import "./admin_dashboard.css";
import {Link} from 'react-router-dom'
const admin = () => {
  return (
    <div className="admin-div">
      <div className="admin-container">
        <div className="button-container">
          <Link to="/department">
            <button className="getcomp">Department</button>
          </Link>
          <Link to="/companies">
            <button className="getcomp">Companies</button>{" "}
          </Link>
          <Link to="/updateroles">
            <button className="getcomp">update roles</button>
          </Link>
          <Link to="/addcomp">
            <button className="getcomp">ADD COMPANIES</button>
          </Link>
          <Link to="/changepassword">
            <button className="getcomp">CHANGE PASSWORD</button>
          </Link>
          <Link to="/deleteComp">
            <button className="getcomp">DELETE COMPANIES</button>
          </Link>
        </div>
      </div>
      <div className="admin2-container"></div>
    </div>
  );
};
export default admin;
