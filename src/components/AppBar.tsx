import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

//here the correct routes can be added
const navItems: { title: string; route: string }[] = [
  { title: 'Home', route: '/' },
  { title: 'Features', route: '' },
  { title: 'Blog', route: '/' },
  { title: 'Shop', route: '/' },
  { title: 'About', route: '/' },
  { title: 'Contact', route: '/' },
];

const AppBar = () => {
  //implement state to save isOpen or !isOpen status of burger menu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow filter drop-shadow(0px -2px 4px rgba(0, 0, 0, 0.25)) lg:shadow-none">
      {/* depending on whether the menu window is open on the mobile device or not, we choose the type
      of navigation */}

      {isOpen && (
        <div className="fixed inset-0 z-10 container w-screen max-w-none h-screen bg-black px-5 pt-[28px] pb-[30px] items-stretch overscroll-none lg:hidden">
          <div className="flex justify-between mb-[57px]">
            <p className="text-white font-inter font-extrabold text-lg">Logo Here</p>
            <button
              type="button"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              {/* I implemented icons from React Icons that similar to that ones from layout */}
              <IoMdClose className="fill-white w-full h-full" />
            </button>
          </div>
          <ul className="pl-[3px] text-white font-roboto font-normal text-sm">
            {navItems.map((navItem, index) => (
              <li key={index} className="flex items-center mb-[30px] last:mb-0">
                <a
                  className={navItem.title === 'Contact' ? 'font-semibold' : 'font-normal'}
                  href={navItem.route}
                >
                  {navItem.title}
                </a>
                {navItem.title === 'Features' && (
                  <MdOutlineKeyboardArrowDown
                    className="flex items-center ml-1 cursor-pointer"
                    style={{ fill: 'currentColor' }}
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="flex absolute bottom-[30px] left-1/2 transform -translate-x-1/2 justify-center mt-auto items-end">
            <button
              type="button"
              className="p-[5px] border rounded-full border-white mr-[36px] h-[31px] w-[31px] flex items-center justify-center"
            >
              <AiOutlineUser className="w-full fill-white" />
            </button>
            <button
              type="button"
              className="p-[5px] border rounded-full border-white h-[31px] w-[31px] flex items-center justify-center"
            >
              <BsCart className="w-full fill-white" />
            </button>
          </div>
        </div>
      )}

      <div className="container flex flex-wrap items-center justify-between px-5 py-7 lg:p-10 mx-auto">
        <a href="/" className="flex items-center">
          <p className="text-lg font-inter font-extrabold lg:text-2xl">Logo Here</p>
        </a>
        <button
          type="button"
          className="inline-flex items-center cursor-pointer lg:hidden"
          onClick={() => setIsOpen(true)}
        >
          <HiMenuAlt3 className="h-6 w-6" fill="black" />
        </button>
        <div className="hidden w-full lg:flex lg:w-auto">
          <ul className="flex lg:space-x-[47px]">
            {navItems.map((item, index) => (
              /* here can be implemented the logic of active links that depends on the ending of the page URL */
              <li key={index} className="flex items-center font-roboto  text-[#1F1F1F]">
                <a
                  className={item.title === 'Contact' ? 'font-semibold' : 'font-normal'}
                  href={item.route}
                >
                  {item.title}
                </a>

                {/* here can be added necessary features in 'feature' dropdown */}
                {item.title === 'Features' && (
                  <MdOutlineKeyboardArrowDown
                    className="flex items-center ml-1 cursor-pointer"
                    style={{ fill: 'currentColor' }}
                  />
                )}
              </li>
            ))}
          </ul>
          <div className="flex ml-[60px]">
            <button
              type="button"
              className="p-[5px] border rounded-full border-black mr-[36px] h-[31px] w-[31px] flex items-center justify-center"
            >
              <AiOutlineUser className="w-full" />
            </button>
            <button
              type="button"
              className="p-[5px] border rounded-full border-black h-[31px] w-[31px] flex items-center justify-center"
            >
              <BsCart className="w-full" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
