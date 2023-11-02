import React, { useEffect, useState } from "react";
import axios from "axios";
import './addcomp.css';
function ChangePassword() {
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Token not found, please log in.");
      return;
    }

    const userData = {
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/user/changePassword",
        userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const newToken = response.data.token;
        localStorage.setItem("token", newToken);
        const role = response.data.role;
        setIsPasswordChanged(true);
      } else {
        alert("Password changing failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Token not found, please log in.");
    }
  }, []);

  return (
    <div className="changepassword">
      <div className="heading">
        <h1>Change Password</h1>
      </div>
      {isPasswordChanged ? (
        <div>
          <p>Password changed successfully!</p>
          {/* You can add a button or link here for further actions */}
        </div>
      ) : (
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
            placeholder="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <br />
          <input
            className="input-ele"
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <br />
          <button className="loginbutton" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ChangePassword;
