import React from 'react'
import './Skills.css'
import { skillset } from '../../assets/assets'
import Skill from '../../components/Skill/Skill'

const Skills = () => {

  return (
    <div className='skills'>
        <p className='top-line'>Skills, Technologies and Frameworks I'm good at.</p>
        <div className="skills-grid">
          {
            skillset.map((item, index)=>{
              return <Skill key={index} image={item.image} name={item.id}/>
            })
          }
        </div>
    </div>
  )
}

export default Skills