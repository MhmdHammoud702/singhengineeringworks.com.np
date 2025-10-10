import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" w-full top-0 left-0 shadow-md relative z-50">
      {/* Top Bar */}
      <div className="bg-[#130346] text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-15 py-2">
          <div className="flex items-center gap-6 text-white text-bold list-none font-bold">
            <li className="flex items-center  hover:text-[#77c720] cursor-pointer "><img src="/assets/images/contact/telephone-symbol-button.png" alt="phone" className="w-3 h-3 mr-2" /><a href="https://wa.me/9779816314006" target="_blank">+977 9816314006</a> </li>
            <li className="flex items-center ">
              <img src="/assets/images/contact/send.png" alt="phone" className="w-4 h-4 mr-2" /><a
                href="mailto:arvindpalsingh269@gmail.com"
                className="hover:text-[#77c720] transition text-white"
              >
                arvindpalsingh269@gmail.com
              </a></li>
          </div>
          <div className="flex items-center gap-6 text-white text-bold list-none">
            <li className="bg-[#77c720] cursor-pointer hover:bg-[#FFBB44]" style={{ padding: '12px 20px' }} onClick={()=>window.scrollTo(0,0)}><Link to={'/booking'}>BOOK OUR SERVICES</Link></li>
            <li className="bg-[#FFBB44] cursor-pointer hover:bg-[#77c720]" style={{ padding: '12px 20px' }}><a href="mailto:arvindpalsingh269@gmail.com">EMAIL</a></li>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-15 py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/images/logo.png"
              alt="logo"
              className="h-20 w-90"
            />
          </Link>

          {/* Navbar Links */}
          <ul className="flex gap-11 list-none p-0 font-[800] text-[15px] text-[#12035E]">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "SERVICES", path: "/services" },
              { name: "PROJECTS", path: "/projects" },
              { name: "GALLERY", path: "/gallery" },
              { name: "CONTACT", path: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="hover:text-[#77c720] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
