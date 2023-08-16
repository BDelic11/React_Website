import React from 'react'
import UpperFooter from './UpperFooter'
import LowerFooter from './LowerFooter'

const FooterSection = () => {
  return (
    /*WHOLE CONTAINER*/
    <div id='section' className='bg-black flex flex-col items-center justify-center lg:w-full lg:h-screen ' >
       <UpperFooter />
       <LowerFooter />
    </div>
  )
}

export default FooterSection