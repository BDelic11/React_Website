import React from 'react';

const ThirdSection = () => {
  return (
    <div id='section3' className="bg-white font-sans py-12">
      <div className="container mx-auto px-4">
        {/* Featured Projects Title */}
        <h2 className="text-2xl text-center mb-20 md:text-left ">- Featured Projects -</h2>

        {/* First Project */}
        <div className="group flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-10">
          {/* Text */}
          <div
            className=" text-left pl-5 lg:w-1/2 lg:text-left opacity-0  group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">Project Title 1</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan mauris
              quis massa pharetra, vel consequat quam vestibulum.
            </p>
          </div>

          {/* Image */}
          <div className=" group lg:w-1/3 mt-6 lg:mt-0 relative">
            <img
              src="../../images/pic1.jpg"
              alt="Featured Project 1"
              className="w-full h-50 rounded-lg group-hover:scale-90 tranisition duration-500"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 scale-90 rounded-lg transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Second Project */}
        <div className="group flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between mb-10">
          {/* Text */}
          <div
            className="lg:w-1/2 text-left pl-5 lg:text-left opacity-0  group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110 duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">Project Title 2</h2>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum accumsan mauris
              quis massa pharetra, vel consequat quam vestibulum.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/3 mt-6 lg:mt-0 relative">
            <img
              src="../../images/pic2.jpg"
              alt="Featured Project 2"
              className="w-full h-50 rounded-lg group-hover:scale-90 tranisition duration-500"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 group-hover:opacity-40 scale-90 rounded-lg transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
