import React from 'react'
import { TRAVEL } from '../constants'
import { delay, motion } from 'framer-motion';

function Travel() {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}}  transition={{duration:1,delay:0.5}} className='my-20 text-center text-4xl'> Travel </motion.h1>
            <div>{TRAVEL.map((travel, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}}  transition={{duration:1,delay:1}} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-neutral-400'>{travel.local}</p>
                    </motion.div>

                    <motion.div whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}}  transition={{duration:1,delay:1}} className='w-full max-w-xl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>{travel.Distance}-<span className='text-sm text-purple-100'>{travel.Highway}</span></h6>
                    <p className='mb-4 text-neutral-400'>{travel.description}</p>
                    {travel.options.map((tech,index)=>(
                        <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                    ))}
                    </motion.div>
                </div>

            ))}
            </div>

        </div>
    )
}

export default Travel
