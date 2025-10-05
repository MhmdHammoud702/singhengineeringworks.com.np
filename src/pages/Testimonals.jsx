import React from 'react'
const testimonals = [
    {
        title: "Rimesh Bhattarai",
        description: "I found Singh Engineering Works a very professional engineering solutions provider in Biratnagar. Im very thankful to Mr. Singh & his team.",
        image: "/assets/images/testimonals/rimesh1.png",
    },
    {
        title: " Isha Sunam",
        description: "We are very happy with the work of Singh Engineering. Mr. Singh has an adequate knowledge of Water Treatment Plant.",
        image: "/assets/images/testimonals/isha.png",
    },
    {
        title: "Hemnarayan sah",
        description: "I had been searching the best provider for our project. We found Singh Engineering a truly dedicated towards their project.",
        image: "/assets/images/testimonals/hem.png",
    },
]

const Testimonals = () => {
        return (
        <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-[48px] text-[#1A1A1A] font-[800] text-center mb-6">PRECIOUS WORDS</h1>
            <p className="text-[20px] text-[#888888] text-center mb-25">PRECIOUS WORDS FROM OUR PRECIOUS CLIENTS</p>
            <div className="grid lg:grid-cols-3 gap-13">
                {testimonals.map((testimonal, index) => (
                    <div
                        key={index}
                    >
                        <img
                            src={testimonal.image}
                            alt={testimonal.title}
                            className="w- h-  "
                        />
                        <div className="py-3">
                            <h2 className="text-[24px] font-bold text-[#77C720] py-3">{testimonal.title}</h2>
                            <p className="text-gray-700 text-[18px]">{testimonal.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonals
