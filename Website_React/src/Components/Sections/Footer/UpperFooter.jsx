import React from 'react'

const UpperFooter = () => {
  return (
    <>
         {/*LEFT SIDE*/}
         <div className='bg-black flex flex-col lg:w-full lg:h-auto lg:flex-row lg:items-end justify-around'>
            <div className='text-white h-auto font-custom text-left pl-5 font-thin text-4xl py-10 w-screen lg:text-5xl lg:w-1/3'>
                <h2 className=''>
                    Let's Work <span className='text-yellow-300'>Together</span>  
                </h2>
                <a href='mailto:example@example.com'
                    className='text-xl font-sans'
                >
                    contact@video.com
                </a>
                <hr className='w-1/2 items-center text-center mt-1 opacity-50 '></hr>
            </div>
            {/*RIGHT SIDE*/}
            <div className='relative rounded-full overflow-hidden flex invisible h-0 lg:h-60 lg:visible lg:flex-col text-white font-custom text-center justify-center items-center
                             font-thin lg:text-2xl w-60   '>
                                 <video
                  className="w-full h-full object-cover  "
                  autoPlay
                  muted
                  loop
                  >
                  <source src="../../videos/smokeVideo.mp4" type="video/mp4" />
                </video>
                <h2 className='pt-30'>
                    VIDEO
                </h2>
            </div>
        </div>
    </>
  )
}

export default UpperFooter