import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skills = () => {
  const skills = [
    "tailwind",
    "js",
    "react",
    "redux",
    "mongodb",
    "nodejs",
    "express",
    "html",
    "css",
    "bootstrap",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5",
    autoplay: true,
    autoplaySpeed: 2000, // Adjust the speed as needed
  };

  return (
    <div className='h-[250px]'>
    <Slider {...settings} className='w-11/12 mx-auto rounded-md border-b-cyan-200 bg-violet-50 py-8 my-4'>
    
      {skills.map((skill, index) => (
        <div key={index} className='flex flex-col items-center'>
          <img
            src={`https://skillicons.dev/icons?i=${skill}`}
            height='20'
            alt={`${skill} logo`}
          />
          <div className='text-xl text-gray-600 font-semibold font-sans'>{skill}</div>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default Skills;
