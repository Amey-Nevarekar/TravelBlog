import React from 'react'
import { CONTACT } from '../constants'
import { delay, motion } from 'framer-motion';

function Footer() {
  return (
    <div className='border-b border-neutral-900 pb-4'>
         <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}}  transition={{duration:1,delay:0.5}} className='my-10 text-center text-4xl'>Developer</motion.h1>
         <div className='text-center tracking-tighter'>
            <motion.p whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}}  transition={{duration:1,delay:1}} className='my-4'>{CONTACT.LinkedIn}</motion.p>
            <motion.p  whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}}  transition={{duration:1,delay:1}} className='my-4'>{CONTACT.email}</motion.p>
         </div>
      
    </div>
  )
}

export default Footer
