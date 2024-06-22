import React from 'react'
import logo from "../assets/projectLogo.png";
import { FaGoogle } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { delay, motion } from 'framer-motion';

function Navbar() {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shirnk-0 items-center'>
        <motion.img  whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}}  transition={{duration:1,delay:0.5}} src={logo} alt='logo' />

      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.google.com/search?gs_ssp=eJzj4tTP1TcwNbYoKjZg9OJOT8wrSCzJLCjNSQUAVUwHtA&q=ganpatipule&rlz=1C1SQJL_enIN969IN969&oq=&gs_lcrp=EgZjaHJvbWUqCQgAEC4YJxjqAjIJCAAQLhgnGOoCMgkIARAjGCcY6gIyCQgCECMYJxjqAjIJCAMQIxgnGOoCMgkIBBAjGCcY6gIyCQgFECMYJxjqAjIJCAYQIxgnGOoCMgkIBxAjGCcY6gLSAQk5MzM4NmowajeoAgiwAgE&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">
          <FaGoogle />
        </a>
        <a href="https://www.google.com/maps/place/Ganpatipule,+Maharashtra+415615/@17.1530906,73.2576296,14z/data=!3m1!4b1!4m6!3m5!1s0x3bea055561b27b67:0xc0450524831ec163!8m2!3d17.1488663!4d73.2726946!16zL20vMDUzOHJz?entry=ttu" target="_blank" rel="noopener noreferrer">
          <FaSearchLocation />
        </a>
        <a href="https://www.ganpatipule.co.in/Eng/Home" target="_blank" rel="noopener noreferrer">
          <FaTag />
        </a>
      </div>

    </nav>
  )
}

export default Navbar
