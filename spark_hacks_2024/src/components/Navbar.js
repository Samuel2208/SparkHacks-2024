import React, {useState} from 'react'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'

function Navbar(){
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return(
        <>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    StudentSphere  <i className='fab fa-firstdraft'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click?'fas fa-times': 'fas fa-bars'}/>

                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>

                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}>
                        {/* Services
                        <i className='fas fa-caret-down'/> */}
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Services
                            <i className='fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>

                    {/* <li className='nav-item'>
                        <Link to='/chat' className='nav-links' onClick={closeMobileMenu}>
                            Chat
                        </Link>
                    </li> */}
                    
                    <li className='nav-item'>
                        <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    {/* <Button/> */}
                </ul>
            </nav>
        </>
    )
}

export default Navbar;


// import { Link, useMatch, useResolvedPath } from "react-router-dom"
// import "./Navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         Site Name
//       </Link>
//       <ul>
//         <CustomLink to="/pricing">Pricing</CustomLink>
//         <CustomLink to="/about">About</CustomLink>
//       </ul>
//     </nav>
//   )
// }

// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end: true })

//   return (
//     <li className={isActive ? "active" : ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }


// import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';
// import { Button } from './Button';//'../Button'

// // import './Navbar.css'
// import "./Navbar.css";

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [button, setButton] = useState(true);

//     const handleClick = ()=>setClick(!click);
//     const closeMobileMenu = ()=>setClick(false);

//     const showButton = ()=>{
//         if(window.innerWidth <= 960){
//             setButton(false);
//         }else{
//             setButton(true);
//         }
//     };

//     useEffect(()=>{
//         showButton();
//     }, []);

//     window.addEventListener('resize', showButton);

//   return (
//     <>
//     <nav className="navbar">
//         <div className="navbar-container">
//             <Link to ="/" className = "navbar-logo" onClick={closeMobileMenu}>
//                 UStudent 
//                 <i className="fab fa-typo3" />
//             </Link>
//             <div className='menu-icon' onClick={handleClick}>
//                 <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
//             </div>
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                 <li className='nav-item'>
//                     <Link 
//                         to = '/' 
//                         className='nav-links' 
//                         onClick={closeMobileMenu}
//                     >
//                         Home
//                     </Link>
//                 </li>

//                 <li className='nav-item'>
//                     <Link 
//                         to = '/Chat' 
//                         className='nav-links' 
//                         onClick={closeMobileMenu}
//                     >
//                         Chat
//                     </Link>
//                 </li>

//                 <li className='nav-item'>
//                     <Link 
//                         to = '/ContactUs' 
//                         className='nav-links' 
//                         onClick={closeMobileMenu}
//                     >
//                         Contact Us
//                     </Link>
//                 </li>

//                 <li>
//                     <Link 
//                         to = '/sign-up' 
//                         className='nav-links-mobile' 
//                         onClick={closeMobileMenu}
//                     >
//                         Sign Up
//                     </Link>
//                 </li>
//             </ul>
//             {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//         </div>
//     </nav>
//     </>
//   )
// }

// export default Navbar



// import React from 'react'
// import './Navbar.css'
// import {Link} from "react-router-dom";

// import logo_light from '../../assets/logo-black.png'
// import logo_dark from '../../assets/logo-white.png'
// import search_icon_light from '../../assets/search-w.png'
// import search_icon_dark from '../../assets/search-b.png'
// import toogle_light from '../../assets/night.png'
// import toogle_dark from '../../assets/day.png'

// // import chatPage from '../../pages/Chatpage'


// const Navbar = ({theme,setTheme}) => {

//   const toogle_mode =()=>{
//     theme === 'light' ? setTheme('dark'):setTheme('light');
//   }



//   return (
//     // <>
//     // <nav className="navbar">
//     //     <div className="navbar-container">
//     //         <ul className="menu">
//     //             <li className='nav-item'>
//     //                 <Link 
//     //                     to = '/' 
//     //                     className='nav-links' 
//     //                 >
//     //                     Home
//     //                 </Link>
//     //             </li>

//     //             <li className='nav-item'>
//     //                 <Link 
//     //                     to = '/Time' 
//     //                     className='nav-links' 
//     //                 >
//     //                     Chat
//     //                 </Link>
//     //             </li>

//     //             <li className='nav-item'>
//     //                 <Link 
//     //                     to = '/RMap' 
//     //                     className='nav-links' 
//     //                 >
//     //                     Contact Us
//     //                 </Link>
//     //             </li>
//     //         </ul>
//     //     </div>
//     // </nav>
//     // </>

//     <div className='navbar'>
//       <image src={toogle_light}/>
//       <image src ={theme ==='light' ? logo_light: logo_dark} alt="" className='logo'/>
//       <nav>
//         <ul>
//           <li className='nav-item'><Link to='/' className='nav_Link'>Home</Link></li>
//           <li className='nav-item'><Link to='/Chat' className='nav_linnk'>Chat</Link></li>
//           <li className='nav-item'><Link to='/ContactUs' className='nav_Link'>Contact Us</Link></li>
//         </ul>
//       </nav>

//       <div className='search-box'>
//         <input type="text" placeholder='Search'></input>
//         <img scr={theme ==='light' ? search_icon_light: search_icon_dark} alt=""></img>
//       </div>

//       <img onClick={()=>{toogle_mode()}} src={theme ==='light' ? 
//       toogle_light: toogle_dark} alt="" className='toogle-icon'></img>
      
//     </div>
//   )
// }

// export default Navbar
