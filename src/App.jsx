import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import MyExpertice from './Components/MyExpertiece'
import AboutPage from './Components/AboutPage'
import Projects from "./Components/Projects"
import Testimonials from './Components/Testimonals'
import ContactMe from './Components/ContactMe'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Navbar/>
    <HomePage/>
    <MyExpertice/>
    <AboutPage/>
    <Projects/>
  <Testimonials/>
  <ContactMe/>
  <Footer/>
  
    </>
  )
}

export default App
