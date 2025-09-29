import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#130346] text-white p-6 font-sans">
      <div className="flex flex-wrap justify-around max-w-6xl mx-auto">

        <div>
          <h3 className="text-lg font-bold mb-2">About Singh Engineering Works</h3>
          <p>Singh Engineering Works was established in 1990 AD. It's a renowned name in Mechanical, Fabrication, Erection in Nepal. The company is run by Mechanical Engineer.<br />

            Read More</p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="list-none p-0">
            <li>
              <Link to="/services" >
                Our Services
              </Link>
              <li>
                <Link
                  to="/about"

                >
                  About-Us
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonals"

                >
                  Testimonals
                </Link>
              </li>
              <li>
                <Link to="/gallery" >
                  Photo gallery
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>

            </li>


          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <ul>
            <li>
              Munalpath, Dharan Road, Biratnagar-6, Nepal</li>
            <li>
              9816340067</li>
            <li>arvindpalsingh269@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <p>Copyright © 2025. All Rights Reserved; Singh Engineering Works | Technology partner : PRACAS</p>
      </div>
    </footer>
  );
};

export default Footer;
