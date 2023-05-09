import React , { Component } from 'react'
import Social from '../component/Social'
//import profilepic from '../img/profile.jpg'
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return(
            <div className="condiv home">
                <img src="https://scontent.fbkk22-1.fna.fbcdn.net/v/t39.30808-6/283494461_1884962491698739_1740577201832070874_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGUbJWi-Z9JHQ5hyOtxwoPrjma2Xi0gMUeOZrZeLSAxR-yXKaZ7MrI83hy0F5iV4BChN0NkXzOr6k6BXYop5bjZ&_nc_ohc=re9J7H7MCy4AX-SvigM&_nc_zt=23&_nc_ht=scontent.fbkk22-1.fna&oh=00_AfCR70mkCAOutkYGRZrnukxhxrkNymccmh7IKIA2qPoSMw&oe=645E5492" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Thanat', 'I am Web Developer']} speed={90} eraseDelay={400} className='typingeffect'></ReactTypingEffect>
                <Social/>
            </div>
        )
    }
}

export default Home