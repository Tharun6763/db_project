import React, { useState } from "react";
import axios from "axios";
import './deletecomp.css';
function DeleteComp() {
  const [companyId, setCompanyId] = useState("");

  const handleDelete = () => {
    // Perform the API request to delete the data
    axios
      .delete(`http://localhost:8080/companies/delete`,companyId)
      .then((response) => {
        if (response.status === 200) {
          alert("Data deleted successfully.");
          // Handle any additional logic here, such as updating the UI
        } else {
          alert("Data deletion failed.");
        }
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  };

  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="content">
        <h1>Delete Data from Database</h1>
        <input
          type="text"
          placeholder="Enter Company ID"
          value={companyId}
          onChange={(e) => setCompanyId(e.target.value)}
        />
        <button onClick={handleDelete}>Delete Data</button>
      </div>
    </div>
  );
}

export default DeleteComp;
