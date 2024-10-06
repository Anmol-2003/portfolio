import React from 'react'
import './Skill.css'
const Skill = ({name, image}) => {
  return (
    <div className='skill'>
        <img src={image} alt="" className="skill-icon" />
        <p className="skill-name">{name}</p>
    </div>
  )
}

export default Skill