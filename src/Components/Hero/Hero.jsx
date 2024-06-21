import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.png'


const Hero = () => {
    return (
        <div id='home' className='hero'>
            <hr/>
            <img src={profile_img} alt="" />
           <h1>I'm <span>Christian D. Villena Jr</span></h1>
           
           <div class="social-icons">
  


  <a class="social-icon facebook" href="https://www.facebook.com/profile.php?id=100020190641827" target="_blank"><i class="fa fa-facebook-f"></i></a>
  
  <a class="social-icon instagram" href="https://www.instagram.com/christianjr26/" target="_blank"><i class="fa fa-instagram"></i></a>
  
  
  
  </div>
           <div className="hero-action">
            
        

            <div className="hero-resume"><a href="https://drive.google.com/file/d/1uOQXdL6Eh6hRnz0ZP22qT8s4y_qjiXGR/view" target="_blank">Resume</a></div>
           </div>
        </div>
    )
}

export default Hero