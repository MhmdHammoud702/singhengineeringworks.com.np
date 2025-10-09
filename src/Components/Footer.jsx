import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#130346] text-white">
      <div className="grid md:grid-cols-4 max-w-6xl mx-auto py-8">
        {/* About Section */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-[24px] font-bold mb-6">About Singh Engineering Works</h3>
          <p className="text-[18px] mb-10">
            Singh Engineering Works was established in 1990 AD. It's a renowned name in Mechanical, Fabrication, Erection in Nepal. The company is run by a Mechanical Engineer.
          </p>
          <Link to="/about" className="text-[18px]">Read More</Link>
          <div className="h-[1px] bg-gray-300 mt-5"></div>
        </div>

        {/* Quick Links Section */}
        <div className="col-span-1 md:col-span-1 px-5">
          <h3 className="text-[24px] font-bold mb-6">Quick Links</h3>
          <ul className="list-none p-0 space-y-2">
            <li className="flex items-center"><img src="/assets/images/footer/right.png" alt="home" className="w-8 h-4 mr-2" /><Link to="/services" className="text-[18px] hover:text-[#77c720]">Our Services</Link></li>
            <li className="flex items-center"><img src="/assets/images/footer/right.png" alt="home" className="w-8 h-4 mr-2" /><Link to="/about" className="text-[18px] hover:text-[#77c720]">About Us</Link></li>
            <li className="flex items-center"><img src="/assets/images/footer/right.png" alt="home" className="w-8 h-4 mr-2" /><Link to="/testimonals" className="text-[18px] hover:text-[#77c720]">Testimonials</Link></li>
            <li className="flex items-center"><img src="/assets/images/footer/right.png" alt="home" className="w-8 h-4 mr-2" /><Link to="/gallery" className="text-[18px] hover:text-[#77c720]">Photo Gallery</Link></li>
            <li className="flex items-center"><img src="/assets/images/footer/right.png" alt="home" className="w-8 h-4 mr-2" /><Link to="/contact" className="text-[18px] hover:text-[#77c720]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-[24px] font-bold mb-6">Contact Us</h3>
          <ul className="list-none p-0 text-[18px]">
            <li className="flex items-center gap-x-6"><img src="/assets/images/footer/send.png" alt="home" className="w-4 h-4 mr-2" />Munalpath, Dharan Road, Biratnagar-6, Nepal</li>
            <div className="h-[1px] bg-gray-300 mt-5 mb-6"></div>
            <li className="flex items-center gap-x-6"><img src="/assets/images/footer/phone-call.png" alt="home" className="w-4 h-4 mr-2" /><a href="tel:+9779816340067">9816340067</a></li>
            <div className="h-[1px] bg-gray-300 mt-5 mb-6"></div>
            <li className="flex items-center gap-x-6"><img src="/assets/images/footer/mail.png" alt="home" className="w-5 h-5 mr-2" /><a href="mailto:arvindpalsingh269@gmail.com" className="text-[#77c720] hover:text-[#426f12] text-[15px]">arvindpalsingh269@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center bg-white p-5">
        <p className="text-[18px] text-black">
          Copyright © 2025. All Rights Reserved; Singh Engineering Works | Technology Partner:{" "}
          <a
            href="https://pracas.net/"
            target="_blank"
            className="text-[#77c720] hover:text-[#426f12]"
          >
            PRACAS
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;
