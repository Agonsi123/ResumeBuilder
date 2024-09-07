import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar';

const Skills = () => {
  const [formData, setFormData] = useState({
        academicSkills: '',
        nonacademicSkills: '',
        certificates: '',
        tools: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        alert('form submitted successfully');
        console.log(formData);
  };
  return (
    <div className='h-screen bg-gradient-to-r from-[#23e27c] to-[#1369b9]'>
        <h1 className='block text-center w-full text-[2rem] md:text-[3rem] p-8 font-bold bg-white text-transparent bg-clip-text'>Resume Builder</h1>
        <Navbar />
        <div className='w-full bg-white flex items-center shadow-lg p-8 md:max-w-lg md:mx-auto'>
            <form onSubmit={handleSubmit} className="mb-4 md:flex md:flex-wrap md:justify-between">
                <div className='flex flex-col mb-4 w-[18.6rem] md:w-1/2'>
                    <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Academic Skills</label>
                    <textarea className='border py-6 px-3 text-[12px] text-grey-darkest' name='academicSkills' value={formData.academicSkills} onChange={handleChange} placeholder='List your skills e.g HTML' />
                </div>
                <div className='flex flex-col mb-4 w-[18.6rem] md:w-1/2 md:ml-[15.1rem] md:mt-[-8.7rem]'>
                    <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Non-Academic Skills</label>
                    <textarea className='border py-6 px-3 text-[12px] text-grey-darkest' name='nonacademicSkills' value={formData.nonacademicSkills} onChange={handleChange} placeholder='e.g communication skills' />
                </div>
                <div className='flex flex-col mb-4 w-[18.6rem] md:w-1/2'>
                    <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Certifications</label>
                    <textarea className='border py-6 px-3 text-[12px] text-grey-darkest' name='certificates' value={formData.certificates} onChange={handleChange} placeholder='Enter trainings' />
                </div>
                <div className='flex flex-col mb-4 w-[18.6rem] md:w-1/2 md:ml-[15.1rem] md:mt-[-8.7rem]'>
                    <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Tools</label>
                    <textarea className='border py-6 px-3 text-[12px] text-grey-darkest' name='tools' value={formData.tools} onChange={handleChange} placeholder='Enter your tools e.g Figma' />
                </div>
                <button className='bg-gradient-to-r from-[#23e27c] to-[#1369b9] hover:bg-[#1369b9] text-white mb-4 w-[18.6rem] rounded-lg md:w-[12.7rem] py-2' type="submit">Save</button>
                
            </form>
        </div>
    </div>
  )
}

export default Skills
