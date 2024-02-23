import React from 'react'
import { useLocation } from 'react-router-dom';

const Project = () => {
  const location = useLocation();
  const isProjectPage = location.pathname === '/project'
  return (
    <div className={`w-full flex-wrap gap-7 py-10 flex justify-center bg-yellow-400 px-10 ${isProjectPage ? 'h-screen' : 'h-max'}`}>

        <div className='box p-5 text-center shadow-sm shadow-gray-600'>
            <div className='text-white text-xl font-semibold py-4'>StudyRelief using MERN </div>
            <div className='text-[1.1rem] text-gray-400 font-medium pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptates eum laudantium odio animi tempore expedita, illo, consectetur quis voluptatibus labore! Repellendus commodi aliquam, exercitationem a eos qui reprehenderit voluptas?</div>
            <div className='w-max bg-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-gray-50'><button>Source Code</button></div>
        </div>
        <div className='box p-5 text-center shadow-sm shadow-gray-600'>
            <div className='text-white text-xl font-semibold py-4'>StudyRelief using MERN </div>
            <div className='text-[1.1rem] text-gray-400 font-medium pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptates eum laudantium odio animi tempore expedita, illo, consectetur quis voluptatibus labore! Repellendus commodi aliquam, exercitationem a eos qui reprehenderit voluptas?</div>
            <div className='w-max bg-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-gray-50'><button>Source Code</button></div>
        </div>
        <div className='box p-5 text-center shadow-sm shadow-gray-600'>
            <div className='text-white text-xl font-semibold py-4'>StudyRelief using MERN </div>
            <div className='text-[1.1rem] text-gray-400 font-medium pb-10'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, voluptates eum laudantium odio animi tempore expedita, illo, consectetur quis voluptatibus labore! Repellendus commodi aliquam, exercitationem a eos qui reprehenderit voluptas?</div>
            <div className='w-max bg-yellow-400 px-3 py-1 rounded-lg hover:bg-yellow-500 hover:text-gray-50'><button>Source Code</button></div>
        </div>
       
        
    </div>
  )
}

export default Project
