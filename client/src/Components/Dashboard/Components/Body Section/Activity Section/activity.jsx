import React from 'react'
import './activity.scss'
import img from "../../../../../LoginAssets/image.jpg";

import {BsArrowRightShort} from "react-icons/bs";

import wm6 from "../../../../../LoginAssets/wm6.jpeg";
import wm7 from "../../../../../LoginAssets/wm7.jpeg";
import wm8 from "../../../../../LoginAssets/wm8.webp";
import wm9 from "../../../../../LoginAssets/wm9.jpeg";
import wm10 from "../../../../../LoginAssets/wm10.webp";


const Activity = ()=>{
    return(
        <div className='activitySection'>
              <div className="heading flex">
                <h1>Recent Activity</h1>
                <button className='btn flex'>
                     See All <BsArrowRightShort className="icon"/> 
                </button>
              </div>

              <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={wm7} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">
                        Carina 
                        </span>
                        <small>Ordered a new Plant</small>
                    </div>

                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={wm8} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">
                        Adina
                        </span>
                        <small>Ordered a new Plant</small>
                    </div>

                    <div className="duration">
                        3 min ago
                    </div>
                </div>


                <div className="singleCustomer flex">
                    <img src={wm9} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">
                        Esilda
                        </span>
                        <small>Ordered a new Plant</small>
                    </div>

                    <div className="duration">
                        5 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={wm10} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">
                        Jocosa
                        </span>
                        <small>Ordered a new Plant</small>
                    </div>

                    <div className="duration">
                        6 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={wm6} alt="Customer Image" />
                    <div className="customerDetails">
                        <span className="name">
                        Rohesia
                        </span>
                        <small>Ordered a new Plant</small>
                    </div>

                    <div className="duration">
                        8 min ago
                    </div>
                </div>

                
              </div>
        </div>
    )
}

export default Activity;