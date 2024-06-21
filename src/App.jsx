import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skill from './Components/Skill/Skill'
import MyWork from './Components/MyWork/MyWork'
import Footer from './Components/Footer/Footer'







const App = () => {
  return (
    <div>
      <Navbar/> 
      <Hero/>
     <About/>
     <Skill/>
     <MyWork/>
     <Footer/>
     
    </div>  
  )
}
export default App