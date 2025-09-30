import React from 'react';

const Contact = () => {
  return (
    <div className='flex  min-h-screen py-8 px-50'>
      <div>
        <h2 className="text-[24px] font-bold mb-3">Contact us</h2>

        <div className="flex items-center mb-4 justify-start">
          <div className="w-9 h-[3px] bg-[#77c720] rounded"></div>
          <div className="flex-1 h-[3px] bg-gray-300 rounded"></div>
        </div>

        <ul className='space-y-3'>
          <li className="flex items-center text-lg">
            <img src="/assets/images/home-button.png" alt="home" className="w-6 h-6 mr-2" />
            Munalpath, Dharan Road, Biratnagar-6, Nepal
          </li>
          <li className="flex items-center text-lg">
            <img src="/assets/images/telephone-symbol-button.png" alt="phone" className="w-6 h-6 mr-2" />
            +977 9816340067
          </li>
          <li className="flex items-center text-lg">
            <img src="/assets/images/mail.png" alt="email" className="w-6 h-6 mr-2" />
            arvindpalsingh269@gmail.com
          </li>
          <li className="flex items-center text-lg">
            <img src="/assets/images/web.png" alt="website" className="w-6 h-6 mr-2" />
            www.singhengineeringworks.com.np
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
