import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react"; 
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = useRef();
  const button = useRef();
  useEffect(()=>{
    function handleClickOutside(e){
      if(menuOpen){
        if(menu.current && !menu.current.contains(e.target)
          && button.current && !button.current.contains(e.target)){
             setMenuOpen(false); 
        }
      }
    }

    document.addEventListener("mousedown",handleClickOutside);
    return()=> document.removeEventListener("mousedown",handleClickOutside);
  },[menuOpen]);
  return (
    <>
    <header className="w-full top-0 left-0 shadow-md relative z-50 ">
      {/* Top Bar */}
      <div className="bg-[#130346] text-sm md:text-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 lg:px-12 py-2">
          <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-white font-semibold list-none">
            <li className="flex items-center hover:text-[#77c720] cursor-pointer transition-all duration-250">
              <img
                src="/assets/images/contact/telephone-symbol-button.png"
                alt="phone"
                className="w-4 h-4 mr-2"
              />
              <a href="https://wa.me/9779816314006" target="_blank" rel="noreferrer">
                +977 9816314006
              </a>
            </li>
            <li className="flex items-center">
              <img
                src="/assets/images/contact/send.png"
                alt="email"
                className="w-4 h-4 mr-2"
              />
              <a
                href="mailto:arvindpalsingh269@gmail.com"
                className="hover:text-[#77c720] transition-all duration-250 text-white"
              >
                arvindpalsingh269@gmail.com
              </a>
            </li>
          </ul>

          {/* Action Buttons */}
          <ul className="hidden md:flex gap-2 list-none font-bold font-sans mt-2 lg:mt-0">
            <li className="bg-[#77c720] text-white cursor-pointer hover:bg-[#FFBB44] hover:text-black transition-all duration-300 px-4 py-2 rounded-md">
              <Link to="/booking">BOOK OUR SERVICE</Link>
            </li>
            <li className="bg-[#FFBB44] text-black cursor-pointer hover:bg-[#77c720] hover:text-white transition-all duration-300 px-4 py-2 rounded-md">
              <a href="mailto:arvindpalsingh269@gmail.com">EMAIL</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 lg:px-10 xl:px-20 py-4">
          {/* Logo image*/}
          <Link to="/" className="flex items-center gap-2">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
              src="/assets/images/logo.png"
              alt="logo"
              className="h-12 w-58 md:h-20 md:w-90"
            />
          </Link>

          {/* Desktop Menu md to large screens*/}
          <ul className="hidden lg:flex gap-5 xl:gap-8 list-none font-bold text-[16px] text-[#12035E]">
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
                  className="hover:text-[#77c720] transition-all duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* for mobile */}
          <motion.button
           ref={button}
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#12035E] focus:outline-none"
            animate={{
              rotate: menuOpen ? 90 : 0, // rotate when open
              scale: menuOpen ? 1.1 : 1, // scale up when open
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
        </nav>
    </header>
            {/* mobile menu */}
        <nav>
        <AnimatePresence>
        {menuOpen && (
          <motion.ul
          ref={menu} 
          initial={{y:-200,opacity:0}}
          animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : -200 }}
          exit={{y:-200,opacity:0}}
          transition={{ duration: 0.3 }} 
          className="absolute left-0 w-full z-20 flex flex-col items-center bg-white shadow-md lg:hidden py-4 gap-4 font-bold text-[#12035E]">
            {[
              { name: "HOME", path: "/" },
              { name: "ABOUT US", path: "/about" },
              { name: "SERVICES", path: "/services" },
              { name: "PROJECTS", path: "/projects" },
              { name: "GALLERY", path: "/gallery" },
              { name: "CONTACT", path: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <NavLink
                  className={({ isActive }) =>isActive? "border-b-amber-500 border-b-2 font-bold pb-[2px]":"hover:border-b-2"}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </motion.ul>
        )}
        </AnimatePresence>
        </nav>
    </>
  );
}
