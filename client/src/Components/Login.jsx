import React, {useEffect, useState} from 'react';
import "./Login.scss";


import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

//import our assets

import video from '../LoginAssets/video.mp4'
import logo from'../LoginAssets/leaf1.png'

//Import icons

import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"

const Login = ()=>{
   
    // e.preventDefault();
    //usestate hook to store inputs 
    
    const [loginUserName, setLoginUserName] = useState('');
    const [ loginPassword, setLoginPassword] = useState('');
    const navigateTo = useNavigate();


    //let us now the message to the user
    // const[loginStatus, setLoginStatus] = useState('');
    // const[statusHolder, setstatusHolder] = useState('message');


    const loginUser = (e)=>{
     e.preventDefault();

    
        axios.post('http://localhost:8080/login', {

            LoginUserName:loginUserName,
            LoginPassword:loginPassword,

        }).then((response)=>{

            console.log("The response is",response);

            if(response.data.message ||loginUserName == "" || loginPassword == '' ){

                navigateTo('/');
                document.querySelector(".statusHolder").style.display="block";

                setTimeout(()=>{
                    document.querySelector(".statusHolder").style.display="none";

                }, 2000);
                console.log(response.data.message);
                

           }else{
            navigateTo('/dashboard');

           }
        })
    }

    
    //lets clear the form on submit

    const onSubmit = ()=>{

        setLoginUserName('')

        setLoginPassword('')
        
    }

    return(
        <div className='loginPage flex'>
            <div className="container flex">

                <div className="videoDiv">
                    <video src={video} className="video" autoPlay muted loop></video>

                    <div className="textDiv">
                    <h2 className="title">Create and Sell Extraordinary Products</h2>
                    <p>Adopt the peace of nature!</p> 
                    </div>
    

            <div className='footerDiv flex'>
                    <span className='text'>Don't have an Account ?</span>
                    <Link to={'/register'}>
                       <button className='btn'>Sign Up</button>
                    </Link>
                </div>
             </div>


             <div className="flex formDiv">
                 <div className='headerDiv'>
                    <img src={logo} className="img" alt="logo image" />
                    <h3>Welcome Back!</h3>
                 </div>

              <form action="" className='form grid' onSubmit={onSubmit}>
                 <span className="statusHolder" style={{display:'none', backgroundColor:'orangered', padding:"12px 0px",textAlign:"center",color:"white", border:"3px", borderRadius:"9px"}}>Credentials Dosen't match !</span>

                <div className="inputDiv">
                   <label htmlFor='username'>Username</label>
                   <div className="input flex">
                    <FaUserShield className="icon" />
                    <input type="text" id="username" placeholder='Enter Username' required onChange={(event)=>{
                        setLoginUserName(event.target.value);
                    }} />
                   </div>
                </div>

                <div className="inputDiv">
                   <label htmlFor='password'>Password</label>
                   <div className="input flex">
                    <BsFillShieldLockFill className="icon" />
                    <input type="password" id="password" placeholder='Enter Password' required onChange={(event)=>{
                        setLoginPassword(event.target.value);
                    }}/>
                   </div>
                </div>

                <button type="submit" className='btn flex' onClick={loginUser}>
                    <span>Login</span>
                    <AiOutlineSwapRight className="icon" />
                </button>


                {/* <a href="/dashboard">Dashboard</a> */}
    
                {/* <span className='forgotPassword'>
                    Forgot your password? <a href="">Click Here</a>
                </span> */}
            

              </form>
             </div>
            </div>
        </div>
    )
}

export default Login