import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import  BasicAlerts from '../components/alert';
import './addcomp.css'
function Addcomp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [comptype, setComptype] = useState("");

  const tokenRef = useRef(null);
// const [comptype, setComptype] = useState("");
  useEffect(() => {
    tokenRef.current = localStorage.getItem("token");
    if (!tokenRef.current) {
      // alert("Token not found, please log in");
      <BasicAlerts message="Token not found,please login" serverity="error"/>
      return;
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userdata = {
      comp_name: name,
      comp_salary: salary,
      comp_email: email,
      type: comptype,
    };

    axios
      .post("http://localhost:8080/companies/add", userdata, {
        headers: {
          Authorization: `Bearer ${tokenRef.current}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          alert("company added sucessfully");
          <div>
            <BasicAlerts
              message="company added sucessfully"
              serverity="success"
            />
            ;
          </div>;
          
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(tokenRef.current);
        if (error.response && error.response.status === 403) {
          alert(
            "Access forbidden. You do not have permission to view this resource."
          );
        }
        if (error.response && error.response.status === 401) {
          alert("Authentication failed. Please log in.");
        }
      });
  };

  return (
    <div className="addcomp">
      {/* <div className="addcomphead">ADD COMPANY</div> */}
      <div className="addform">
        <form className="addform" onSubmit={handleSubmit}>
          <input
            className="input-ele"
            type="text"
            placeholder="ENTER THE COMPANY NAME"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            className="input-ele"
            type="text"
            placeholder="COMPANY SALARY"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <br />
          <input
            className="input-ele"
            type="email"
            placeholder="ENTER EMAIL ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <select
            className="input-select"
            value={comptype}
            onChange={(e) => setComptype(e.target.value)}
          >
            <option value="">SELECT COMPANY TYPE</option>
            <option value="Limited liability">Limited liability</option>
            <option value="BANKING FINANCE">BANKING FINANCE</option>
            <option value="IT INDUSTRT">IT INDUSTRY</option>
            <option value="MANUFACTURING">MANUFACTURING</option>
            <option value="E-COMMERCE">E-COMMERCE</option>
            <option value="TELECOMMUNICATION">TELECOMMUNICATION</option>
          </select>
          <button className="addbutton" type="submit">
            ADD COMPANY
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addcomp;
