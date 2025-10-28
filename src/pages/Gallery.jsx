import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react';
const Gallery = () => {
    const [toggle,setToggle] = useState(false);
    const [index,setIndex] = useState(0);
    const Images = Array.from({length:39},(_,i)=> `/assets/images/gallery/${i+1}.jpeg`)
    return (
        <div className="px-4 max-w-6xl mx-auto">
            <div className="mb-16">
                <h1 className="text-4xl sm:text-[48px] text-[#1A1A1A] font-[800] text-center mb-6 mt-6">LATEST PHOTOS</h1>
                <p className="text-[18px] text-[#888888] text-center mb-10">SOME OF OUR LATEST SHOTS WHICH WILL SHOWCASE OUR PROJECTS.</p>

                <div className="grid md:grid-cols-3 gap-2">
                    {
                      Images.map((image,id)=>( 
                            <img key={id} onClick={()=> {setToggle(!toggle);setIndex(id)}}  src={image} alt={`gallery-${id}`} className="w-full h-auto" loading='lazy'/>    
                      ))  
                    }
                    <FsLightbox
                    toggler={toggle} // condition to let the lightbox appear
                    sources={Images} //source of images
                    slide={index+1} //slide image number
                    exitFullscreenOnClose={true} // it disable fullscreen when closing lightbox 
                    onClose={() => setToggle(false)} // closes the lightbox
                />
                </div>
                
            </div>

            <div>
                <h1 className="text-[48px] text-[#1A1A1A] font-[800] text-center mb-6">OUR GALLERY</h1>
                <p className="text-[18px] text-[#888888] text-center mb-10">SOME OF OUR PRECIOUS SHOTS WHICH WILL SHOWCASE OUR PROJECTS.</p>

                <div className="grid md:grid-cols-3 gap-2 mb-10" loading="lazy">
                    <img src='/assets/images/gallery/40.jpg' alt='image4' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/45.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/42.jpg' alt='image6' className="w-full h-auto" loading='lazy' />
                    <img src='/assets/images/gallery/44.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/47.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/48.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/49.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/51.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/53.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/52.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/50.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/54.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/55.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/56.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/60.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/58.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/59.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/57.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/61.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/62.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/63.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/64.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/65.jpeg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/66.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/67.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/68.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/69.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/70.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/71.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/72.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/73.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/74.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/75.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/76.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/77.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/78.jpeg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/79.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/80.jpeg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/41.jpg' alt='image5' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/46.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/43.jpg' alt='image9' className="w-full h-auto" loading='lazy'/>
                    <img src='/assets/images/gallery/81.jpeg' alt='image9' className="w-full h-auto" loading='lazy'/>

                </div>
            </div>
        </div>
    )
}

export default Gallery
