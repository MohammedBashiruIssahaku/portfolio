import React from 'react'
import {CONTACT} from "../constants"

const Contact = () => {
  return (
    <div className='border-t border-stone-900 '>
        <h2 className='my-10 text-center text-4xl'>Get in Touch</h2>
        <div className='text-center tracking-tighter'>
            <p className='my-4'>
                {CONTACT.address}
            </p>
            <p className='my-4'>
                {CONTACT.phoneNo}
            </p>
            <p>
                <a href="#" className='border-b'>{CONTACT.email}</a>
            </p>

        </div>
      
    </div>
  )
}

export default Contact
