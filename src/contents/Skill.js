import React , { Component } from 'react'

class Skills extends Component {
    
constructor(props)  {
    super(props);

    this.state = {
        'myskills': ['HTML','CSS','JAVASCIRPT','REACTJS','PHP','SQL',],
        'designSkills': ['ADOBE PHOTOSHOP','ADOBE XD','FIGMA','ADOBE DREAMWEVER','UX/UI'],
        //Programming Skill
        //Front-End
        'frontEndSkills' : ['HTML','CSS','REACTJS','JAVASCRIPT'],
        //Back-End
        'backEndSkills' : ['NODEJS','PHP','SQL','JAVASCRIPT'],
        //Others
        'others' : ['C','C++','JAVA','Python']

    }
}

    render()    {
        return(
            <div className='condiv skills'>
                <h1 className='subtopic_skill'>PROGRAMMING SKILLS</h1>
                <h2 className='subtopic_subskill'>Front-End</h2>
                <ul>
                    {this.state.frontEndSkills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>
                
                <h2 className='subtopic_subskill'>Back-End</h2>
                <ul>
                    {this.state.backEndSkills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>

                <h2 className='subtopic_subskill'>Others</h2>
                <ul>
                    {this.state.others.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>

                <h1 className='subtopic_skill'>DESIGN SKILLS</h1>
                <ul>
                    {this.state.designSkills.map((value) => {
                        return <li>{value}</li>
                    })}
                </ul>

            </div>
        )
    }
}

export default Skills