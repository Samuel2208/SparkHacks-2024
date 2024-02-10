import React from 'react'
import './Home.css'

function Home() {
  return (

    <div className='home'>
      <h1> 
      <label  id='descStu'>About Our Mission</label>
      <p id='description'>We want to create a strong community for students 
            to get notified of events, mentoring, and student 
            organizations where they can find their place in 
            the University community. This website is created 
            for the intent of giving voice to students through 
            different services where they can learn and be included 
            in many University activities across campus. </p>
      </h1>
    </div>

    // <div className='home-container '>
    //     <video src='./videos/contactUs.mp4' autoPlay loop muted />
    //     <h1 className='home'>About our mission</h1>
    //     <p >We want to create a strong community for students 
    //         to get notified of events, mentoring, and student 
    //         organizations where they can find their place in 
    //         the University community. This website is created 
    //         for the intent of giving voice to students through 
    //         different services where they can learn and be included 
    //         in many University activities across campus. </p>
    // </div>
  )
}

export default Home

