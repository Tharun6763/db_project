import React, { useState } from 'react'
import './navbar.css'  
import {Link} from 'react-router-dom';
import home from '../assets/home.jpeg';
import google from '../assets/google1.jpeg';
import microsoft from '../assets/microsoft.png';
import amazon from '../assets/amazon1.png';
import facebook from '../assets/facebook.png';
const Navbar = () => {
  const [menu,setMenu]=useState("")
  return (
    // <div></div>
    <>
    <div className='navbar'>
      <div className="nav-logo">
        <h1>PLACER</h1>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Login")}}><Link to='/login'>LOGIN</Link>{menu==="Login"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("signup")}}><Link to='/signup'>Signup</Link>{menu==="signup"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("forgot")}}><Link to='/forgotPassword'>ForgotPassword</Link>{menu==="forgot"?<hr/>:<></>} </li>
      </ul>
</div>
    <div className="homepage">
     {/* <h1>placerrrr</h1> */}
     <img src={home} alt="" className="image-style"/>
    </div>
<div class="container5">
        <div class="text-center" >
            <h2 class="section-heading">TOP COMPANIES</h2>
        </div>
        <ul class="timeline">
            <li>
              {/* <a href="../assets/google1.jpeg" target="_blank"> */}
                    <div class="timeline-image"><img class="rounded-circle" src={google} alt="..." /></div>
                {/* </a> */}
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>GOOGLE</h4>
                    </div>
                    <div class="timeline-body">
                        <p class="text-muted">Google is a multinational technology company based in California, known for its internet-related services, including
                        search, advertising, cloud computing, software, and hardware. It's recognized for its search engine and Android
                        operating system, which powers many smartphones.</p>
                    </div>
                </div>
            </li>
            <li class="timeline-inverted">
                {/* <a href="../assets/microsoft.png" target="_blank"> */}
                    <div class="timeline-image"><img class="rounded-circle" src={microsoft}
                            alt="..." /></div>
                {/* </a> */}
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>MICROSOFT</h4>
                    </div>
                    <div class="timeline-body">
                        <p class="text-muted">Microsoft is a multinational technology corporation headquartered in Redmond, Washington. It is one of the world's
                        leading technology companies. Microsoft is known for its software products, particularly the Windows operating system
                        and the Office productivity suite.</p>
                    </div>
                </div>
            </li>
            <li>
                {/* <a href="../assets/amazon1.png" target="_blank"> */}
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={amazon}
                            alt="..." /></div>
                {/* </a> */}
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>AMAZON</h4>
                    </div>
                    <div class="timeline-body">
                        <p class="text-muted">Amazon has grown to become one of the world's largest online retailers, offering a wide range of products and services,
                        including Amazon Prime, Amazon Web Services (AWS), and the Kindle e-reader.</p>
                    </div>
                </div>
            </li>
            <li class="timeline-inverted">
                {/* <a href="../assets/facebook.png" target="_blank"> */}
                    <div class="timeline-image"><img class="rounded-circle img-fluid" src={facebook}
                            alt="..." /></div>
                {/* </a> */}
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h4>FACEBOOK</h4>
                    </div>
                    <div class="timeline-body">
                        <p class="text-muted">Facebook is known for creating and operating the Facebook social networking platform, as well as owning other popular social
                        media apps like Instagram and WhatsApp. Meta is at the forefront of virtual and augmented reality technologies, with its
                        Oculus VR division.</p>
                    </div>
                </div>
            </li>
            <li class="timeline-inverted">
                <div class="timeline-image">
                    <h4>
                        Be Part
                        <br />
                        Of Our
                        <br />
                        PLACER!
                    </h4>
                </div>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Navbar
