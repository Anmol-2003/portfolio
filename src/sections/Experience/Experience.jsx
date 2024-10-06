import React from 'react'
import './Experience.css'
import { assets } from '../../assets/assets'
const Experience = () => {
    return (
        <section id='experience'>
            <div className="experience">
                <div className="title">
                    <p>My work experience</p>
                </div>
                <div className="experience-list">
                    <ul>
                        <li className='experience-details'>
                            <div className='experience-details-container'>
                                <img src={assets.nirwana} alt="" className="icon" />
                                <div className="details">
                                    <p className='title'>
                                        Nirwana.ai
                                    </p>
                                    <p className="duration">June 2024 - October 2024</p>
                                    <p className='desc'>Developed and deployed computer vision models (SAM, Mask-RCNN, Yolo) on AWS for efficient floorplan analysis, enhancing
                                        model APIs for scalable cloud integration.
                                        Optimized image analysis code, reducing time complexity from exponential to quadratic, significantly accelerating inference
                                        performance.</p>
                                </div>
                            </div>
                        </li>
                        <li className='experience-details'>
                            <div className='experience-details-container'>
                                <img src={assets.goldsmith} alt="" className="icon" />
                                <div className="details">
                                    <p className='title'>
                                       Goldsmiths University 
                                    </p>
                                    <p className="duration">
                                    November 2023 - February 2024
                                    </p>
                                    <p className='desc'>Mapped MELD multi-modal dataset to MBTI personality traits to classify a person’s personality based on audio and
                                        text. Achieved 95.8% accuracy. Developed an ensemble of Random Forest Classifier and RoBERTa to classify MBTI classes (16). Combined the logits from
                                        individual modalities of audio and text into a custom feed forward neural network to classify the input into MBTI trait.</p>
                                </div>
                            </div>
                        </li>
                        <li className='experience-details'>
                            <div className='experience-details-container'>
                                <img src={assets.gabbit} alt="" className="icon" />
                                <div className="details">
                                    <p className='title'>
                                       Gabbit Trans Systems Pvt Ltd.
                                    </p>
                                    <p className="duration">
                                    September 2023 - January 2024
                                    </p>
                                    <p className='desc'>Developed the mobile application in Flutter framework and integrated the APIs. Worked in a team to analyze and deliver the client's request within a strict deadline.</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience