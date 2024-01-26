import React from 'react'

import './Navbar.css'

//react-icon
import { RiMessengerLine } from "react-icons/ri";
import { MdOndemandVideo } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { FaBars, FaSearch,} from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { useState } from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { RiGamepadLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { AiTwotoneShop } from "react-icons/ai";

const Navbar = () => {
    const [alart, setAlart] = useState({
        chat:1,
        friends:0,
        video:9,
        notification:10,
        community:0,
    })

  return (
    <div className='layoutnav'>
        <nav className='layout1'>
            <div className="topNav">
                    <div className="logo">
                            {/* <h1>facebook</h1> */}
                            <img  src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png'" alt="" />       
                    </div>
                        <div className="nav-topleft">
                            <div className="iconNav">
                                <FaSearch />
                            </div>
                            <div className="iconNav">
                            <FaBars/>
                            </div>
                        </div>
            </div>  

            <div className="menu">
                <div className="home">           
                    <i><TiHome/></i>
                    <p></p>
                </div>

                {alart.friends !== 0 ? 
                <div className="box-icon">
                   <i >  <IoPeopleOutline /> </i>
                    <p>{alart.friends}</p>
                </div>
                : <i >  <IoPeopleOutline /> </i>}     

                {alart.chat !== 0 ? 
                <div className="box-icon">
                    <i><RiMessengerLine/></i>
                    <p>{alart.chat}</p>
                </div> 
                : <i><RiMessengerLine/></i>}
                
                {alart.video !== 0 ? 
                <div className="box-icon">
                    <i><MdOndemandVideo/></i>
                    <p>{alart.video}</p>
                </div>
                : <i><MdOndemandVideo/></i>}
                
                {alart.notification !== 0 ? 
                <div className="box-icon">
                    <i><IoNotificationsOutline/></i>
                    <p>{alart.notification}</p>
                </div>
                : <i><IoNotificationsOutline/></i>}
                
                {alart.community != 0 ? 
                <div className="box-icon">
                    <i className="fa-solid fa-users-rectangle" ></i>
                     <p>{alart.community}</p>
                </div> 
                : <i className="fa-solid fa-users-rectangle" ></i>}
                
            </div>          
        </nav>

<div className="layout2">
    <div className="flex">
        <div className="logo">
            <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1-2.png" alt="" />
            <div className="input">
                <i><FaSearch /></i>
                <input type="text" id="mind" name="mind" placeholder="Search Facebook"></input>
            </div>
        </div>
        <div className="manu">
            <div className="icon active">
                <i className='iblue'><GoHomeFill /></i>
            </div>
            <div className="icon">
                <i><MdOndemandVideo/></i>
            </div>
            <div className="icon">
                <i><AiTwotoneShop /></i>
            </div>
            <div className="icon">
                <i><GrGroup /></i>
            </div>
            <div className="icon">
                <i><RiGamepadLine /></i>
            </div>
        </div>
        <div className="profile">
            {alart.notification !== 0 ? 
                <div className="box-icon">
                    <i><CgMenuGridR /></i>
                    
                </div>
                : <i><IoNotificationsOutline/></i>}
            {alart.notification !== 0 ? 
                <div className="box-icon">
                    <i><FaFacebookMessenger /></i>
                    <p>{alart.chat}</p>
                </div>
                : <i><FaFacebookMessenger /></i>}

            {alart.notification !== 0 ? 
                <div className="box-icon">
                    <i><IoNotifications /></i>
                    <p>{alart.notification}</p>
                </div>
                : <i><IoNotifications /></i>}

                    <div className="user">
                        <img src="https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
        </div>
    </div>
</div>         
        
    </div>
  )
}

export default Navbar
