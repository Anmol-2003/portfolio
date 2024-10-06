import React, { useEffect, useState } from 'react'
import './Header.css'
const Header = () => {
    const [currPage, setCurrPage] = useState("all"); 
    const moveToSection = (sectionName) => {
        const section = document.getElementById(sectionName);
        console.log(section);
        section.scrollIntoView({'behavior' : "smooth"});
        setCurrPage(prev=>sectionName);
    }

    const handleScroll = () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect(); 
            if (rect.top >=0 && rect.top < window.innerHeight * 0.5){
                setCurrPage(section.id);
            }
        })
    }
    // Below useEffect will be called whenever the 'scroll' event is delivered to the target. 

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); 
        }; 
    }, [])
    const resumeLink = "https://drive.google.com/file/d/1hzl4EzAVptk8HVXgsTZLLsbViVSW5ex4/view?usp=sharing"
    return (
        <div className='header'>
            <div className="header-content">
                <div>
                    <p className='initial'>AB</p>
                </div>
                <div className='utilities'>
                    <div className="nav-items">
                        <ul>
                            <li onClick={()=>moveToSection("about")} className={currPage === "about" ? "active" : "inactive"}>About</li>
                            <li onClick={()=>moveToSection("projects")} className={currPage === "projects" ? "active" : "inactive"}>Projects</li>
                            <li onClick={()=>moveToSection("experience")} className={currPage === "experience" ? "active" : "inactive"}>Experience</li>
                            <li onClick={()=>moveToSection("contact")} className={currPage === "contact" ? "active" : "inactive"}>Contact</li>
                        </ul>
                    </div>
                    <div className="resume-download">
                        <button onClick={()=>{
                            window.open(resumeLink, '_blank')
                        }}>
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header