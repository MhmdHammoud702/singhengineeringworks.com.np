import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative w-full h-[500px] lg:h-[600px] overflow-hidden min-h-screen'>
        <div className='relative w-full h-[500px] lg:h-[600px] overflow-hidden min-h-screen'>
            <img className='"w-full h-full object-cover "' src='../public/assets/images/gallery-4.jpg' alt='Hero Image' />
        </div>
    </div>
  )
}
const BookService= () => (
  <div>
            <h2>We are helping companies since 1990</h2>
            <p>Become a part of Singh Engineering Works</p>
            <button>Book Or Service</button>
        </div>
)
const OurServices= () => (
  <div>
        <h1>Our Services</h1>
        <p>Providing the best service under single roof.</p>
        <h2>Mechanical</h2>
        <p>Our mechanical design engineers have a working knowledge of many different industries and technologies.</p>
        <h2>Fabrication</h2>
        <p>Custom made order & dimensions fitting your requirements & committed to the complete satisfaction.</p>
        <h2>Erection</h2>
        <p>We provide Mechanical Erection Services for “grass-root” Projects as well as for expansion / revamping.</p>
      </div>
);
const OngoingSection= () => (
      <div>
        <h2>Our Ongoing Works</h2>
        <h1>Building Deep Boring Machine</h1>
        <p>Singh Engineering Works has been providing its regular service to Government of Nepal, Irrigation Project. It has been making Deep Boring Machine of 125 Meters. It has been providing its valued services to all over Nepal and has a very good name in these sectors.</p>
        <button>Contact Now</button>
      </div>
)
const TopProjects= () => (
  <div>
        <h1>Top Projects</h1>
        <p>Things that we have been doing since decades</p>
        <h1>Ferry in Chatara</h1>
        <p>We have made 30 tonnes load bearing ferry and its "The State of Art" of Eastern Region.</p>
        <h1>Water Treatment Plant</h1>
        <p>We have been making water treatment plants in Jhapa, Dang, Morang for Government Offices.</p>
        <h1>Tea Estate Works</h1>
        <p>We deliver all kinds of Tea Estate machines as per as our customers demand.</p>
        <button>View all Projects</button>
      </div>
)
const ProductsAndProjects= () => (
  <>
  <div>
        <h1>Our Products & Projects</h1>
      </div>
      <button>View Our Gallery</button></>
  
)

const Home =()=>{
  return (
    <div>
      <HeroSection/>
    <BookService/>
    <OurServices/>
    <OngoingSection/>
    <TopProjects/>
    <ProductsAndProjects/>
    </div>
    

  )
}
export default Home
