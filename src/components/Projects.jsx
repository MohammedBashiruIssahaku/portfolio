import React from 'react'
import { NavLink } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Reactjs from './projects/Reactjs'
import Nextjs from './projects/Nextjs'
import JavaScript from './projects/JavaScript'
import Java from './projects/Java'
import SpringBoot from './projects/SpringBoot'
import Nodejs from './projects/Nodejs'
import All from './projects/All'

const Projects = () => {

     const navItems = [
         {path : "/projects/languages/",  link : "All"},
        {path : "/projects/languages/React",  link : "React"},
        {path : "/projects/languages/NextJs",  link : "NextJs"},
        {path : "/projects/languages/JavaScript",  link : "javaScript"},
         {path : "/projects/languages/Java",  link : "Java"},
        {path : "/projects/languages/SpringBoot",  link : "SpringBoot"},
        {path : "/projects/languages/NodeJs",  link : "NodeJs"},
     ]




  return (
    <div className='pb-4  border-2 flex flex-col'>
        <h2 className=' text-center text-4xl'>Projects</h2>

        <nav className='flex justify-center space-x-4'>
             {
                navItems.map(({path, link})=>(
                    <ul key={path}>
                        <button className="my-14"  >
                            <NavLink to={path}>{link}</NavLink>
                        </button>
                    </ul>
                )
                )
             }
        </nav>

        <Routes >
            <Route path='/projects/languages/' element={<All/>}/>
            <Route path='/projects/languages/React' element={<Reactjs/>}/>
            <Route path='/projects/languages/NextJs' element={<Nextjs/>}/>
            <Route path='/projects/languages/JavaScript' element={<JavaScript/>}/>
            <Route path='/projects/languages/Java' element={<Java/>}/>
            <Route path='/projects/languages/SpringBoot' element={<SpringBoot/>}/>
            <Route path='/projects/languages/NodeJs' element={<Nodejs/>}/>
        </Routes>



   {/*

        <div>
            {PROJECTS.slice(0,10).map((project, index) => (
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

        */}
      
    </div>
  )
}

export default Projects
