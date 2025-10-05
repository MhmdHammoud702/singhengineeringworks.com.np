import React from 'react'

const Gallery = () => {
  return (
    <div className="px-4 max-w-6xl mx-auto">
        <div className="mb-16">
            <h1 className="text-[48px] text-[#1A1A1A] font-[800] text-center mb-6">LATEST PHOTOS</h1>
            <p className="text-[18px] text-[#888888] text-center mb-10">SOME OF OUR LATEST SHOTS WHICH WILL SHOWCASE OUR PROJECTS.</p>
            
            <div className="grid md:grid-cols-3 gap-2">
                <img src='/assets/images/gallery/gallery-1.jpg' alt='gallery-1' className="w-full h-auto"/>
                <img src='/assets/images/gallery/gallery-2.jpg' alt='gallery-2' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-4.jpg' alt='gallery-4' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-5.jpg' alt='gallery-5' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-5.jpg' alt='gallery-6' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-6.jpg' alt='gallery-7' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-7.jpg' alt='gallery-8' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-9.jpg' alt='gallery-10' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-10.jpg' alt='gallery-11' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-11.jpg' alt='gallery-12' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-12.jpg' alt='gallery-13' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-13.jpg' alt='gallery-14' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-14.jpg' alt='gallery-15' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-15.jpg' alt='gallery-16' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-16.jpg' alt='gallery-17' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-17.jpg' alt='gallery-17 ' className="w-full h-auto "/>
                <img src='/assets/images/gallery/gallery-19.jpg' alt='gallery-19' className="w-full h-auto "/>
                {/* Add more images here */}
            </div>
        </div>
        
        <div>
            <h1 className="text-[48px] text-[#1A1A1A] font-[800] text-center mb-6">OUR GALLERY</h1>
            <p className="text-[18px] text-[#888888] text-center mb-10">SOME OF OUR PRECIOUS SHOTS WHICH WILL SHOWCASE OUR PROJECTS.</p>

            <div className="grid md:grid-cols-3 gap-2 mb-10">
                <img src='/assets/images/gallery/gallery-1.jpg' alt='image4' className="w-full h-auto"/>
                <img src='/assets/images/gallery/gallery-4.jpg' alt='image5' className="w-full h-auto"/>
                <img src='/assets/images/gallery/gallery-6.jpg' alt='image6' className="w-full h-auto"/>
                <img src='/assets/images/gallery/gallery-10.jpg' alt='image9' className="w-full h-auto"/>
                <img src='/assets/images/gallery/gallery-11.jpg' alt='image9' className="w-full h-auto"/>
                <img src='/assets/images/gallery/gallery-12.jpg' alt='image9' className="w-full h-auto"/>
                <img src='/assets/images/gallery/gallery-13.jpg' alt='image9' className="w-full h-auto"/>
                <img src='/assets/images/gallery/gallery-14.jpg' alt='image9' className="w-full h-auto"/>
                <img src='/assets/images/gallery/gallery-15.jpg' alt='image9' className="w-full h-auto"/>
                {/* Add more images as needed */}
            </div>
        </div>
    </div>
  )
}

export default Gallery
