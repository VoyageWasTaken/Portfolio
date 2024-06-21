import React from 'react'
import './MyWork.css'
import Ass from '../../assets/Assets.png'


const MyWork = () => {
    return(
        <div id='mywork' className='mywork'>
            <div className="mywork-title">
                <h1>Projects</h1>

            </div>
            <div className="mywork-container">
               <img src={Ass} width={"600px"} height={"300px"}/>

            </div>
           
        </div>
    )
}

export default MyWork