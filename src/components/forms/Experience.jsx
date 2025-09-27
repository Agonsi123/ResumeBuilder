import React from 'react'
import { useState } from 'react'
import Navbar from '../Navbar';
import Button from '../Button';

const Experience = () => {
  const [formData, setFormData] = useState({
        companyName:'',
        designation: '',
        startDate: '',
        endDate: '',
        workDescription: '',
        achievements: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        alert('form submitted successfully');
        // console.log(formData);
    };  
  return (
    <div className='flex flex-col gap-2 h-screen bg-gradient-to-r from-[#23e27c] to-[#1369b9]'>
        <h1 className='block text-center w-full text-[2rem] md:text-[3rem] px-6 font-bold bg-white mt-3 text-transparent bg-clip-text'>Resume Builder</h1>
        <Navbar />
        <div className='w-full bg-[#1f1f1f] flex items-center shadow-lg p-8 md:max-w-lg md:mx-auto'>
            
            <form onSubmit={handleSubmit} className="mb-4 md:flex md:flex-wrap md:justify-between">
                
                <div className='flex flex-col mb-4 w-[18.6rem] md:w-1/2'>
                    <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Company Name</label>
                    <input className=' rounded py-2 px-3 text-[12px] text-grey-darkest' type="text" name='companyName' value={formData.companyName} onChange={handleChange}
                    placeholder='Name of your company' />
                </div>
                <div className='flex flex-col mb-4 w-full md:w-1/2 md:ml-[15.1rem] md:mt-[-5.5rem]'>
                    <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Designation</label>
                    <input className=' rounded py-2 px-3 text-[12px] text-grey-darkes' type="text" name='designation' value={formData.designation} onChange={handleChange}
                    placeholder='e.g product manager' />
                </div>
                <div className='flex flex-col mb-4 w-[18.6rem] md:w-1/2'>
                    <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Start Date</label>
                    <input className=' rounded py-2 px-3 text-[12px] text-grey-darkest' type="date" name='startDate' value={formData.startDate} onChange={handleChange}
                    placeholder='select date' />
                </div>
                <div className='flex flex-col mb-4 w-[18.6rem] md:w-1/2 md:ml-[15.1rem] md:mt-[-5.5rem]'>
                    <label className='mb-2 font-bold md:text-lg text-grey-darkest'>End Date</label>
                    <input className=' rounded py-2 px-3 text-[12px] text-grey-darkest' type="date" name='endDate' value={formData.endDate} onChange={handleChange}
                    placeholder='slect date' />
                </div>
                <div className='flex flex-col mb-4 w-full md:w-1/2'>
                    <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Work Description</label>
                    <textarea className=' rounded py-6 px-3 text-[12px] text-grey-darkest' name='workDescription' value={formData.workDescription} onChange={handleChange} placeholder='List what you do' />
                </div>
                <div className='flex flex-col mb-4 w-full md:w-1/2 md:ml-[15.1rem] md:mt-[-8.7rem]'>
                    <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Achievements</label>
                    <textarea className=' rounded py-6 px-3 text-[12px] text-grey-darkest' name='achievements' value={formData.achievements} onChange={handleChange} placeholder='List your achievemnts' />
                </div>
                <Button
                    text='Save'
                />
                
            </form>
        </div>
    </div>
  )
}

export default Experience
