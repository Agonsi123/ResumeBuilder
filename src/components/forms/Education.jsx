import React from "react";
import { useState } from "react";
import Navbar from "../Navbar";
import Button from "../Button";

const Education = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    qualification: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    alert("form submitted successfully");
    // console.log(formData);
  };
  return (
    <div className="flex flex-col gap-2 h-screen bg-gradient-to-r from-[#23e27c] to-[#1369b9]">
      <h1 className="block text-center w-full text-[2rem] md:text-[3rem] px-6 font-bold bg-white mt-3 text-transparent bg-clip-text">
        Resume Builder
      </h1>
      <Navbar />
      <div className="w-full bg-[#1f1f1f] flex items-center shadow-lg p-8 md:max-w-lg md:mx-auto">
        <form onSubmit={handleSubmit} className="mb-4 md:flex md:flex-wrap md:justify-between">
          <div className="flex flex-col mb-4 w-[18.6rem] md:w-1/2">
            <label className="mb-2 font-bold md:text-lg text-grey-600">College/School Name</label>
            <input
              className="rounded py-2 px-3 text-[12px] text-grey-600"
              type="text"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              placeholder="e.g remote"
            />
          </div>
          <div className="flex flex-col mb-4 w-full md:w-1/2 md:ml-[15.1rem]  md:mt-[-5.5rem]">
            <label className="mb-2 font-bold md:text-lg text-grey-600">Qualification</label>
            <input
              className="rounded py-2 px-3 text-[12px] text-grey-600"
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="e.g MSc Geology"
            />
          </div>
          <div className="flex flex-col mb-4 w-full md:w-1/2">
            <label className="mb-2 font-bold md:text-lg text-grey-600">Start Date</label>
            <input
              className="rounded py-2 px-3 text-[12px] text-grey-600"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              placeholder="select date"
            />
          </div>
          <div className="flex flex-col mb-4 w-full md:w-1/2 md:ml-[15.1rem]  md:mt-[-5.5rem]">
            <label className="mb-2 font-bold md:text-lg text-grey-600">End Date</label>
            <input
              className="rounded py-2 px-3 text-[12px] text-grey-600"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              placeholder="slect date"
            />
          </div>
          <Button text="Save" />
          {/* <button className='bg-gradient-to-r from-[#23e27c] to-[#1369b9] hover:bg-[#1369b9] text-white mb-4 w-[18.6rem] rounded-lg md:w-[12.7rem] py-2' type="submit">Save</button> */}
        </form>
      </div>
    </div>
  );
};

export default Education;
