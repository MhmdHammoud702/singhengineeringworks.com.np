import React from 'react'
import { Link } from 'react-router-dom';

import { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "/assets/images/home/slide1.jpg",
    "/assets/images/home/slide2.jpg",
    "/assets/images/home/slide3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] overflow-hidden min-h-[700px]">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 cursor-pointer -translate-y-1/2 bg-black/40 text-white text-[55px] px-4 py-6 "
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 cursor-pointer -translate-y-1/2 bg-black/40 text-white text-[55px] px-4 py-6"
      >
        ›
      </button>
    </div>
  );
};

const BookService = () => (
  <div className='bg-[#130346] text-white py-10 flex '>
    <div><h2 className='text-[32px] font-bold px-48'>We are helping companies since 1990</h2>
      <p className='text-[18px] font-semibold px-48'>Become a part of Singh Engineering Works</p></div>

    <button className='px-7 bg-[#0c4a19] text-white font-bold text-[22px] hover:bg-white hover:text-black rounded transition-colors mx-auto block border-5 border-white' style={{ marginTop: '15px' }}>Book Our Service</button>
  </div>
)
const OurServices = () => {
  const services = [
    {
      title: "Mechanical",
      description: "Our mechanical design engineers have a working knowledge of many different industries and technologies.",
      image: "/assets/images/home/mechanical.jpg"
    },
    {
      title: "Fabrication",
      description: "Custom made order & dimensions fitting your requirements & committed to the complete satisfaction.",
      image: "/assets/images/home/fabrication.jpg"
    },
    {
      title: "Erection",
      description: "we provide Mechanical Erection Services for “grass-root” Projects as well as for expansion / revamping.",
      image: "/assets/images/home/erection.jpg"
    },
  ]
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-[48px] text-[#1A1A1A] font-[800] text-center mb-6">OUR SERVICES</h1>
      <p className="text-[18px] text-[#888888] text-center mb-10">PROVIDING THE BEST SERVICE UNDER SINGLE ROOF</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
          >
            <img
              src={service.image}
              alt={service.title}
            />
            <div className="py-3">
              <h2 className="text-[24px]  font-bold text-center">{service.title}</h2>
              <p className="text-gray-700 text-center text-[18px] py-5">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OngoingSection = () => (
  <div className="relative w-full h-70 mb-30">
    <div className="absolute flex flex-col justify-center items-center text-white bg-[url('/assets/images/herobanner.jpg')] min-h-[400px]">
      <p className='font-bold text-[32px] text-[#77C720]'>Our Ongoing Works</p>
      <p className='font-bold text-[48px]'>Building Deep Boring Machine</p>
      <p className='text-[18px] text-center mt-9 px-75'>Singh Engineering Works has been providing its regular service to Government of Nepal, Irrigation Project. It has been making Deep Boring Machine of 125 Meters. It has been providing its valued services to all over Nepal and has a very good name in these sectors.</p>
      <button className='px-7 bg-[#0c4a19] text-white cursor-pointer font-bold text-[22px] hover:bg-white hover:text-black rounded transition-colors mx-auto block border-2 border-yellow-400 py-3 mt-10'><Link to="contact">Contact Now</Link></button>
    </div>
  </div>
)
const TopProjects = () => {
  const projects = [
    {
      title: "Ferry in Chatara",
      description:
        "We have made 30 tonnes load bearing ferry and its The State of Art of Eastern Region.",
      image: "/assets/images/home/event_1.jpg",
    },
    {
      title: "Water Treatment Plant",
      description:
        "We have been making water treatment plants in Jhapa, Dang, Morang for Government Offices.",
      image: "/assets/images/home/event_2.jpg",
    },
    {
      title: "Tea Estate Works",
      description:
        "We deliver all kinds of Tea Estate machines as per as our customers demand.",
      image: "/assets/images/home/event_3.jpg",
    },
  ]
  return (
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-[48px] text-[#1A1A1A] font-[800] text-center mb-6">TOP PROJECTS</h1>
      <p className="text-[18px] text-[#888888] text-center mb-10">THINGS THAT WE HAVE BEEN DOING SINCE DECADES </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover "
            />
            <div className="py-3">
              <h2 className="text-[24px] hover:text-black cursor-pointer font-bold text-[#77C720] py-3">{project.title}</h2>
              <p className="text-gray-700 text-[18px]">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 px-7 py-3 cursor-pointer bg-[#0c4a19] text-white font-bold text-[22px] hover:bg-[#77C720] transition-colors mx-auto block border-2 border-yellow-400"><Link to="projects">View All Projects</Link>
      </button>
    </div>
  );
}

const ProductsAndProjects = () => {
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-[48px] font-[800] text-center mb-14">Our Products & Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <img src="/assets/images/home/gallery_3.jpg" alt="Image 2" className="w-full h-auto" />
        <img src="/assets/images/home/gallery_5.jpg" alt="Image 6" className="w-full h-auto  " />
        <img src="/assets/images/home/gallery_4.jpg" alt="Image 5" className="w-full h-auto" />
        <img src="/assets/images/home/gallery_1.jpg" alt="Image 1" className="w-full h-auto" />
        <img src="/assets/images/home/gallery_2.jpg" alt="Image 4" className="w-full h-auto" />
        <img src="/assets/images/home/gallery_6.jpg" alt="Image 7" className="w-full h-auto" />
        <img src="/assets/images/home/gallery_7.jpg" alt="Image 8" className="w-full h-auto" />
        <img src="/assets/images/home/gallery_8.jpg" alt="Image 3" className="w-full h-auto " />
      </div>

      <button className="mt-10 mb-10 px-7 py-3 bg-[#0c4a19] cursor-pointer text-white font-bold text-[22px] hover:bg-[#77C720] transition-colors mx-auto block border-2 border-yellow-400"><Link to="/gallery">View Our Gallery</Link>
      </button>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BookService />
      <OurServices />
      <OngoingSection />
      <TopProjects />
      <ProductsAndProjects />
    </div>


  )
}
export default Home
