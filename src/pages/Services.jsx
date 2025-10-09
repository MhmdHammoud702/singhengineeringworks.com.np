import React from "react";

const services = [
    {
        title: "Diesel Plant & Generator Unit",
        description:
            "Diesel Generators play a major role in the Power Generation Industry. These diesel generators are automatically started when an under-voltage relay is activated, usually due to a failed station service transfer when a generating unit is tripped offline.",
        image: "/assets/images/services/diesel-plant1.jpg",
    },
    {
        title: "Water Purification Plants",
        description:
            "Construct your dairy, cheese, and cultured product plant with our engineering-led build approach. Our method of project delivery offers you choices regarding the quality and cost of your finished facility.",
        image: "/assets/images/services/water-purification.jpg",
    },
    {
        title: "Distillery Unit",
        description:
            "Alcohol distilling units of STV type are used for continuous distillation of wine, passivized fruit pulp, fermented starch husk raw materials, diluted wine precipitate, and raw mild brandy.",
        image: "/assets/images/services/distillery-unit1.jpg",
    },
    {
        title: "Mini Boiler Plant",
        description:
            "To construct a boiler that can be assembled/disassembled without much strain. To construct the boiler such that the fire tubes in one drum do not align with the tubes in the next drum.",
        image: "/assets/images/services/mini-boiler1.jpg",
    },
    {
        title: "Small Hydro Plant",
        description:
            "A mini hydropower Plant is planned to be constructed on an artificial irrigation canal with a maximum flow rate of 40 m3/sec and a water head of 20 m.",
        image: "/assets/images/services/hydro-plant1.jpg",
    },
    {
        title: "Deep Boring System",
        description:
            "Irrigation System Selection and Design - Focusing on the types of systems, their components, water application concepts, and system evaluation are goals for this module.",
        image: "/assets/images/services/drip-boring1.jpg",
    },
    {
        title: "Tea Estate Related Machinery",
        description:
            "Construction of withering troughs, green leaf sifter, green leaf shredder, orthodox roller, rotor vane, ctc-rollers, fermentation drum, continuous fermenting machine, ECP drier, etc.",
        image: "/assets/images/services/tea-estate1.jpg",
    },
    {
        title: "Iron Bridge",
        description:
            "Construction of the iron bridge with the most scientific way to minimize the load of the bridge and to maximize the load it can resist.",
        image: "/assets/images/services/iron-bridge1.jpg",
    },
    {
        title: "Construction of Ferry",
        description:
            "Construction of a boat or ship for conveying passengers and goods, especially over a relatively short distance and as a regular service.",
        image: "/assets/images/services/event_11.jpg",
    },
    {
        title: "Sludge Tank",
        description:
            "Separate, dedicated sludge storage tanks are required for sewage and industrial wastewater treatment processes when integral sludge storage is not available as part of the process.",
        image: "/assets/images/services/sludge-1.jpg",
    },
    {
        title: "Fabrication",
        description:
            "Metal fabrication is the building of metal structures by cutting, bending, and assembling processes. It is a value-added process that involves the construction of machines and structures from various raw materials.",
        image: "/assets/images/services/fabrication1.jpg",
    },
    {
        title: "Light and Heavy works",
        description:
            "Light engineering is differentiated from ‘heavy’ engineering in that it generally does not involve the direct use of raw materials, instead performing work using existing pre-fabricated products.",
        image: "/assets/images/services/light-and-heavy.jpg",
    },
    {
        title: "Erection Works",
        description:
            "Our immense infrastructural and outstanding manpower services allow us to bring forth to our clients one of the most excellent and reliable kinds of erection of metal building services.",
        image: "/assets/images/services/erection1.jpg",
    },
    {
        title: "Heavy Structures",
        description:
            "Heavy Structures provides inspired solutions for complex structures. We integrate an optimized structural design with pre-engineered systems, giving you the best value for strength and economy.",
        image: "/assets/images/services/heavy-structures.jpg",
    },
    {
        title: "Light structures",
        description:
            "Light engineering is differentiated from ‘heavy’ engineering in that it generally does not involve the direct use of raw materials, instead performing work using existing pre-fabricated products.",
        image: "/assets/images/services/light-structures.jpg",
    },
];

const Services = () => {
    return (
        <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-[48px] text-[#1A1A1A] font-[800] text-center mb-6">SERVICES</h1>
            <p className="text-[18px] text-[#888888] text-center mb-10">OUR ESTIMATED SERVICES</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div key={index}>
                        <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-64 object-cover "
                        />
                        <div className="py-3">
                            <h2 className="text-[24px] font-bold text-[#77C720] py-3">{service.title}</h2>
                            <p className="text-gray-700 text-[18px]">{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
