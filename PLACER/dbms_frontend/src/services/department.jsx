import React,{useEffect} from 'react';
import  { useState } from "react";
import axios from 'axios';
import './department.css';
import CustomizedTables from "../components/Table";
 function Department () {
useEffect(()=>{
    const token=localStorage.getItem("token");
    if(!token)
    {
        console.log("token not found ");
        return;
    }
    

 axios.get("http://localhost:8080/department/get",{
    headers:{
        Authorization: `Bearer ${token}`,
    },
 })
 .then((response)=>{
    if(response.status===200)
    {
        const departmentdetails=response.data;
        console.log(departmentdetails);
        setDetails(departmentdetails)
    }
 })

.catch((error)=>{
    console.log(error);
    if (error.response && error.response.status === 403) {
      console.log(
        "Access forbidden. You do not have permission to view this resource.");
    
    }
    if (error.response && error.response.status === 401) {
      console.log("Authentication failed. Please log in.");
    }
});
 },[]);
 const [details, setDetails] = useState([]);
  return (
    <div>
      {/* companies */}
      <div className="heading">
        <h1>DEPARTMENTS</h1>
        <CustomizedTables data={details} />
      </div>
    </div>
  );
    

}

export default Department;
