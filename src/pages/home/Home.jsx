import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'


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
            <Button text='Start Building' 
            className="btn"
            onClick={handleStart} 
            />
          </div>
        </div>
    </div>
  )
}



export default Home