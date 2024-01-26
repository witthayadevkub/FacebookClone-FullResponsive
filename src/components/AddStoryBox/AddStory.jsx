import React,{useState , useContext} from 'react'
import { IoIosAddCircle } from "react-icons/io";
import './AddStory.css'


import { DataUser } from '../../App';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";


const AddStory = () => {

    const userInfo = useContext(DataUser)
    const [slider, setSlider] = useState(0)
    const transform = slider*-30

    
    const handleNext = () => {
      setSlider((prevIndex) => (prevIndex + 1) % (userInfo.length))
    }

    const handlePrev = () => {
      if(slider <= 0) {
          setSlider(0)
        }else{
          setSlider((prevIndex) => (prevIndex - 1))
        }
      
    
    }
  
  console.log(slider,transform)

  const translate ={
      transform: `translateX(${transform}%)`,
      transition: 'transform 0.3s ease-in-out'
    }

return (
    <div className="control" >
      
        
        <div>
          <div className="boxstory" style={translate}>
            
                <div className="addyour story">
                     
                    <div className="img">      
                    </div>

                    <div className="add">
                    <i><IoIosAddCircle /></i>

                    <span>Add to story</span>
   
                     
                    </div>
                    
                </div>

               
                    {userInfo.map((story, index ) => (
                        
                        <div key={index+1} className="other story">

                            <div className="otherimg">
                                <img src={story.userphoto} alt={story.name} />
                            </div>

                           
                            <p id={index+1}>{story.name}</p>
                            <img className='storyphotoback' src={story.storyImg} alt={story.name} />
                        </div>
                    ))}
               
            
        </div>
        </div>
        
        {slider != 0 && <button onClick={handlePrev} className='Prev'><i><FaAngleLeft /></i></button>}
        {slider != 2 && <button onClick={handleNext} className='Next'><i><FaAngleRight /></i></button>}
    
    </div>
  )
}

export default AddStory