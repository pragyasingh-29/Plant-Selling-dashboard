import React from 'react'
import './Body.scss'
import Top from "../Top Section/Top";
import Listing from "./Listing Section/Listing.jsx";
import Activity from "./Activity Section/activity";


const Body = ()=>{
    return(
        <div className='mainContent'>
            <Top />

            <div className='bottom flex1'>
                <Listing />
                <Activity />
            </div>
        </div>
    )
}

export default Body;