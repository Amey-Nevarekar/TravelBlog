import React from 'react'
import AboutImg from '../assets/AboutG.jpg'
import { ABOUT_TEXT } from '../constants'
import { delay, motion } from 'framer-motion';

function About() {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}}  transition={{duration:1,delay:0.5}} className='my-20 text-center text-4xl'>About
                <span className='text-neutral-500'> Town</span>
            </motion.h1>
            <div className='flex flex-wrap'>
                <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}}  transition={{duration:1,delay:0.5}} className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex items-center justify-center'>
                        <img className="rounded-2xl" src={AboutImg} />
                    </div>

                </motion.div>

                <motion.div whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}}  transition={{duration:1,delay:0.5}} className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 maxw-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}

export default About
