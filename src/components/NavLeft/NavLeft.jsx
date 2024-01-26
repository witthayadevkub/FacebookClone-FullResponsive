import React,{ useState} from 'react'
import './NavLeft.css'

import { FaChevronDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
const NavLift = () => {

  const [seeMore, setSeeMore] = useState(false)

  const handleSeemore = () =>{
    setSeeMore(()=> !seeMore)
  }

  return (
    <div>
        <div className="leftNav">
          <div className="user navbox">
              <img src="https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <p>user1</p>
          </div>

         <div className="forborder-bottom">

               <div className="navbox">
            <span className="img Friend"></span>
            <p>Friends</p>
          </div>
          <div className="navbox">
            <span className="img Memories"></span>
            <p>Memories</p>
          </div>
          <div className="navbox">
            <span className="img Saved"></span>
            <p>saved</p>
          </div>
          <div className="navbox">
            <span className="img Groups"></span>
            <p>Groups</p>
          </div>
          <div className="navbox">
            <span className="img Video"></span>
            <p>Video</p>
          </div>
          <div className="navbox">
            <span className="img Marketplace"></span>
            <p>Marketplace</p>
          </div>
          <div className="navbox">
            <span className="img Feeds"></span>
            <p>Feeds</p>
          </div>

          {!seeMore ?
          <div className="navbox" onClick={handleSeemore}>
                      <span className="Seemore" >
                        <i><FaChevronDown /></i>
                      </span>
                      <p>See more</p>
          </div>
          :<div className="seelessBox" >

                <div className="navbox">
                  <span className="img Friend"></span>
                  <p>Friends</p>
                </div>
                <div className="navbox">
                  <span className="img Memories"></span>
                  <p>Memories</p>
                </div>
                <div className="navbox">
                  <span className="img Saved"></span>
                  <p>saved</p>
                </div>
                <div className="navbox">
                  <span className="img Groups"></span>
                  <p>Groups</p>
                </div>
                <div className="navbox">
                  <span className="img Video"></span>
                  <p>Video</p>
                </div>
                <div className="navbox">
                  <span className="img Marketplace"></span>
                  <p>Marketplace</p>
                </div>
                <div className="navbox">
                  <span className="img Feeds"></span>
                  <p>Feeds</p>
                </div>

                <div className="navbox"onClick={handleSeemore}>
                  <span className="Seeless" >
                        <i><FaChevronDown /></i>
                      </span>
                      <p>See less</p>
                </div>
                      
          </div>
        }
         </div>
                    

          <div className="shortcuts">
            <span>Your shortcuts</span>

                <div className="boxcut">
                      <img src="https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_1280.jpg" alt="" />
                      <p>กลุ่มนักเขียนโปรแกรม</p>
                </div>
                <div className="boxcut">
                      <img src="https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_1280.jpg" alt="" />
                      <p>สมาคมโปรแกรมเมอร์ไทย</p>
                </div>
                <div className="boxcut">
                      <img src="https://cdn.pixabay.com/photo/2022/09/29/17/15/halloween-7487706_1280.jpg" alt="" />
                      <p>Jobs for Thai Programmers</p>
                </div>
          </div>
        </div>

       

    </div>
  )
}

export default NavLift