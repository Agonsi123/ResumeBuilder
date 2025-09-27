import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const handleStart = () => {
    navigate('./PersonalInfo')
  }
  return (
    <div className='homeStyle'>
        <div className='content'>
          <h1><span>Resume</span> Builder</h1>
          <h2>Make Your Own Resume</h2>
          <h3>It is free</h3>

          <div className=''>
            <button 
            onClick={handleStart}
            className='bg-gradient-to-r from-[#23e27c] to-[#1369b9] hover:bg-[#1369b9] text-white md:text-[1.8rem] mb-4 w-[18.6rem] rounded-lg w-full md:max-w-[15rem] py-4 mt-4' type="submit">Start building</button>
          </div>
        </div>
    </div>
  )
}



export default Home
