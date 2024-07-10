import React from 'react'
import './top.scss'
import {BiBorderAll, BiSearchAlt} from "react-icons/bi";
import {TbMessageCircle2} from "react-icons/tb";
import {MdOutlineNotifications} from "react-icons/md";
import video from "../../../../LoginAssets/video.mp4";
import {BsArrowRightShort} from "react-icons/bs" ;

//importing image

import img from "../../Assets/myimg.jpg";
import lmpwithplt from "../../Assets/pngwing.png";

//import img2 from "../../../../LoginAssets/img2.jpeg";

const Top = ()=>{
    return(
        <div className='topSection'>
            <div className="headerSection flex1">
                <div className="title">
                    <h1>Welcome to Planti.</h1>
                    <p>Hello,  Welcome back!</p>
                </div>

                <div className="searchBar flex1">
                    <input type="text" placeholder="Search Dashboard" />
                    <BiSearchAlt className="icon3"/>
                </div>

                <div className="adminDiv flex1">
                    <TbMessageCircle2 classname="icon3" />
                    <MdOutlineNotifications classname="icon3" />

                    <div className="adminImage">
                        <img src={img} alt="admin img" />
                    </div>
                </div>
            </div>

            <div className="cardSection flex1">
                <div className="rightCard flex1">
                    <h1>Create and sell extraordinary products</h1>
                    <p>The world's fast growing industry today are natural made products.</p>
                     
                     <div className="buttons flex1">
                        <button className='btn1'>Explore More</button>
                        <button className='btn1 transparent'>Top Sellers</button>
                     </div>

                    <div className="videoDiv" >
                        <video src={video} autoPlay loop muted></video>
                    </div>
                </div>

                <div className="leftCard flex1">
                    <div className="main flex1">
                        <div className="textDiv">
                            <h1>My Stat</h1>

                            <div className="flex1">
                                <span>
                                    Today<br/><small>4 Orders</small>
                                </span>
                            </div>

                            <div className="flex1">
                                <span>
                                    This Month<br/><small>175 Orders</small>
                                </span>
                            </div>


                           <span className="flex1 link">
                            Go to my Orders <BsArrowRightShort className="icon3" />
                           </span>
                       
                   </div>


                   <div className="imgDiv">

                     <div>
                        <img  src={lmpwithplt} alt="image" />
                      </div>  


                   </div>

                   
                        {/* <div className="sideBarCard">
                            <BsQuestionCircle className="icon1"/>
                            <div className="cardContent">
                                <div className="circle1"></div>
                                <div className="circle2"></div>

                                <h3>Help Center</h3>
                                <p>Having trouble in Planti, please contact us for more information </p>

                                <button className='btn1'>Go to the help center</button>
                            </div>
                            </div>
                          </div>
                          </div> */}
    
                </div>
            </div>
        </div>
    </div>

    )
}

export default Top;