import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import "./Register.scss";
//import our assets

import video from '../LoginAssets/video.mp4'
import logo from'../LoginAssets/leaf1.png'

//Import icons

import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"
import {MdMarkEmailRead} from "react-icons/md"


const Register = ()=>{

    //usestates to hold our inputs

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [ password, setPassword] = useState('');

    //onClick: let us get what the user has entered

    const createUser = ()=>{
        Axios.post('http://localhost:8080/register', {
            Email:email,
            UserName:userName,
            Password:password,
        }).then(()=>{

            document.querySelector(".status").style.display  = "block";

            setTimeout(()=>{
                document.querySelector(".status").style.display="none";

            }, 2000);

            console.log("The user has been created successfully");

        })
    }

    return(
        <div className='registerPage flex'>
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video}  class="video" autoPlay muted loop></video>

                    <div className="textDiv">
                    <h2 className="title">Create and Sell Extraordinary Products</h2>
                    <p>Adopt the peace of nature!</p>
                </div>

                <div className="footerDiv flex">
                    <span className='text'>Have an Account ?</span>
                    <Link to={'/'}>
                       <button className='btn'>Login</button>
                    </Link>
                </div>

             </div>

             <div className="flex formDiv">
                
                 <div className='headerDiv'>
                    <img src={logo} class="img" alt="logo image" />
                    <h3>Let Us Know You!</h3>                    

                 </div>

              <form action="" className='form grid'>
                
              {/* <div style={{ backgroundColor:'#87CD51', border:"2px", borderColor:"red", borderRadius:"7px",color:"white", textAlign:"center", padding:"12px 0"}} className='status'><span>Successfully Registered!</span></div> */}

                <div className="inputDiv">

                   <label htmlFor='email'>Email</label>
                   <div className="input flex">
                    <MdMarkEmailRead className="icon" />
                    <input type="email" id="email" placeholder='Enter Email' required onChange={(event)=>{
                        setEmail(event.target.value)
                    }}/>
                   </div>
                </div>

                <div className="inputDiv">
                   <label htmlFor='password'>Username</label>
                   <div className="input flex">
                    <FaUserShield className="icon" />
                    <input type="text" id="username" placeholder='Enter Username' required onChange={(event)=>{
                        setUserName(event.target.value)
                    }}/>
                   </div>
                </div>


                <div className="inputDiv">
                   <label htmlFor='password'>Password</label>
                   <div className="input flex">
                    <BsFillShieldLockFill className="icon" />
                    <input type="password" id="password" placeholder='Enter Password' required  onChange={(event)=>{
                        setPassword(event.target.value)
                    }}/>
                   </div>
                </div>

                <button type="submit" className='btn flex' onClick={createUser}>
                    <span>Register</span>
                    <AiOutlineSwapRight className="icon" />
                </button>

    
                {/* <span className='forgotPassword'>
                    Forgot your password? <a href="">Click Here</a>
                </span> */}
            

              </form>
             </div>
            </div>
        </div>
    )
}

export default Register