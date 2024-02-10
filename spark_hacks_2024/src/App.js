import React from "react"
import './App.css'

import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.js"
import ContactUs from "./pages/ContactUs.js"
import Events from "./pages/Events.js"
import StudentOrgs from "./pages/StudentOrg.js"
import Mentoring from "./pages/Mentoring.js"

// import Pricing from "./pages/Pricing"
// import Home from "./pages/Home"
// import About from "./pages/About"
// import { Route, Router, Routes } from "react-router-dom"
import './App.css'; 
import './pages/Chatpage.css';
import Chatbot from './pages/Chatpage.js'; 


function App() {
  return (


    <div>
      <div className = "chatbot-container">
      <Chatbot
      
      />
      </div>

      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/contact-us' exact element={<ContactUs/>}></Route>
          <Route path='/new-events' exact element={<Events/>}></Route>
          <Route path='/mentoring' exact element={<Mentoring/>}></Route>
          <Route path='/student-orgs' exact element={<StudentOrgs/>}></Route>
        </Routes>
      </Router>

      
    </div>

    

    


  );
}

export default App

