import React , { Component } from 'react'

import Social from '../component/Social'

class Contact extends Component {
    render()    {
        return(
            <div className='condiv'>
                <h1 className='subtopic'>Contact Me</h1>
                <h3>Email : lightofficialstudio@gmail.com</h3>
                <h3>Instagram : @g.guily</h3>
                <Social/>
            </div>
        )
    }
}

export default Contact