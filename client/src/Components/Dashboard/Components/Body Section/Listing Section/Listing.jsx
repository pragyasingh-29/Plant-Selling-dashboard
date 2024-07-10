import React from 'react'
import './listing.scss'

import {AiFillHeart} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai"
import {BsArrowRightShort} from "react-icons/bs";
//import image

import img12 from "../../../../../LoginAssets/img12.jpg";
import img5 from "../../../../../LoginAssets/img5.jpg";
import img6 from "../../../../../LoginAssets/img6.jpg";
import img9 from "../../../../../LoginAssets/img9.jpg";
import wm6 from "../../../../../LoginAssets/wm6.jpeg";
import wm2 from "../../../../../LoginAssets/wm2.jpeg";
import wm3 from "../../../../../LoginAssets/wm3.webp";
import wm4 from "../../../../../LoginAssets/wm4.webp";
import wm7 from "../../../../../LoginAssets/wm7.jpeg";
import wm8 from "../../../../../LoginAssets/wm8.webp";
import wm9 from "../../../../../LoginAssets/wm9.jpeg";
import wm10 from "../../../../../LoginAssets/wm10.webp";


const Listing = ()=>{
    return(
        <div className='listingSection'>
            <div className="heading flex">
                <h1>My Listings</h1>
                <button className='btn flex'>
                    See All 
                    <BsArrowRightShort className="icon"/> 
                </button>
            </div>

            <div className="secContainer flex">
                 <div className="singleItem">
                <AiFillHeart className="icon" />
                  <img src={img12} alt="image" /> 
                  <h3>Annual Vince</h3>
                </div> 

                <div className="singleItem">
                <AiOutlineHeart className="icon" />
                  <img src={img5} alt="image" /> 
                  <h3>Coffee Plant</h3>
                </div> 

                <div className="singleItem">
                <AiFillHeart className="icon" />
                  <img src={img6} alt="image" /> 
                  <h3>Button Fern</h3>
                </div> 

                <div className="singleItem">
                <AiOutlineHeart className="icon" />
                  <img src={img9} alt="image" /> 
                  <h3>Spider Plant</h3>
                </div> 


            </div>
   
            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Sellers</h3>
                        <button className='btn flex'>
                    See All<BsArrowRightShort className="icon"/> 
                </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={wm6} alt="img" />
                            <img src={wm2} alt="img" />
                            <img src={wm3} alt="img" />
                            <img src={wm4} alt="img" />
                        </div>
                        <div className="cardText">
                            <span>
                                14,556 Plant sold <br/>
                                <small>
                                    21 sellers <span className='date'>7 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured Sellers</h3>
                        <button className='btn flex'>
                    See All<BsArrowRightShort className="icon"/> 
                </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={wm7} alt="img" />
                            <img src={wm8} alt="img" />
                            <img src={wm9} alt="img" />
                            <img src={wm10} alt="img" />
                        </div>
                        <div className="cardText">
                            <span>
                                28,556 Plant sold <br/>
                                <small>
                                    26 sellers <span className='date'>31 Days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>



            </div>
        
        </div>
    )
}

export default Listing;