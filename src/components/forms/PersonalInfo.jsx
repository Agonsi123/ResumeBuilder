import React from 'react'
import { useState } from 'react';
import Navbar from '../Navbar';

const PersonalInfo = () => {
    const [formData, setFormData] = useState({
        name: '',
        title: '',
        link: '',
        linkedIn: '',
        email: '',
        phoneNumber:'',
        summary: '',
        objectives: '',
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = () => {
        alert('form submitted successfully');
        // console.log(formData);
    };    
    return (
        <div className='h-screen items-center w-full bg-gradient-to-r from-[#23e27c] to-[#1369b9]'>
            <h1 className='block text-center w-full text-[2rem] md:text-[3rem] p-8 font-bold bg-white text-transparent bg-clip-text'>Resume Builder</h1>
            <Navbar />
            <div className='w-full bg-white flex items-center shadow-lg p-8 md:max-w-lg md:mx-auto'>
                <form onSubmit={handleSubmit} className="mb-4 md:flex md:flex-wrap md:justify-between">
                    <div className='flex flex-col mb-4 w-[18.6rem] md:w-1/2'>
                        <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Name</label>
                        <input className='border py-2 px-3 text-[12px] text-grey-darkest' type="text" name='name' value={formData.name} onChange={handleChange}
                    placeholder='e.g John Doe' />
                    </div>
                    <div className='flex flex-col mb-4 w-full md:w-1/2 md:ml-[15.1rem] md:mt-[-5.5rem]'>
                        <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Title</label>
                        <input className='border py-2 px-3 text-[12px] text-grey-darkest ' type="text" name='title' value={formData.title} onChange={handleChange}
                    placeholder='e.g Frontend Developer' />
                    </div>
                    <div className='flex flex-col mb-4 w-full md:w-1/2'>
                        <label className='mb-2 font-bold md:text-lg text-grey-darkest'>GitHub Link</label>
                        <input className='border py-2 px-3 text-[12px] text-grey-darkest' type="url" name='link' value={formData.link} onChange={handleChange}
                    placeholder='Enter your GitHub profile link' />
                    </div>
                    <div className='flex flex-col mb-4 w-full md:w-1/2 md:ml-[15.1rem] md:mt-[-5.5rem]'>
                        <label className='mb-2 font-bold md:text-lg text-grey-darkest'>LinkedIn Link</label>
                        <input className='border py-2 px-3 text-[12px] text-grey-darkest' type="url" name='linkedIn' value={formData.linkedIn} onChange={handleChange}
                    placeholder='Enter your LinkedIn profile link' />
                    </div>
                    <div className='flex flex-col mb-4 w-full md:w-1/2'>
                        <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Email</label>
                        <input className='border py-2 px-3 text-[12px] text-grey-darkest' type="email" name='email' value={formData.email} onChange={handleChange}
                    placeholder='Enter your email' />
                    </div>
                    <div className='flex flex-col mb-4 w-full md:w-1/2 md:ml-[15.1rem] md:mt-[-5.5rem]'>
                        <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Phone Number</label>
                        <input className='border py-2 px-3 text-[12px] text-grey-darkest' type="tel" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange}
                    placeholder='Enter your phone number' />
                    </div>
                    <div className='flex flex-col mb-4 w-full md:w-1/2'>
                        <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Professional Summary</label>
                        <textarea className='border py-6 px-3 text-[12px] text-grey-darkest' name='summary' value={formData.summary} onChange={handleChange}
                    placeholder='Enter professionl summary' />
                    </div>
                    <div className='flex flex-col mb-4 w-full md:w-1/2 md:ml-[15.1rem] md:mt-[-8.7rem]'>
                        <label className='mb-2 font-bold md:text-lg text-grey-darkest'>Career Objective</label>
                        <textarea className='border py-6 px-3 text-[12px] text-grey-darkest' name='objectives' value={formData.objectives} onChange={handleChange}
                    placeholder='Enter goals & objectives' />
                    </div>
                    <button className='bg-gradient-to-r from-[#23e27c] to-[#1369b9] hover:bg-[#1369b9] text-white mb-4 w-[18.6rem] rounded-lg md:w-[12.7rem] py-2' type="submit">Save</button>
                    
                </form>
            </div>
        </div>
    )
}

export default PersonalInfo
