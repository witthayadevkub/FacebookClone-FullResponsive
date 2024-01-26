import React from 'react'
import './Mindtwo.css'
import { ImFilePicture } from "react-icons/im";
import { RiLiveFill } from "react-icons/ri";
import { FaRegSmile } from "react-icons/fa";
const Mindtwo = () => {
  return (
    <div className='i'>
        <div className="">
            <div className="mindtext">
                <img className='flex1'src="https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <input className='flex2'type="text" placeholder="What's on your mind?" />
            </div>
            <div className="mindbutton">
                    <div className="icon live">
                        <i ><RiLiveFill /></i>
                        <p >Live video</p>
                    </div>
                    <div className="icon photo">
                        <i><ImFilePicture /></i> 
                        <p>Photo/video</p>
                    </div>
                    <div className="icon feeling">
                        <i><FaRegSmile /></i>
                        <p>Feeling/activity</p> 
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Mindtwo