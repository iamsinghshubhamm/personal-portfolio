// import React from 'react'
// import teddybear from './images/teddybear.png'
// import aboutimage from './images/aboutimage.jpg'
// import Skiils from '../Components/Skiils'
// import { Link } from 'react-router-dom'

// const About = () => {
//   return (
//     <>
//     <div className='flex flex-col mx-auto justify-center md:flex-row bg-violet-100 p-3 md:h-[100vh] items-center'>
//       <div className='w-full md:w-1/2 flex items-center justify-center'>
//       {/* w-[250px] h-[350px] */}
//         <div className='w-11/12 rounded-md about-container'>
//           <img src={aboutimage} className='aboutimg' />
//         </div>



//       </div>
//       <div className='w-full md:w-1/2 flex flex-col gap-5 items-center'>
       
//        <h1 className='text-4xl text-gray-700 font-bold  border-gray-800 inline-block py-2'>About me</h1>
//         <p className='w-11/12 text-[1.2rem]  text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda unde aperiam autem nobis deleniti iste similique est, modi, quibusdam provident suscipit! Nesciunt provident dolor repellat asperiores eum eius, assumenda soluta aperiam, deserunt, corrupti voluptatem! Numquam, amet consequatur! Tenetur pariatur, ab quam nesciunt beatae recusandae porro consequatur autem iure minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, distinctio alias? Reiciendis cum vero laborum repellat hic ipsam numquam cumque.</p>
//         <Link to={'/contact'} className='w-[9rem] text-center bg-violet-700 text-gray-50 text-md px-5 py-2 rounded-md shadow-md shadow-violet-400 my-5 hover:bg-violet-900 inline-block'>Hire me</Link>
       
//       </div>
      

     
//     </div>
    
    
//     </>
    
//   )
// }

// export default About


import React from 'react';
import teddybear from './images/teddybear.png';
import aboutimage from './images/aboutimage.jpg';
import Skiils from '../Components/Skiils';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className='flex flex-col mx-auto justify-center md:flex-row bg-violet-100 p-3 md:h-[100vh] items-center'>
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <div className='w-11/12 md:w-3/4 lg:w-1/2 rounded-md about-container'>
            <img src={aboutimage} className='aboutimg w-full h-full rounded-md' alt='About Me' />
          </div>
        </div>
        <div className='w-full md:w-1/2 flex flex-col gap-5 items-center'>
          <h1 className='text-4xl text-gray-700 font-bold border-gray-800 inline-block py-2'>
            About me
          </h1>
          <p className='w-11/12 md:w-full text-[1.2rem] text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut assumenda unde aperiam
            autem nobis deleniti iste similique est, modi, quibusdam provident suscipit! Nesciunt
            provident dolor repellat asperiores eum eius, assumenda soluta aperiam, deserunt,
            corrupti voluptatem! Numquam, amet consequatur! Tenetur pariatur, ab quam nesciunt
            beatae recusandae porro consequatur autem iure minus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Minima, distinctio alias? Reiciendis cum vero laborum
            repellat hic ipsam numquam cumque.
          </p>
          <Link
            to={'/contact'}
            className='w-[9rem] text-center bg-violet-700 text-gray-50 text-md px-5 py-2 rounded-md shadow-md shadow-violet-400 my-5 hover:bg-violet-900 inline-block'
          >
            Hire me
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
