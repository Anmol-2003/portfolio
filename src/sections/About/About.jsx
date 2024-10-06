import React from 'react'
import './About.css'
import { assets } from '../../assets/assets'

const About = () => {
  return (
    <section id="about">
        <div className='about'>
            <div className="info-container">
                <div className="text">
                    <h1 className="name">
                        Hi, I'm Anmol Bhardwaj
                    </h1>
                    <p className="about-me">
                        I'm a Backend Developer with extensive knowledge in Artificial Intelligence technologies. <br />Recently started learning React and other frontend frameworks to expand my boundaries.
                        <br />I have the eagerness to learn adn experience new things which keeps me going. <br />Currently in my pre-final year of pursuing Computer Science & enginnering at DTU.
                    </p>
                    <div className="location">
                        <img src={assets.loc_icon} alt="" className="location-icon-img" />
                        <p>Delhi Technological University, Delhi</p>
                    </div>
                    <div className="external-links">
                        <a href='https://github.com/Anmol-2003' target='_blank'>
                            <img src={assets.github_icon} alt="" className="github" />
                        </a>
                        <a href="https://www.linkedin.com/in/anmol-bhardwaj-55374321a/" target='_blank'>
                            <img src={assets.linkedin_icon} alt="" className="linkedin" />
                        </a>
                    </div>
                </div>
                <div className="image">
                    <img src={assets.portfolio_img_1} alt="" className="profile-picture" />
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default About