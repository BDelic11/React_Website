import React from 'react';
import Navbar from '../navbar';

const FirstSection = () => {
 

  return ( 
    <div id='section1'>

    {/*NAVBAR SECTION*/}
    <Navbar />

      {/*VIDEO BACKGROUND SECTION*/}
      <div className="relative w-full h-screen overflow-hidden">
                      <video
                        className="w-full h-full object-cover absolute top-0 left-0 z-0"
                        autoPlay
                        muted
                        loop
                        >
                        <source src="../../videos/backgroundVideo.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute w-full h-full bg-black opacity-50 z-1"></div>
                      <div className="absolute top-3 left-3 right-3 bottom-3 border-2 border-black"></div>

    	     
           

          {/* MIDDLE TEXT SECTION */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h2 className="font-custom z-10 text-gray-100 text-center font-thin text-4xl w-screen md:text-5-xl md:max-w-md lg:text-7xl lg:max-w-2xl ">
                  We create with People, <span className='font-bold'>
                      Shape & </span>
                        <span className=''>
                            Picture </span>
                </h2>
        </div>            

      </div>
    </div>
  );
};

export default FirstSection;
