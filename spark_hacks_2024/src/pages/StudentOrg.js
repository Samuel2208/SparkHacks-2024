import React from 'react'
import '../App.css'
import './StudentOrg.css'

function StudentOrg() {
  return (
    <div className='student-orgs'>
      <h1> 
      <label  id='descStu'>Student Orgs</label>
      <p id='description'>Student Orgs at UIC give students the opportunity to take part in events in which they can be part of various communities. 
      With over 400 student-led organizations, this allows students to meet people with the same or various backgrounds, 
      gain more resources for their education, or to partake in events that truly matter to them. 
      These organizations also create safe spaces and more relaxed environments from the typical classroom spaces.
      </p>
      </h1>
      <h2 id='sitePrev'>
        <iframe class="visual" height="400px" width="500px" src="https://ahs.uic.edu/events"/>
      </h2>
    </div>
  )
}

export default StudentOrg
