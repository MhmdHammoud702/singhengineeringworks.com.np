import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" w-full top-0 left-0 shadow-md relative z-50">
      {/* Top Bar */}
      <div className="bg-[#130346] text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-15 py-2">
          <div className="flex items-center gap-6 text-white text-bold list-none font-bold">
            <li> +977 9816314006</li>
            <li><a
              href="mailto:arvindpalsingh269@gmail.com"
              className="hover:text-[#159EEC] transition text-white"
            >
              arvindpalsingh269@gmail.com
            </a></li>
          </div>
          <div className="flex items-center gap-6 text-white text-bold list-none">
            <li>BOOK OUR SERVICES</li>
            <li>EMAIL</li>
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
          <ul className="flex gap-3 list-none p-0 font-medium">
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
                  className="hover:text-blue-600 transition"
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
