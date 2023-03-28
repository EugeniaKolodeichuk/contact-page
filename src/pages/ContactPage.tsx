import React from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center pt-[35px] pb-[50px]">
        <h2 className="font-poppins text-[40px] font-bold leading-[60px]">Contact Us</h2>
        <p className="font-poppins text-lg text-[#717171] font-medium mt-[10px] text-center">
          Any question or remarks? <br className="lg:hidden" /> Just write us a message!
        </p>
      </div>
      <Form />
      <Footer />
    </>
  );
};

export default ContactPage;
