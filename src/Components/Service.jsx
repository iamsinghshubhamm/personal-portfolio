import React from 'react';
import { SiFreelancer } from 'react-icons/si';
import { FaCode } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'We create stunning and responsive websites tailored to your business needs.',
    icon: <SiFreelancer size={40}  />,
  },
  {
    id: 2,
    title: 'Freelancing',
    description: 'Our creative team crafts visually appealing graphics and designs for your brand.',
    icon: <FaCode size={40} />,
  },
];

const ServiceCard = () => {
  return (
    <div className='flex w-11/12 md:1/2 flex-wrap mx-auto gap-10 justify-center my-10 '>
       
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-violet-500 p-4 rounded-t-[20px] hover:bg-violet-900 hover:text-white w-[350px] h-[270px] gap-6 flex items-center flex-col mt-4 hover:shadow-md hover:shadow-gray-600 transition-all duration-150 ease-in-out"
        >
          <div className="flex items-center mb-3 flex-col text-[1.5rem]">
            {service.icon}
            <h3 className="text-[1.7rem] font-bold">{service.title}</h3>
          </div>
          <p className="text-[1.1rem] text-center">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
