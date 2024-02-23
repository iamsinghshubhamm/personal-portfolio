import React from 'react'

const Timeline = () => {
  return (
    <div className='w-full mx-auto flex flex-col justify-between items-center border  bg-violet-950'>
        <div className='w-full md:w-1/2 border-red-700 flex flex-col justify-center items-center my-6 transition-all duration-200 ease'>
            <div className='text-4xl text-yellow-400 font-sans border-b-4 border-yellow-400 font-bold py-2 my-6'>Education</div>
            <div className='full gap-2 flex flex-col justify-start border-l-2 border-t-2 border-dashed rounded-lg divide-dashed border-yellow-200 py-7 px-2 hover:text-yellow-400 '>
                <div className='text-xl '>2016 - 2018</div>
                <div className='text-3xl font-semibold'>Senior Secondary </div>
                <div>Completed my senior secondary education from Rajendra prasand singh school</div>
            </div>
            <div className='full gap-2 flex flex-col justify-start border-r-2 border-t-2 border-dashed rounded-lg divide-dashed border-yellow-200  py-7 pr-2 hover:text-yellow-400 '>
                <div className='text-xl '>2018 - 2020</div>
                <div className='text-3xl font-semibold'>Higher Secondary </div>
                <div>Completed my Higher secondary education from Rajendra prasand singh school</div>
            </div>
            <div className='full gap-2 flex flex-col justify-start border-t-2 border-l-2 border-dashed rounded-lg divide-dashed border-yellow-200  py-7 px-2 hover:text-yellow-400'>
                <div className='text-xl  '>2020 - 2023</div>
                <div className='text-3xl font-semibold'>Bachelor's Degree </div>
                <div>Completed my Bachelor's degree from Nalanda College Patliputra University</div>
            </div>
            <div className='full gap-2 flex flex-col justify-start border-t-2 border-r-2 border-b-2 border-dashed rounded-lg divide-dashed border-yellow-200  py-7 px-2 hover:text-yellow-400'>
                <div className='text-xl'>Present MCA</div>
                <div className='text-3xl font-semibold'>Jain University Banglore </div>
                <div>I am currently enrolled in a Master's in Computer Applications (MCA) program</div>
            </div>
           
        </div>
    </div>
  )
}

export default Timeline
