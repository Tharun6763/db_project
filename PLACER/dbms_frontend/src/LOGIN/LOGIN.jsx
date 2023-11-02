import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("token not found login again");
      return;
    }
    // navigate("/login");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:8080/user/login", userData)
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.token;
          localStorage.setItem("token", token);
          console.log(token);
          const role = response.data.role;
          alert("SUCESSFULLY LOGIN");
          // Redirect to some page
          if (role === "admin") {
            navigate("/admin_dashboard");
          } else {
            navigate("/dashboard");
          }
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div style={{backgroundColor:"green"}}>
    // <div className="entirebody">
    <div className="LOGIN">
      <div className="logintext">
        <h1>Login</h1>
      </div>

      <form className="loginform" onSubmit={handleSubmit}>
        <input
          className="input-ele"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          className="input-ele"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button className="loginbutton" type="submit">
          Login
        </button>
      </form>
    </div>
    //  </div>
  );
}

export default Login;
