import React , { Component } from 'react'
import Widecard from '../component/Widecard'

class Education extends Component {
    render()    {
        return(
            <div className='condiv'>
                <h1 className='subtopic'>My Education</h1>
                <Widecard title="Bachelor’s Degree in Computer Science" Where="KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK" from="2018" to="Present" />
                <Widecard title="Senior High School in Math-Science" Where="BENJAMARACHUTIT SCHOOL" from="2015" to="2018" />

            </div>
        )
    }
}

export default Education