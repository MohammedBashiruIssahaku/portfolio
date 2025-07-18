import React from 'react'
import { BiLogoPostgresql } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiSpringboot } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";





import {animate, motion} from "framer-motion"

const iconVariants = (duration) =>(
{
    intial: {y: -10},
    animate: {
         y:[10, -10],
         transiton: {
            duration: duration,
            ease: "linear", 
            repeat: Infinity,
            repeatType: "reverse",
         }
    }
})

const Technologies = () => {
  return (
    <div className='pb-24'>
       <motion.h2
         whileInView={{opacity: 1, y: 0 }}
         initial = {{opacity: 0 , y: -100}}
         transition={{duration: 1.5}}
        className='my-20 text-center text-4xl'>Technologies
        </motion.h2>
       <motion.div
        whileInView={{opacity: 1, x: 0 }}
         initial = {{opacity: 0 , x: -100}}
         transition={{duration: 1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>

             <motion.div
              initial="initial"
                 animate = "animate"
                 variants = {iconVariants(2.5)}>
                  <RiReactjsLine className='text-7xl text-cyan-400'/> 
             </motion.div>


             <motion.div className='p-4'
              
                   initial="initial"
                   animate = "animate"
                   variants = {iconVariants(3)}
             >
                   <TbBrandNextjs className="text-7xl"/>
             </motion.div>
                

                <motion.div className='p-4'
             initial="initial"
                   animate = "animate"
                   variants = {iconVariants(4)}>
                <FaJava  className='text-7xl text-red-500'/>
             </motion.div>


             <motion.div className='p-4'
             initial="initial"
                   animate = "animate"
                   variants = {iconVariants(5)}>
                <SiSpringboot className='text-7xl text-green-500'/>
             </motion.div>

             

             <motion.div className='p-4'
             initial="initial"
                   animate = "animate"
                   variants = {iconVariants(6)}>
                <IoLogoJavascript className="text-7xl text-yellow-500" />
             </motion.div> 

              
              <motion.div className='p-4'
             initial="initial"
                   animate = "animate"
                   variants = {iconVariants(6)}>
                <FaNodeJs className="text-7xl text-green-500" />
             </motion.div> 


             <motion.div className='p-4'
             initial="initial"
                   animate = "animate"
                   variants = {iconVariants(5)}>
                <SiMongodb className='text-7xl text-cyan-500'/>
             </motion.div>


            {/*
               <motion.div className='p-4'
              initial="initial"
                   animate = "animate"
                   variants = {iconVariants(2)}>
                  <DiRedis/>
             </motion.div>
            */} 
             
             

             <motion.div className='p-4'
              initial="initial"
                   animate = "animate"
                   variants = {iconVariants(4)}>
                 <BiLogoPostgresql className='text-7xl text-sky-700'/>
             </motion.div>
       </motion.div>
    </div>
  )
}

export default Technologies
