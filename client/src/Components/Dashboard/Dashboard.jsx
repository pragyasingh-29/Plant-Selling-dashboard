import React from 'react'
import"./Dashboard.css"
import Sidebar from './Components/SideBar Section/Sidebar'
import Body from './Components/Body Section/Body'

const Dashboard = ()=>{
    return(
        <div className='container2'>
          <Sidebar />
          <Body />
        </div>
    )
}

export default Dashboard