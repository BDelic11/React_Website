import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <nav className="sticky h-0 bg-transparent z-10 text-white px-6 top-5 md:top-8 lg:top-10">
          <div className="flex items-center ">
            <div className="">
              <div className="burger-menu cursor-pointer" onClick={handleMenuToggle}>
                {menuOpen ? <FaTimes className=" text-gray-100 font-thin text-xl sm:text-2xl md:text-xl lg:text-4xl" /> :
                           <FaBars className=" text-gray-100 font-thin text-xl sm:text-2xl md:text-xl lg:text-4xl" />}
              </div>
              {menuOpen && (
                <div className="menu-items absolute items-center justify-center  bg-gray-950 p-4 top-10 left-0 w-screen md:text-center lg:text-center lg:w-1/2 lg:rounded ">
                  <ul className="list-none flex flex-col text-black font-custom text-xl p-0 hover:text-black ">
                    <a href='#section1' className="py-2 pl-5 text-white rounded hover:bg-yellow-200 hover:text-black transition duration-300">Home</a>
                    <a href='#section2' className="py-2 pl-5 text-white rounded hover:bg-yellow-200 hover:text-black transition duration-300">About</a>
                    <a href='#section3' className="py-2 pl-5 text-white rounded hover:bg-yellow-200 hover:text-black transition duration-300">Services</a>
                    {/* Add more items as needed */}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex items-center mx-auto"> 
              <h2 className="font-custom z-10 text-gray-100 text-xl md:text-2xl lg:text-4xl">VIDEOS</h2>
            </div>
          </div>
        </nav>
  )
}

export default Navbar