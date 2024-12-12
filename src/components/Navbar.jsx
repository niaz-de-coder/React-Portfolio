import React from 'react'
import logo from '../assets/kevinRushLogo.png'


const navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='m-8 flex justify-center items-center gap-4 text-2xl'>
          <i className='fa-brands fa-facebook'></i>
          <i className='fa-brands fa-instagram'></i>
          <i className='fa-brands fa-linkedin'></i>
          <i className='fa-brands fa-github'></i>
          <i className='fa-brands fa-youtube'></i>
          <i className='fa-brands fa-discord'></i>
        </div>
    </nav>
  )
}

export default navbar

