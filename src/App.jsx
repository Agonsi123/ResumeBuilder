import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import PersonalInfo from './components/forms/PersonalInfo'
import Skills from './components/forms/Skills'
import Experience from './components/forms/Experience'
import Education from './components/forms/Education'
import NotFound from './pages/NotFound'



function App() {
  

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/personalinfo' element={<PersonalInfo />}></Route>
        <Route path='/skills' element={<Skills />}></Route>
        <Route path='/experience' element={<Experience />}></Route>
        <Route path='/education' element={<Education />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      {/* <Navbar /> */}
    

    </>
  )
}

export default App
