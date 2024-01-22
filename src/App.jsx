import { useState, createContext } from 'react'

import Navbar from './components/navbar/Navbar'
import Mind from './components/MindBox/Mind'
import AddStory from './components/AddStoryBox/AddStory'
import Post from './components/PostUser/Post'

import './App.css'
//data
import { Data } from './DataUser/DataUser'
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
              content-lift
            </div>
            <div className="contentmain">
              <Mind/>
              <AddStory/>
              <Post/>
            </div>
            <div className="contentright">
              content-right
            </div>
          </div>


        </div>
           
        

        
    </DataUser.Provider>
  )
}

export default App
