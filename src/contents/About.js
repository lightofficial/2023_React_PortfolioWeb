import React , { Component } from 'react'
import profilepic from '../img/profile.jpg'


class About extends Component   {
    render()    {
        return(
            <div className='condiv about'>
                <h1 className='subtopic'>About me</h1>
                <img src={profilepic} className='profilepic' alt=""/>
                <h3>Hi, I am Thanat Prompiriya</h3>
                <p>KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</p>
            </div>
        )
    }
}

export default About
