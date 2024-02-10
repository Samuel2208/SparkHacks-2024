import React from 'react';
import '../App.css';


function Mentoring() {
  return (
    <div className="mentoring">
      <video className="video-background" autoPlay muted loop>
        <source src="flickeringstar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="mentoring-container">
        <h2 className="mentoring-heading">Mentoring</h2>
        <p className="mentoring-paragraph">
          UIC offers various mentoring programs where you can be successful during and after your time at UIC. Resources like one on one advising, clubs, workshops, and other events create opportunities for students to have guidance throughout the semester.
          Below are some links that the University offers depending on major. 
          <a href="https://ecc.uic.edu/mentoring-program-2/" className="mentorship-link">COE mentorship program</a>
          <a href="https://lasganas.uic.edu/initiatives/mentoring-con-ganas/" className="mentorship-link">L@S GANAS</a>
          <a href="https://aarcc.uic.edu/programs/asian-american-mentor-program/" className="mentorship-link">AAMP</a>
        </p>
      </div>
    </div>
  );
}

export default Mentoring;
