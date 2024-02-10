import React from 'react'
import '../App.css'
import './Events.css'

function Events() {
  return (
    <div className='events'>
    <h1> 
    <label  id='descStu'>Events</label>
    <p id='descriptionE'>
        In this page we will be posting all 
        the major events happening this month 
        on campus grounds and providing extra 
        information about how to sign up or RSVP 
        to these events.Events will be hosted through 
        the website where you can meet and interact 
        with other classmate in your school  </p>
    </h1>
    <h2 id='sitePrev'>
        <iframe class="visual" height="400px" width="500px" src="https://today.uic.edu/events/"/>
      </h2>
    </div>
  )
}

export default Events
