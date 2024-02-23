import React from 'react'
import teddybear from './images/teddybear.png'
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import About from './About';
import Footer from '../Components/Footer';
import Skills from '../Components/Skiils';
import ServiceCard from '../Components/Service';
import Timeline from '../Components/Timeline';
import Project from './Project';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='flex flex-col border w-full md:flex-col lg:flex-row h-[100vh] p-2 gap-2 items-center '>
        <div className='bg-violet-300 lg:w-1/2 flex justify-center '><img className='teddy-bear md:w-[350px] md:h-[400px]' src={teddybear} alt="" width={240} height={240} /></div>
        {/* <a href="http://www.freepik.com">Designed by brgfx / Freepik</a> */}
        <div className='bg-violet-100 rounded-full lg:w-1/2 flex justify-center items-center flex-col w-[500px] h-[500px] '>
          <div>
            <div className='text-3xl text-blue-600 font-semibold border-b-4 border-blue-800 inline-block py-2 '>Bonjour,</div>
            <div className='text-6xl text-blue-900 font-bold my-2'>I'm <span className='text-violet-700'>Shubh</span></div>
            <div className='text-md text-gray-500'>MERN Stack Developer</div>
            <button className='bg-violet-700 text-gray-50 text-md px-5 py-2 rounded-md shadow-md shadow-violet-400 my-5 hover:bg-violet-900'><Link to={'/contact'}>Hire me</Link></button>
            <div className='flex gap-7 text-[30px] font-bold'>
              <CiLinkedin className='hover:text-cyan-400 duration-200' />
              <FaInstagram className='hover:text-cyan-400 duration-200' />
              <CgMail className='hover:text-cyan-400 duration-200' />
              <FaGithub className='hover:text-cyan-400 duration-200' />

            </div>
          </div>


        </div>
      </div>
      <About />
      <Skills />

      <ServiceCard />
      <Project />
      <Timeline/>
      <Footer />
    </div>
  )
}

export default Home
