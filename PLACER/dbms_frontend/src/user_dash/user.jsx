import React from "react";
import { Link } from "react-router-dom";
import "./user.css"; // Import your CSS file

const Student = () => {
  return (
    <div className="admin-div">
      <div className="admin-container">
        <div className="button-container">
          <Link to="/department">
            <button className="getcomp">Department</button>
          </Link>
          <Link to="/companies">
            <button className="getcomp">Companies</button>
          </Link>
          <Link to="/changepassword">
            <button className="getcomp">CHANGE PASSWORD</button>
          </Link>
        </div>
      </div>
      <div className="admin2-container"></div>
    </div>
  );
};

export default Student;
