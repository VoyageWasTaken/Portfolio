import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import underline from '../../assets/whale.png'

const Navbar = () => {

    const [menu,setMenu] = useState("home");

    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' offcet={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p>{menu==="home"?<img src={underline}/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offcet={50} href='#about'><p onClick={()=>setMenu("about")}>Expertise</p> {menu==="about"?<img src={underline}/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offcet={50} href='#skill'><p onClick={()=>setMenu("skill")}>Skills</p> {menu==="skill"?<img src={underline}/>:<></>}</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offcet={50} href='#mywork'><p onClick={()=>setMenu("mywork")}>Project</p> {menu==="mywork"?<img src={underline}/>:<></>}</AnchorLink></li>
            </ul>
         
        </div>
    )
}

export default Navbar