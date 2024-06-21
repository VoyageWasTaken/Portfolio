import React from 'react'
import './About.css'


import javascript from '../../assets/javascript.png'
import php from '../../assets/php.png'
import react from '../../assets/reactjs.png'
import sql from '../../assets/sql.jfif'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>Expertise</h1>
             
            </div>
            <div className="about-sections">
                <div className="Javascript">
                    <img src={javascript} width={"300px"} height={"350px"}/>
                    </div>
                    <div className="PHP">
                    <img src={php} width={"300px"} height={"350px"}/>
                    </div>
                    <div className="ReactJS">
                    <img src={react} width={"300px"} height={"350px"}/>
                    </div>
                    <div className="SQL">
                    <img src={sql} width={"300px"} height={"350px"}/>
                    </div>

                </div>
                <div className="about-right">
                  
                 
                     <div className="about-skill">
                        <div className="about-skills">
                            
                        </div>
                     </div>
                </div>
            </div>
          
           
       
    )
}

export default About