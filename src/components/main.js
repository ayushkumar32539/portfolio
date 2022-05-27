import React from 'react'
import me from "../images/me.jpeg"
import "./main.css"


const Main = () => {
  return (
      <div>
      <div className='navbar'>
          <ul>
              <li><a href="">Home</a></li>
              <li>Achievements</li>
              <li>Projects</li>
              <li>Hobbies</li>
              <li>Contact</li>
          </ul>
      </div>
     <div className='body'>
        <div className='photo'>
            <img className='img' src= {me} alt="me"/>
        </div>
        <div className='intro'>
            <h2>Ayush Kumar</h2>
            <h3>Front-End Developer</h3>
            <h3>NCC Cadet</h3>
        </div>
    </div>
    </div>
  )
}

export default Main