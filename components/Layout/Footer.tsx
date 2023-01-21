import React from 'react'
import Link from 'next/link'
import {BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-primary-gray text-white'>
      <footer className='max-w-7xl mx-auto'>
        <hr />
        <div className='flex flex-row justify-between px-3 py-9 items-center relative'>
          <div>
              <h3 className='text-heading-logo'>Rohan</h3>
          </div>
          <nav className='flex flex-row gap-x-8 mr-3 text-white items-center z-10'>
              <Link href='/#'>
                <BsGithub size={18}/>
              </Link>
              <Link href='/#'>
                <BsLinkedin size={18}/>
              </Link>
              <Link href='/#'>
                <BsTwitter size={18}/>
              </Link>
          </nav>
        </div>
      </footer>
  </div>
  )
}

export default Footer