import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const LowerFooter = () => {
  return (
    <div className=' font-sans text-white flex flex-row w-full h-60 justify-center pl-20 items-center lg:pt-20 gap-10 lg:text-xl last:flex-col'>
        <div className='flex flex-row gap-10 '>
            <a href='#section1' className='  invisible lg:visible hover:text-yellow-200 transform hover:scale-110 transition duration-300'>HOME</a>
            <a href='#section3' className=' invisible lg:visible hover:text-yellow-200 transform hover:scale-110 transition duration-300'>FEATURED PROJECTS</a>
            <a href='#section2' className=' invisible lg:visible hover:text-yellow-200 transform hover:scale-110 transition duration-300'>ABOUT</a>
        </div>
        <div className='absolute left-5 lg:relative  '>
            <p>Split</p>
            <p>Croatia</p>
            <p>Jobova 4</p>
            <p>43.5147° N, 16.4435° E</p>
        </div>
        <div className='flex flex-row gap-6 absolute right-5 md:relative'> 
            <a href="http://">
                <FontAwesomeIcon icon={faInstagram} size="2xl" color="white" />
            </a>
            <a href="http://">
            <FontAwesomeIcon icon={faTwitter} size="2xl" color="white" />
            </a>
            <a href="http://">
            <FontAwesomeIcon icon={faFacebook} size="2xl" color="white" />
            </a>
        </div>
    </div>
  )
}

export default LowerFooter