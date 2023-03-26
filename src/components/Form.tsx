import React from 'react';
import { SiDiscord } from 'react-icons/si';
import { TiSocialTwitter } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { BiPhoneCall } from 'react-icons/bi';
import { IoMdMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ellipse from '../assets/ellipse.png';
import smallEllipse from '../assets/small-ellipse.png';
import letterSend from '../assets/letter-send.png';

const Form = () => {
  return (
    <div className="relative w-[1196px] h-[667px] bg-white mx-auto mb-[50px] rounded-[10px] shadow-form flex flex-col lg:flex-row">
      <img
        className="absolute bottom-[-38px] right-[133px]"
        src={letterSend}
        alt="graphicElement"
      />
      <div className="bg-black rounded-[10px] w-[491px] pt-10 px-10 pb-9 my-[10px] ml-[10px] text-white font-poppins relative">
        <img className="absolute right-0 bottom-0" src={ellipse} alt="graphicElement" />
        <img
          className="absolute right-[70px] bottom-[70px]"
          src={smallEllipse}
          alt="graphicElement"
        />
        <h3 className="font-semibold text-[28px]">Contact Information</h3>
        <p className="font-normal text-lg text-[#C9C9C9]">Say something to start a live chat!</p>
        <div className="mt-[111px] mb-[159px]">
          <ul className="font-normal text-base">
            <li className="flex items-center">
              <BiPhoneCall className="w-6 h-6 mr-[25px]" />
              <a href="tel:+10123456789">+1012 3456 789</a>
            </li>
            <li className="flex items-center my-[50px]">
              <IoMdMail className="w-6 h-6 mr-[25px]" />
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </li>
            <li className="flex items-start">
              <FaMapMarkerAlt className="w-6 h-6 mr-[25px]" />
              <a
                href="https://goo.gl/maps/yujU3pH7AWw2TpKT6"
                target="_blank"
                rel="noopener noreferrer"
              >
                132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States
              </a>
            </li>
          </ul>
        </div>
        <div className="flex lg:space-x-[24px]">
          <button className="transition ease-in-out duration-700 bg-[#1B1B1B] fill-white h-[30px] w-[30px] flex justify-center items-center hover:bg-white hover:fill-black rounded-full">
            <TiSocialTwitter className="w-[20px] h-full fill-inherit" />
          </button>
          <button className="transition ease-in-out duration-700 bg-[#1B1B1B] fill-white h-[30px] w-[30px] flex justify-center items-center hover:color-black hover:bg-white hover:fill-black rounded-full">
            <SlSocialInstagram className="w-[15px] h-full fill-inherit" />
          </button>
          <button className=" bg-[#1B1B1B] fill-white h-[30px] w-[30px] flex justify-center items-center hover:bg-white hover:fill-black rounded-full">
            <SiDiscord className="w-[15px] h-full fill-inherit" />
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Form;
