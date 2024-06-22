import React from 'react'
import { PLACES} from '../constants'
import { delay, motion } from 'framer-motion';

function Places() {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1  whileInView={{y:0,opacity:1}} initial={{y:-100,opacity:0}}  transition={{duration:1,delay:0.5}} className='my-20 text-center text-4xl'>Places</motion.h1>
            <div>
                {PLACES.map((Places, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{x:0,opacity:1}} initial={{x:-100,opacity:0}}  transition={{duration:1,delay:1}} className='w-full lg:w-1/4'>
                            <img src={Places.image} width={150} height={150} className='mb-6 rounded' />
                        </motion.div>

                        <motion.div whileInView={{x:0,opacity:1}} initial={{x:100,opacity:0}}  transition={{duration:1,delay:1}} className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{Places.title}</h6>
                        <p className='mb-4 text-neutral-400'>{Places.description}</p>
                        {Places.options.map((tech,index)=>(
                            <span key={index} className='mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>{tech}</span>
                        ))}
                        </motion.div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Places
