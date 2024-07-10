import React from 'react'

//imported images
import "./sidebar.scss";
import img from '../../Assets/leaf1.png';

//importing icons
import {IoMdSpeedometer} from 'react-icons/io';
import {MdDeliveryDining} from 'react-icons/md';
import {MdOutlineExplore} from 'react-icons/md';
import {BsTrophy} from 'react-icons/bs';
import {AiOutlinePieChart} from 'react-icons/ai';
import {BiTrendingUp} from 'react-icons/bi';
import {MdOutlinePermContactCalendar} from 'react-icons/md';
import {BsCreditCard2Front} from 'react-icons/bs';
import {BsQuestionCircle} from "react-icons/bs"



const Sidebar = ()=>{
    return(
        <div className='sideBar1 grid1'>
           <div className="logoDiv1 flex1">
            <img src={img} alt="Img" />
            <h2>Planti.</h2>
           </div>

           <div className="menuDiv1">
            <h3 className="divTitle1">
                Quick Menu
            </h3>
            <ul className="menuLists1 grid1">

                <li className="listItem1">
                    <a href="#" className="menuLink1">
                    <IoMdSpeedometer className='icon1' />
                    <span className='smallText1'>Dashboard</span>
                    </a>
                </li>

                <li className="listItem1">
                    <a href="#" className="menuLink1">
                    <MdDeliveryDining className='icon1' />
                    <span className='smallText1'>My Orders</span>
                    </a>
                </li>

                <li className="listItem1">
                    <a href="#" className="menuLink1">
                    <MdOutlineExplore className='icon1' />
                    <span className='smallText1'>Explore</span>
                    </a>
                </li>

                <li className="listItem1">
                    <a href="#" className="menuLink1">
                    <BsTrophy className='icon1' />
                    <span className='smallText1'>Products</span>
                    </a>
                </li>


            </ul>
           </div>

           <div className="settingsDiv1">
            <h3 className="divTitle1">
                SETTINGS
            </h3>
            <ul className="menuLists1 grid1">

                <li className="listItem1">
                    <a href="#" className="menuLink1">
                    <AiOutlinePieChart className='icon1' />
                    <span className='smallText1'>Charts</span>
                    </a>
                </li>

                <li className="listItem1">
                    <a href="#" className="menuLink1">
                    <BiTrendingUp className='icon1' />
                    <span className='smallText1'>Trends</span>
                    </a>
                </li>

                <li className="listItem1">
                    <a href="#" className="menuLink1">
                    <MdOutlinePermContactCalendar className='icon1' />
                    <span className='smallText1'>Contact</span>
                    </a>
                </li>

                <li className="listItem1">
                    <a href="#" className="menuLink1">
                    <BsCreditCard2Front className='icon1' />
                    <span className='smallText1'>Billing</span>
                    </a>
                </li>


            </ul>
           </div>


           <div className="sideBarCard">
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
            
    )
}

export default Sidebar;