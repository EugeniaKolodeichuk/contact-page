import React from 'react';
import { BiPhoneCall } from 'react-icons/bi';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  const companyItems: { title: string; route: string }[] = [
    { title: 'About', route: '' },
    { title: 'Contact', route: '' },
    { title: 'Blogs', route: '' },
  ];

  const legalItems: { title: string; route: string }[] = [
    { title: 'Privacy Policy', route: '' },
    { title: 'Terms & Services', route: '' },
    { title: 'Terms of Use', route: '' },
    { title: 'Refund Policy', route: '' },
  ];

  const quickLinksItems: { title: string; route: string }[] = [
    { title: 'Techlabz Keybox', route: '' },
    { title: 'Downloads', route: '' },
    { title: 'Forum', route: '' },
  ];

  return (
    <footer className=" bg-black px-5 pt-5 pb-[35px] lg:px-[80px] lg:pb-[66px] lg:pt-[80px] text-white font-poppins">
      <div className="container mx-auto">
        <h2 className="font-inter text-center font-extrabold text-4xl mb-[45px]">Logo Here</h2>
        <hr className="mb-[30px]" />
        <div className="flex flex-col lg:flex-row w-full xl:pl-5 justify-between">
          <div className="w-full grid grid-cols-2 gap-[77px] gap-y-[30px] mb-[40px] lg:mb-0 lg:flex lg:justify-between lg:pr-[50px] xl:pr-[96px]">
            <ul className="font-normal text-xs xl:text-base">
              <h3 className="font-semibold text-base lg:text-sm xl:text-lg mb-4 lg:mb-5">
                Reach us
              </h3>
              <li className="flex flex-col items-start lg:flex-row lg:items-center mb-5 lg:mb-6">
                <BiPhoneCall className="w-6 h-6 mb-[13px] lg:mb-0 lg:mr-[25px]" />
                <a href="tel:+10123456789">+1012 3456 789</a>
              </li>
              <li className="flex flex-col items-start lg:flex-row lg:items-center mb-5 lg:mb-6">
                <IoMdMail className="w-6 h-6 mb-[13px] lg:mb-0 lg:mr-[25px]" />
                <a href="mailto:demo@gmail.com">demo@gmail.com</a>
              </li>
              <li className="flex flex-col items-start lg:flex-row lg:items-center">
                <FaMapMarkerAlt className="w-6 h-6 mb-[13px] lg:mb-0 lg:mr-[25px]" />
                <a
                  href="https://goo.gl/maps/yujU3pH7AWw2TpKT6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  132 Dartmouth Street Boston, <br /> Massachusetts 02156 United States
                </a>
              </li>
            </ul>
            <ul className="font-normal text-xs xl:text-base">
              <h3 className="font-semibold text-base lg:text-sm xl:text-lg mb-5">Company</h3>
              {companyItems.map((companyItem, index) => (
                <li key={index} className="flex pb-5 lg:pb-6 last:pb-0">
                  <a href={companyItem.route}>{companyItem.title}</a>
                </li>
              ))}
            </ul>
            <ul className="font-normal text-xs xl:text-base">
              <h3 className="font-semibold text-base lg:text-sm xl:text-lg mb-5">Legal</h3>
              {legalItems.map((legalItem, index) => (
                <li key={index} className="flex pb-5 lg:pb-6 last:pb-0">
                  <a href={legalItem.route}>{legalItem.title}</a>
                </li>
              ))}
            </ul>
            <ul className="font-normal text-xs xl:text-base">
              <h3 className=" font-semibold text-base lg:text-sm xl:text-lg mb-5">Quick Links</h3>
              {quickLinksItems.map((quickLinksItem, index) => (
                <li key={index} className="flex pb-5 lg:pb-6 last:pb-0">
                  <a href={quickLinksItem.route}>{quickLinksItem.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full bg-[#131313] lg:w-[270px] xl:w-[304px] h-full rounded-[5px] lg:rounded-[10px] p-[14px] lg:pb-[21px]">
            <h3 className="font-semibold text-base lg:text-lg mb-[23px] lg:mb-[29px]">
              Join Our Newsletter
            </h3>
            <div className="flex text-white rounded-[4px] mb-[20px]">
              <input
                type="email"
                aria-label="Email"
                placeholder="Your email address"
                className="bg-[#1E1E1E] pl-[10px] pt-[12px] pb-[10px] w-full lg:w-[172px] text-[11px] font-normal focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black px-[22px] pt-[11px] pb-[10px] font-medium text-xs"
              >
                Subscribe
              </button>
            </div>
            <p className="opacity-50 font-manrope font-medium text-[13px]">
              * Will send you weekly updates for your better tool management.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
