import React from 'react'
import './Skill.css'
import Computer from '../../assets/Computer.png'
import FrontEnd from '../../assets/FrontEnd.png'
import SpokePerson from '../../assets/SpokePerson.png'
import Document from '../../assets/Document.png'

const Skill = () => {
    return(
   
<div id='skill' className="skill-title">
                <h1>Skills</h1>
           


            <div class="box"></div>
      <div class="box1"></div> 
      <div class="box2"></div> 
      <div class="box3"></div> 

      <div id="Computer">
      <img src= {Computer} alt="me"/>     
      </div>

      <div id="FrontEnd">
      <img src= {FrontEnd} alt="Front"/>     
      </div>

      <div id="SpokePerson">
      <img src= {SpokePerson} alt="Spoke"/>     
      </div>

      <div id="Document">
      <img src= {Document} alt="Document" height="150" width="150"/>     
      </div>

      

      <div class="Para">
        <em>
      <p>Capable of building a website  </p>
      <p>that functions and being aware</p>
      <p>of how it operates</p>
      </em>
      </div>
      
      <div class="front">
        <em>
      <p>Capable to create a simple </p>
      <p>front end design</p>
      </em>
      </div>


      <div class="Man">
        <em>
      <p>Capable to speak infront of </p>
      <p>people with confidence</p>
      </em>
      </div>

      <div class="Docu">
        <em>
      <p> Capable to use Microsoft Word to  </p>
      <p>generate a document and being</p>
      <p>familiar   with its features</p>
      </em>
      </div>
    
        </div>
        
    )
}

export default Skill