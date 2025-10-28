import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HeroSection = () => {
  const [loading,setLoading] = useState(true);
  const images = [
    "/assets/images/home/slide1.jpg",
    "/assets/images/home/slide2.jpg",
    "/assets/images/home/slide3.jpg",
  ];

  // const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const goNext = () => {
    swiperRef.current?.slideNext();
  };

  const goPrev = () => {
    swiperRef.current?.slidePrev();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      swiperRef.current?.slideNext();
    }, 6000);
    return () => clearInterval(interval);
  });

    // const nextSlide = () => {
    //   setDirection("next")
    //   setCurrentIndex((next) => (next === images.length - 1 ? 0 : next + 1));
    // };

    // const prevSlide = () => {
    //   setDirection("prev")
    //   setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    // };
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div
        className="relative flex transition-transform duration-700 ease-in-out"
      >
        <Swiper 
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={0} slidesPerView={1} loop={images.length > 1}>
        {images.map((img, id) => (
        <SwiperSlide key={id}>
          {loading && <div className='flex items-center justify-center h-[200px] '><span className="loader"></span></div>}
          <img src={img} alt={id} className="w-full h-full object-cover z-0" onLoad={()=>setLoading(false)}/>
        </SwiperSlide>
        ))}
       </Swiper>
      </div>
      <button
        onClick={goPrev}
        className="hidden absolute sm:flex h-35 z-10 items-center justify-center left-0 top-1/2 cursor-pointer -translate-y-1/2 bg-black/40 hover:bg-black/25 text-white hover:text-white/90 text-[98px] px-5 transition-all duration-500"
       >
         <span className='pb-5'>‹</span>
       </button>
       <button
        onClick={goNext}
        className="hidden absolute sm:flex h-35 z-10 items-center justify-center right-0 top-1/2 cursor-pointer -translate-y-1/2 bg-black/40 hover:bg-black/25 text-white hover:text-white/90 text-[98px] px-5 transition-all duration-500"
        >
          <span className='pb-5'>›</span>
        </button>
    </div>
  );
};

const BookService = () => (
  <div className='bg-[#130346] text-white flex flex-col sm:flex-row items-center justify-between sm:gap-10 py-6 px-5 sm:px-10 lg:px-30 xl:px-50'>
    <div className='text-center sm:text-start'>
      <h2 className='text-3xl md:text-4xl lg:text-[34px] font-bold'>We are helping companies since 1990</h2>
      <p className='text-[18px] font-semibold pt-4'>Become a part of Singh Engineering Works</p>
      </div>
      <div className='pb-4'>
        <button className='px-7 py-2 bg-[#0c4a19] text-white font-bold text-[18px] md:text-[24px] hover:bg-white hover:text-black rounded transition-colors duration-500 delay-150 mx-auto block border-5 border-white cursor-pointer' style={{ marginTop: '15px' }} onClick={()=>window.scrollTo(0,0)}><Link to={'booking'}>Book Our Service</Link></button>
      </div>
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
      <h1 className="text-4xl pt-8 sm:text-[48px] text-[#1A1A1A] font-[800] text-center mb-6">OUR SERVICES</h1>
      <p className="text-[18px] text-[#888888] text-center mb-10">PROVIDING THE BEST SERVICE UNDER SINGLE ROOF</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
          >
            <img
              src={service.image}
              alt={service.title}
              loading='lazy'
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
 <div className="relative w-full h-full bg-[url('/assets/images/herobanner.jpg')] bg-cover bg-center bg-black/80 bg-blend-multiply">
  <div className="flex flex-col items-center justify-center text-center text-white max-w-5xl mx-auto px-4">
    <p className="font-bold text-[34px] text-[#77C720] pt-5">Our Ongoing Works</p>
    <p className="font-bold text-[24px] sm:text-[50px] mt-2">Building Deep Boring Machine</p>
    <p className="flex text-[18px] mt-9 lg:px-[45px] text-center w-full">
      Singh Engineering Works has been providing its regular service to Government of Nepal, Irrigation Project. It has been making Deep Boring Machine of 125 Meters. It has been providing its valued services to all over Nepal and has a very good name in these sectors.
    </p>

    <div className="flex flex-col items-center w-full max-w-4xl space-y-4 mt-10">
      <div className="flex items-center justify-between w-full text-2xl font-semibold">
        <div className="text-[#77C720]">STARTED:</div>
        <div>COMPLETED</div>
      </div>
      <div className="relative w-full border-4 border-white bg-white h-5 rounded-md">
        <div className="absolute h-full left-0 w-[90%] bg-[#77c720]"></div>
        <div className="absolute h-12 w-12 left-[90%] -translate-x-1/2 -top-4 bg-white border-4 border-[#77c720] rounded-full flex items-center justify-center text-black text-sm">
          90%
        </div>
      </div>
    </div>

    <Link
      to="contact"
      onClick={() => window.scrollTo(0, 0)}
      className="px-7 bg-[#0c4a19] text-white font-bold text-[22px] hover:bg-white hover:text-black rounded transition-colors mx-auto block border-2 border-yellow-400 py-3 mt-10 text-center mb-5"
    >
      Contact Now
    </Link>
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
      <h1 className="text-4xl pt-8 sm:text-[48px] text-[#1A1A1A] font-[800] text-center mb-6">TOP PROJECTS</h1>
      <p className="text-[18px] text-[#888888] text-center mb-10">THINGS THAT WE HAVE BEEN DOING SINCE DECADES </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
          >
            <img
              loading='lazy'
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover "
            />
            <div className="py-3 text-center">
              <h2 className="text-[24px] hover:text-black cursor-pointer font-bold text-[#77C720] py-3">{project.title}</h2>
              <p className="text-gray-700 text-[18px]">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-10 px-7 py-3 cursor-pointer bg-[#0c4a19] text-white font-bold text-[22px] hover:bg-[#77C720] transition-colors mx-auto block border-2 border-yellow-400" onClick={()=>window.scrollTo(0,0)}><Link to="projects">View All Projects</Link>
      </button>
    </div>
  );
}

const ProductsAndProjects = () => {
  const images = Array.from({length:8},(_,i)=> `/assets/images/home/gallery_${i+1}.jpg`)
  return (
    <div className="container mx-auto p-2">
      <h1 className="text-4xl pt-6 sm:text-[48px] font-[800] text-center mb-14">Our Products & Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {images.map((image,i)=>(
          <img key={i} src={image} alt={`Image ${i}`} className="w-full h-auto " loading='lazy' />
        ))}
      </div>

      <button className="mt-10 mb-10 px-7 py-3 bg-[#0c4a19] cursor-pointer text-white font-bold text-[22px] hover:bg-[#77C720] transition-colors mx-auto block border-2 border-yellow-400" onClick={()=>window.scrollTo(0,0)}><Link to="/gallery">View Our Gallery</Link>
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
