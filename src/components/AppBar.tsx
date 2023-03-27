import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart } from 'react-icons/bs';

const AppBar = () => {
  const navItems: { title: string; route: string }[] = [
    { title: 'Home', route: '/' },
    { title: 'Features', route: '/' },
    { title: 'Blog', route: '/' },
    { title: 'Shop', route: '/' },
    { title: 'About', route: '/' },
    { title: 'Contact', route: '/' },
  ];

  return (
    <nav className="shadow filter drop-shadow(0px -2px 4px rgba(0, 0, 0, 0.25)) lg:shadow-none">
      <div className="container flex flex-wrap items-center justify-between px-5 py-7 lg:p-10 mx-auto">
        <a href="/" className="flex items-center">
          <p className="text-lg font-inter font-extrabold lg:text-2xl">Logo Here</p>
        </a>
        <button type="button" className="inline-flex items-center lg:hidden">
          <HiMenuAlt3 className="h-6 w-6" fill="black" />
        </button>
        <div className="hidden w-full lg:flex lg:w-auto">
          <ul className="flex lg:space-x-[47px]">
            {navItems.map(item => (
              <li key={uuidv4()} className="flex items-center font-roboto  text-[#1F1F1F]">
                <a
                  className={item.title === 'Contact' ? 'font-semibold' : 'font-normal'}
                  href={item.route}
                >
                  {item.title}
                </a>
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
