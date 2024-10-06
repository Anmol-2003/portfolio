import { useState } from 'react'
import Header from './components/Header/Header'
import About from './sections/About/About'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Experience from './sections/Experience/Experience'

function App() {
  return (
    // the <> </> returns a single fragment as in return statement we can only return one component
    <>
    <Header/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    </>
  )
}

export default App
