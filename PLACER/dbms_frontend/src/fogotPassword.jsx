import React, { useState } from 'react'
import axios from 'axios'
function Forgot (){
 const[email,setEmail]=useState('');
 const userData={
    email:email
 }

    const handleSubmit=(e)=>{

        e.preventDefault();

        axios
          .post("http://localhost:8080/user/forgotPassword",userData)
          .then((response) => {
            if (response.status === 200) {
              alert("MAIL HAS BEEN SENT TO UR REGISTERED MAIL ID ");
            } else {
              alert("somthing went wrong");
            }
          })
          .catch((error) => {
            // console.log(response.status)
            if (error) {
              alert("ERROR: " + error.message);
            }
          });
    }


  return (
    <div className="forgot">
      <div className="forgotheading">
        <h1>BRO WHY DID U FORGOT PASSWORD</h1>
      </div>
      <div>
        <form className='fogotform' onSubmit={handleSubmit}>
          <input
            className="input-ele"
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <button className="GETbutton" type="submit">
            GET PASSWORD
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgot;

