import React from 'react'
import { useState } from 'react';
import panda from '../Pages/images/panda.png'
import butterfly from '../Pages/images/butterfly.png'
import toast, {Toaster} from 'react-hot-toast';
 
const Footer = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
      
        if (formData.email && formData.email.includes('@gmail.com') && formData.name !== '' && formData.message !== '') {
            toast.success('Email sent Successfully');
        } else {
            toast.error('Please enter a valid email');
        }
         
        setFormData({ email: '', name : '', message : '' });
      };
      
    return (
        <div className='w-full bg-yellow-400 flex flex-wrap justify-center'>
            <div className='w-[700px] mx-10'>
                <img className='' src={panda} alt="" srcset="" />
            </div>
            <div className='w-[600] flex justify-center flex-col'>
                <div className='flex justify-end butterfly'><img src={butterfly} width={130} height={130}/></div>
               <div className='w-[410px] h-[500px] bg-yellow-100 text-gray-900 rounded-[25px] p-4 shadow-2xl'>
               <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full h-[50px] text-gray-900 font-sans text-[18px] my-2 p-2 rounded-lg bg-yellow-50 outline-yellow-200 hover:shadow-md'
                        />
                    </label>
                    <br />
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full h-[50px] text-gray-900 font-sans text-[18px] my-2 p-2 rounded-lg bg-yellow-50 outline-yellow-200 hover:shadow-md'
                        />
                    </label>
                    <br />
                    <label>
                        Message:
                        <input
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className='w-full h-[130px] text-gray-900 font-sans text-[18px] my-2 p-2 rounded-lg bg-yellow-50 outline-yellow-200 hover:shadow-md'
                        />
                    </label>
                    <br />
                    <div className='flex justify-center'>
                    <button type="submit" className='w-[200px] bg-yellow-400 hover:bg-yellow-300 p-3 rounded-lg my-3 text-xl font-semibold'>Submit</button>
                    </div>
                    </form>
               </div>
            </div>
        </div>
       
        
    )
}

export default Footer



{/* <a href="https://www.freepik.com/free-vector/cute-panda-sleeping-bamboo-tree-cartoon-vector-icon-illustration-animal-nature-icon-isolated_36440846.htm#query=sleeping%20panda&position=2&from_view=search&track=ais&uuid=f79a09d2-0e62-4562-b662-54d9a1364b5e">Image by catalyststuff</a> on Freepik */ }
{/* <a href="https://www.freepik.com/free-vector/red-beauty-butterfly-insect-icon_70015662.htm#query=butterfly&position=11&from_view=search&track=sph&uuid=bfd7b359-d916-4420-96df-6044c9da5cb0">Image by jemastock</a> on Freepik */ }