import React,{useState, useContext} from 'react'
import { DataUser } from '../../App';
import './NavRight.css'


//icon
import { FaSearch,} from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";

const NavRight = () => {

  const userInfo = useContext(DataUser)
  console.log(userInfo)
  return (
    <div className='navright'>
      <div className="sponsored">
        <span>sponsored</span>

        <div className="conspon">
          <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h4>Group members 1000 people</h4>
        </div>

        <div className="conspon">
          <img src="https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <h4>Group members 1000 people</h4>
        </div>
        
      </div>

      <div className="birthdays">
       <div className="img"></div>
        <p>your friend have birthdays today.</p>
      </div>

      <div className="cotacts">

        
          <div className="topcotacts">
            <p>Contacts</p>
            <div className="icon">
               <i><FaSearch /></i>
               <i className="material-icons">more_horiz</i>
            </div>
          </div>

           <div >
              {userInfo.map(user => <div className="user">
                
                <div className="img">
                  <img src={user.userphoto} alt={user.name} />
                  <p></p>
                </div>
                <p>{user.name}</p>
              </div>)}
          </div>
       
      </div>
      <div className="iconbottom">
            <i><BiSolidEdit /></i>
      </div>
      
    </div>
  )
}

export default NavRight