import React from 'react';

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row gap-10 min-h-screen py-8 px-50'>
      <div className='flex-1'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d916913.4593047748!2d85.49745309142874!3d26.14154452187607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef75b9d6df1cb7%3A0xea6d59d43eade6e3!2sSingh%20Engineering%20Works!5e0!3m2!1sen!2snp!4v1759930215180!5m2!1sen!2snp"  style={{width:'600px', height:'500px', border:'0'}} ></iframe>
      </div>
      <div className='flex-1'>
        <h2 className="text-[24px] font-bold mb-3">Our Address</h2>

        <div className="flex items-center mb-4 justify-start">
          <div className="w-9 h-[3px] bg-[#77c720] rounded"></div>
          <div className="flex-1 h-[3px] bg-gray-300 rounded"></div>
        </div>

        <ul className='space-y-3'>
          <li className="flex items-center hover:text-[#77c720] cursor-pointer text-lg">
            <img src="/assets/images/contact/home-button.png" alt="home" className="w-6 h-6 mr-2" />
            Munalpath, Dharan Road, Biratnagar-6, Nepal
          </li><br/><br/>
          <h2 className="text-[24px] font-bold mb-3">Contact us</h2>
          <div className="flex items-center mb-4 justify-start">
          <div className="w-9 h-[3px] bg-[#77c720] rounded"></div>
          <div className="flex-1 h-[3px] bg-gray-300 rounded"></div>
        </div>
          <li className="flex items-center hover:text-[#77c720] cursor-pointer text-lg">
            <img src="/assets/images/contact/telephone-symbol-button.png" alt="phone" className="w-6 h-6 mr-2" />
            +977 9816340067
          </li>
          <li className="flex items-center hover:text-[#77c720] cursor-pointer text-lg">
            <img src="/assets/images/contact/mail.png" alt="email" className="w-6 h-6 mr-2" />
            arvindpalsingh269@gmail.com
          </li><br/><br/>
          <h2 className="text-[24px] font-bold mb-3">Website</h2>
          <div className="flex items-center mb-4 justify-start">
          <div className="w-9 h-[3px] bg-[#77c720] rounded"></div>
          <div className="flex-1 h-[3px] bg-gray-300 rounded"></div>
        </div>
          <li className="flex items-center hover:text-[#77c720] cursor-pointer text-lg">
            <img src="/assets/images/contact/web.png" alt="website" className="w-6 h-6 mr-2" />
            www.singhengineeringworks.com.np
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
