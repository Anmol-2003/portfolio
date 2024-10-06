import React, { useEffect, useState } from 'react'
import './Projects.css'

const Projects = () => {

  return (
    <section id='projects'>
        <div className='projects'>
            <p className='project-header-line'>My notable projects</p>
            <div>
              <ul className='projects-list'>
                <li >
                  <div>
                    <p className="project-title">Resumer</p>
                    <p className="project-desc">
                    A website for generating resume based on the given job description. The resume is generated with the help of a sophisticated, 
self-criticizing, <br />AI Agent developed using langgraph. Generated resumes have received an average score of 70 on resume-worded, which is one of the top free resume scoring platform.
Post-processing, the agent automatically populates the selected resume template with the generated content.

                    </p>
                  </div>
                </li>
                <li >
                <div>
                    <p className="project-title">SocioTrackr</p>
                    <p className="project-desc">
                      A web-application to perform analysis on social media profiles based on text, image & videos. <br />
                      Deployed SOTA transformers DeBERTa-V3, RoBERTa on GCP virtual machine for text analysis, combined BLIP with custom logic to perform video transcription. Works on YouTube shorts, Instagram and Reddit, with B2C and B2G business model.
                    </p>
                  </div>
                </li>
                <li > 
                <div>
                    <p className="project-title">BSE Updater</p>
                    <p className="project-desc">
                      A financial notification bot developed using Selenium, Python and Twilio. It performs cron-jobs on BSE website to fetch the latest announcement and extracts insights using RAG Agent. The document vector embeddings were stored in ChromaDB for efficient similarity. <br />
                    </p>
                  </div>
                </li>
              </ul>
            </div>

        </div>
    </section>
    
  )
}

export default Projects