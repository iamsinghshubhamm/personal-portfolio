import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    return (
        <div className='w-full flex items-center justify-between gap-5 bg-violet-600 h-[70px] border px-10 shadow-md shadow-violet-900'>

            <div className='text-2xl font-semibold text-gray-50 '>
                Shubh
            </div>


            <nav className='flex gap-10'>
                <Link to="/" className={`px-3 py-1 rounded-full ${location.pathname === '/' ? 'text-violet-900 font-semibold bg-purple-100' : 'text-white'}`}>
                    Home
                </Link>
                <Link to="/about" className={`px-3 py-1 rounded-full ${location.pathname === '/about' ? 'text-violet-900 font-semibold bg-purple-100' : 'text-white'}`}>
                    About
                </Link>
                <Link to="/contact" className={` px-3 py-1 rounded-full ${location.pathname === '/contact' ? 'text-violet-900 font-semibold bg-purple-100' : 'text-white'}`}>
                    Contact
                </Link>
                <Link to="/project" className={` px-3 py-1 rounded-full ${location.pathname === '/project' ? 'text-violet-900 font-semibold bg-purple-100' : 'text-white'}`}>
                    Projects
                </Link>

            </nav>

        </div>
    )
}

export default Navbar
