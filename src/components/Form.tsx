import React from 'react';
import { SiDiscord } from 'react-icons/si';
import { TiSocialTwitter } from 'react-icons/ti';
import { SlSocialInstagram } from 'react-icons/sl';
import { BiPhoneCall } from 'react-icons/bi';
import { IoMdMail } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import ellipse from '../assets/ellipse.png';
import ellipseMob from '../assets/ellipse_mobile.png';
import smallEllipse from '../assets/small-ellipse.png';
import smallEllipseMob from '../assets/small-ellipse_mobile.png';
import letterSend from '../assets/letter-send.png';
import letterSendMob from '../assets/letter-send_mobile.png';

const Form = () => {
  const labels: { title: string }[] = [
    { title: 'First Name' },
    { title: 'Last Name' },
    { title: 'Email' },
    { title: 'Phone Number' },
  ];

  const radioLabels: { title: string; value: string }[] = [
    { title: 'General Inquiry', value: 'general-inquiry-1' },
    { title: 'General Inquiry', value: 'general-inquiry-2' },
    { title: 'General Inquiry', value: 'general-inquiry-3' },
    { title: 'General Inquiry', value: 'general-inquiry-4' },
  ];

  return (
    <div className="relative w-full min-h-[1030px] lg:max-w-[1196px] lg:min-h-[667px] bg-white p-[5px] lg:py-[10px] lg:pl-[10px] lg:pr-0 mx-auto mb-[50px] rounded-[5px] lg:rounded-[10px] shadow-form flex flex-col lg:flex-row">
      <img
        className="hidden lg:flex absolute bottom-[-38px] right-[133px]"
        src={letterSend}
        alt="graphicElement"
      />
      <img
        className="flex lg:hidden absolute bottom-[-19.09px] right-[142.05px]"
        src={letterSendMob}
        alt="graphicElement"
      />
      <div className="bg-black rounded-[5px] lg:rounded-[10px] lg:min-w-[491px] pt-[15px] pb-[25px] px-[40px] lg:pt-10 lg:px-10 lg:pb-9 text-white font-poppins text-center lg:text-start relative">
        <img
          className="hidden lg:flex absolute right-0 bottom-0"
          src={ellipse}
          alt="graphicElement"
        />
        <img
          className="flex lg:hidden absolute right-0 bottom-0"
          src={ellipseMob}
          alt="graphicElement"
        />
        <img
          className="hidden lg:flex absolute right-[70px] bottom-[70px]"
          src={smallEllipse}
          alt="graphicElement"
        />
        <img
          className="flex lg:hidden absolute right-[26px] bottom-[52px]"
          src={smallEllipseMob}
          alt="graphicElement"
        />
        <h3 className="font-semibold text-xl lg:text-[28px] text-center lg:text-start mb-[6px]">
          Contact Information
        </h3>
        <p className="font-normal text-[11px] lg:text-lg  text-[#C9C9C9]">
          Say something to start a live chat!
        </p>
        <div className="mt-[12px] mb-[58px] lg:mt-[111px] lg:mb-[159px]">
          <ul className="font-normal text-xs lg:text-base">
            <li className="flex flex-col lg:flex-row items-center">
              <BiPhoneCall className="w-6 h-6 mb-[10px] lg:mr-[25px] leading-[18px] lg:leading-6" />
              <a href="tel:+10123456789">+1012 3456 789</a>
            </li>
            <li className="flex flex-col lg:flex-row items-center my-[15px] lg:my-[50px] leading-[18px] lg:leading-6">
              <IoMdMail className="w-6 h-6 mb-[10px] lg:mr-[25px]" />
              <a href="mailto:demo@gmail.com">demo@gmail.com</a>
            </li>
            <li className="flex flex-col items-center lg:flex-row lg:items-start leading-[18px] lg:leading-6">
              <FaMapMarkerAlt className="w-6 h-6 mb-[10px] lg:mr-[25px]" />
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
        <div className="flex space-x-[24px] justify-center lg:justify-start">
          <button className="transition ease-in-out duration-700 bg-[#1B1B1B] fill-white h-[30px] w-[30px] flex justify-center items-center hover:bg-white hover:fill-black rounded-full">
            <TiSocialTwitter className="w-[20px] h-full fill-inherit" />
          </button>
          <button className="transition ease-in-out duration-700 bg-[#1B1B1B] fill-white h-[30px] w-[30px] flex justify-center items-center hover:color-black hover:bg-white hover:fill-black rounded-full">
            <SlSocialInstagram className="w-[15px] h-full fill-inherit" />
          </button>
          <button className="transition ease-in-out duration-700 bg-[#1B1B1B] fill-white h-[30px] w-[30px] flex justify-center items-center hover:bg-white hover:fill-black rounded-full">
            <SiDiscord className="w-[15px] h-full fill-inherit" />
          </button>
        </div>
      </div>

      <form className="w-full px-[21px] py-[30px] lg:max-w-[695px] lg:p-[50px]">
        <div className="flex flex-col justify-between lg:grid lg:grid-cols-2 lg:gap-5 items-center font-poppins font-medium text-xs lg:text-sm lg:leading-5">
          {labels.map((label, index) => (
            <label
              key={index}
              className="w-full mb-5 last-of-type:mb-[25px] lg:max-w-[278px] lg:mb-[45px] lg:last-of-type:mb-[45px] text-[#8D8D8D] focus-within:text-black"
            >
              {label.title}
              <input
                className="appearance-none pb-[10px] pt-[5px] text-sm bg-transparent border-b border-[#8D8D8D] w-full text-[#8D8D8D] focus:border-b-black focus:text-black focus:outline-none"
                type="text"
                aria-label={label.title}
              />
            </label>
          ))}
        </div>

        <div className="font-poppins mb-[25px] lg:mb-[45px] leading-5">
          <h3 className="font-semibold text-sm pb-[10px] lg:pb-[14px]">Select Subject?</h3>
          <ul className="grid grid-cols-2 gap-5 grid-row-[14px] lg:flex">
            {radioLabels.map((radioLabel, index) => (
              <li key={index} className="flex items-center">
                <input
                  type="radio"
                  id={radioLabel.value}
                  name="subject"
                  value={radioLabel.value}
                  className="hidden peer"
                  onChange={event => console.log('value', event.target.value)}
                />
                <label
                  htmlFor={radioLabel.value}
                  className="bg-[#E0E0E0] rounded-full w-[13px] h-[13px] peer-checked:hidden"
                ></label>
                <label
                  htmlFor={radioLabel.value}
                  className="hidden w-[13px] h-[13px] peer-checked:flex"
                >
                  <RiCheckboxCircleFill className="w-full h-full fill-black" />
                </label>
                <span className="font-normal text-xs pl-[10px]">{radioLabel.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <label className="w-[278px] mb-[45px] text-[#8D8D8D] focus-within:text-black font-poppins font-medium text-xs">
          Message
          <input
            className="appearance-none pb-[10px] pt-[6px] mb-[25px] lg:mb-[45px] text-sm bg-transparent border-b border-[#8D8D8D] w-full text-[#8D8D8D] focus:border-b-black focus:text-black focus:outline-none"
            type="text"
            aria-label="Message"
            placeholder="Write your message.."
          />
        </label>
        <button
          type="submit"
          className="flex bg-black w-full lg:mb-[100px] py-[10px] justify-center lg:ml-auto lg:px-[48px] lg:py-[15px] rounded-[3px] lg:rounded-[5px] text-white text-xs lg:text-base font-poppins font-medium shadow-button lg:leading-6"
          onClick={e => e.preventDefault()}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Form;
