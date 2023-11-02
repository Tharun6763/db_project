import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./updateroles.css";

function UserStatusUpdate() {
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("");
  const tokenRef = useRef(null);

  useEffect(() => {
    tokenRef.current = localStorage.getItem("token");
    setToken(tokenRef.current);
    if (!tokenRef.current) {
      console.log("Token not found, please log in");
    } else {
      fetchUsers();
    }
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:8080/user/get", {
        headers: {
          Authorization: `Bearer ${tokenRef.current}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      });
  };

  const handleSwitchChange = (userId, newStatus) => {
    axios
      .patch(
        `http://localhost:8080/user/update`,
        { id: userId, status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${tokenRef.current}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          alert("User status updated successfully");
          fetchUsers(); // Refresh user list after update
        } else if (response.status === 404) {
          alert("User ID does not exist");
        } else {
          alert("Error updating user status");
        }
      })
      .catch((error) => {
        console.error("Error updating user status:", error);
      });
  };

  return (
    <div className="updateroles">
      <div className="headingup">
        <h1>User Status Update</h1>
      </div>
      <div className="user-cards">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="card-header">
              <strong>User ID: {user.id}</strong>
            </div>
            <div className="card-status">
              <strong>Status:</strong>
              {user.status === "true" ? "Active" : "Inactive"}
            </div>
            <div className="card-actions">
              <label className="uplabel">
                Change Status:
                <input
                  className="upinput"
                  type="checkbox"
                  checked={user.status === "true"}
                  onChange={() =>
                    handleSwitchChange(
                      user.id,
                      user.status === "true" ? "false" : "true"
                    )
                  }
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserStatusUpdate;
