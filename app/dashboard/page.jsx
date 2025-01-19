import { UserButton } from '@clerk/nextjs'
import React from 'react'
import AddNewInterview from './_components/AddNewInterview';
import InterviewList from './_components/InterviewList.jsx';
function Dashboard() {
  return (
    <div className=''>
  
      <div className='mt-2 '>
        <h2 className=' text-3xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-fuchsia-900 to-primary animate-magic'>Prepare for Your AI Interview</h2>
        <h2 className='text-gray-300 text-center text-lg p-2' > Set up and begin your AI-powered interview session!</h2>
        <h2 className='text-gray-300 text-center text-lg'> Specify your Preferred Role/Job Position, Job Description/Tech Stack, and Years od experience, then start the mock interview tailored for you.</h2>

      <div className=''>

      <div className='p-4 flex items-center space-x-4 gap-2'>
       <div className='bg-gray-800 border rounded-sm '>
         <button className="flex items-center space-x-2 gap-1  py-2 px-4 rounded-lg ">
         <img src="icons8-web-development-64.png" alt="Web Developer Logo" className="w-9 h-9 rounded-sm" />
         <span className="text-lg font-semibold">Web Developer</span>
         </button>
       </div>

       <div className='bg-gray-800 border rounded-sm'>
          <button className="flex items-center space-x-2 gap-1  py-2 px-4 rounded-lg ">
            <img src="icons8-android-os-48.png" alt="Web Developer Logo" className="w-8 h-8 rounded-sm" />
          <span className="text-lg font-semibold">Anroid developer</span>
          </button>
       </div>

       <div className='bg-gray-800 border rounded-sm '>
          <button className="flex items-center space-x-2 gap-1  py-2 px-4 rounded-lg ">
            <img src="icons8-java-64.png" alt="Web Developer Logo" className="w-8 h-8 rounded-sm" />
          <span className="text-lg font-semibold">Java developer</span>
          </button>
       </div>

       <div className='bg-gray-800 border  rounded-sm'>
          <button className="flex items-center space-x-2 gap-1  py-2 px-4 rounded-lg ">
            <img src="icons8-python.gif" alt="Web Developer Logo" className="w-8 h-8 rounded-sm" />
          <span className="text-lg font-semibold">Python developer</span>
          </button>
       </div>
    </div>


      <div className='p-4 flex items-center space-x-4 gap-2'>

      <div className='bg-gray-800 border rounded-sm '>
      <button className="flex items-center space-x-2 gap-1   py-2 px-4 rounded-lg ">
        <img src="icons8-devops-60.png" alt="Web Developer Logo" className="w-8 h-8 rounded-sm" />
      <span className="text-lg font-semibold">DevOps Engineer</span>
      </button>
      </div>

      <div className='bg-gray-800 border  rounded-sm'>
      <button className="flex items-center space-x-2 gap-1  py-2 px-4 rounded-lg ">
        <img src="mern.png" alt="Web Developer Logo" className="w-8 h-8 rounded-sm" />
      <span className="text-lg font-semibold">Mern stack developer </span>
      </button>
      </div>

      <div className='bg-gray-800 border rounded-sm '>
      <button className="flex items-center space-x-2  gap-1 py-2 px-4 rounded-lg ">
        <img src="icons8-backend-development-64.png" alt="Web Developer Logo" className="w-8 h-8 rounded-sm" />
      <span className="text-lg font-semibold">Backend developer</span>
      </button>
      </div>

      <div className='bg-gray-800 border  rounded-sm'>
      <button className="flex items-center space-x-2 gap-1  py-2 px-4 rounded-lg ">
        <img src="ui.png" alt="Web Developer Logo" className="w-8 h-8 rounded-sm" />
      <span className="text-lg font-semibold">UI/UX Designer</span>
      </button>
      </div>
    </div>
  </div>

    <div className='grid grid-cols-4 md:grid-cols-3 my-5'>
      <AddNewInterview/>
    </div>

    </div>
    {/* Previous Interview List */}
    <InterviewList/>

  </div>
  )
}

export default Dashboard