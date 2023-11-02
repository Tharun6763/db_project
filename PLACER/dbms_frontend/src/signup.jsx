import React from 'react';
import axios from 'axios';
import backgroundImage from './components/assets/signup.jpg';
import './signup.css'
function Signup() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      name: formData.get('name'),
      contactNumber: formData.get('contactNumber'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      const response = await axios.post('http://localhost:8080/user/signup', userData);
      console.log(response.data);
      // You can display the response or perform other actions as needed.
    } catch (error) {
      console.log(error);
    }
  }

  return (
    // <div className='signup' style={{backgroundImage:`url(${backgroundImage})`,}}>
      <div className='signup' style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      // height: '100vh'// Set the height to fill the entire viewport
    }}>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} className='signupform'>
        <input type="text" name="name" placeholder="Name"  className='signupdetails'/>
        <input type="text" name="contactNumber" placeholder="Contact Number" className='signupdetails' />
        <input type="email" name="email" placeholder="Email" className='signupdetails' />
        <input type="password" name="password" placeholder="Password"  className='signupdetails'/>
        <button type="submit" className='signupsubmit'>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
