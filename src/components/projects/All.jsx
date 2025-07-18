import React from 'react'
import { PROJECTS } from '../../constants'
const All = () => {
  return (
    
        <div>
            {PROJECTS.slice(0,5).map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                     <div className='w-full lg:w-1/4 '>
                          <img src={project.image} 
                            width={250}
                            height={250}
                            alt={project.title}
                            className='mb-6 rounded'/>
                     
                     </div>

                     <div className='w-full max-w-xl lg:w-3/4'>
                         <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                        <p className='mb-4 text-stone-400'>{project.description}</p>
                        <p>
                            {
                            project.technologies.map((tech, index)=>
                            (
                                <span className='mr-2 rounded bg-stone-900 p-2 
                                text-sm font-medium text-stone-300' key={index}>
                                    {tech}
                                </span>
                            ))
                            
                            }</p>
                     
                     </div>
                   
                </div>
            ))}
        </div>

  )
}

export default All
