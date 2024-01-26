import { useState, createContext } from 'react'

import Navbar from './components/navbar/Navbar'
import Mind from './components/MindBox/Mind'
import AddStory from './components/AddStoryBox/AddStory'
import Post from './components/PostUser/Post'

import './App.css'
//data
import { Data } from './DataUser/DataUser'
// import ImageSlider from './components/slider/slider'
import NavLift from './components/NavLeft/NavLeft'
import NavRight from './components/NavRight/NavRight'
import Mindtwo from './components/MindBox/Mindtwo'
// import SliderComponent from './components/slider/slider'
export const DataUser = createContext()



function App() {


  return (
    <DataUser.Provider value={Data}>

        <div className="size">
         <header>
            <Navbar/>
         </header>   
    
          <div className="layoutmain">

            <div className="contentlift">
              <NavLift/>
            </div>
            <div className="contentmain">
              <Mind/>
              <AddStory/>
              <Mindtwo/>
              <Post/>
            </div>
            <div className="contentright">
              <NavRight/>
            </div>
          </div>


        </div>
           


        
    </DataUser.Provider>
  )
}

export default App





