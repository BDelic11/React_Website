import React, {useState, useEffect} from 'react'

const SecondSection = () => {

  const [shouldTransitionBg, setShouldTransitionBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const halfwayPoint = window.innerHeight ;
      setShouldTransitionBg(window.scrollY >= halfwayPoint);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={shouldTransitionBg ? 'transition-bg transition-text transition duration-500' : 'bg-black text-black'}>
      <div id='section2' className= 'h-screen flex items-center justify-center'>
          <h2 className={ shouldTransitionBg ? 'bg-transparent text-center justify-center py-10 px-10 text-3xl md:text-4xl lg:text-4xl lg:max-w-4xl':
           ' text-center justify-center px-10 text-white text-3xl md:text-4xl lg:text-4xl lg:max-w-4xl lg:bg-yellow-200 lg:text-black lg:py-10'}>
              We’re a small creative studio bringing big ideas to life through design, photography, & video. 
          </h2>
      </div>
    </div>
  )
}

export default SecondSection