import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            title: "Nepal Oil Corporation Limited",
            description: "We have worked with Nepal Oil Corporation Limited in Biratnagar, Pokhara, Thankot & Amlekhganj. It is responsible for importing, storing, distributing, and selling petroleum products in the country.",
            image: "/assets/images/projects/nepal-oil-nigam.jpg"
        },
        {
            title: "Concrete Pole Plant",
            description: "We have constructed concrete pole plants in various places like Amlekhganj, Tanki, and Pokhara. The process of manufacturing concrete poles typically involves casting concrete into molds, reinforcing them with steel rods or fibers to increase strength, and curing them until they reach the required strength for installation.",
            image: "/assets/images/projects/pole.jpg"
        },
        {
            title: "Steel Structure Building",
            description: "Building a steel structure for a three-story building offers numerous advantages in terms of durability, flexibility, and sustainability. Steel is renowned for its strength-to-weight ratio, making it an ideal material for constructing multi-story buildings.",
            image: "/assets/images/projects/steel-structure.jpg"
        },
        {
            title: "Department Of Irrigation",
            description: "We have worked with the Department of Irrigation to install Filter plants and Retreatment plants to ensure efficient water purification processes.",
            image: "/assets/images/projects/irrigation.jpg"
        },
        {
            title: "Dairy Development Corporation (DDC)",
            description: "The corporation plays a crucial role in ensuring food security, generating employment opportunities, and contributing to the economy of Nepal through the dairy industry.",
            image: "/assets/images/projects/ddc.jpg"
        },
        {
            title: "Biratnagar Airport",
            description: "The collaboration between Singh Engineering Works and Biratnagar Airport underscores the importance of reliable and robust oil storage infrastructure in supporting the aviation sector's needs.",
            image: "/assets/images/projects/Biratnagar-Airport.jpg"
        },
        {
            title: "Heavy Structure LED Pole and Frame",
            description: "A heavy structure LED pole and frame offers a robust and durable solution for outdoor lighting needs. Designed to withstand harsh weather conditions and heavy loads, these poles and frames are typically constructed using high-quality materials such as steel or aluminum.",
            image: "/assets/images/projects/diesel-plant2.jpg"
        },
        {
            title: "Installation of LED Board",
            description: "The installation of an LED board in the Ilam market represents a significant step towards modernizing and enhancing the visibility of businesses in the area. LED boards offer numerous advantages over traditional signage.",
            image: "/assets/images/projects/LED-Board.jpg"
        },
        {
            title: "Diesel Plant & Generator Unit",
            description: "Diesel Generators play a major role in the Power Generation Industry. These diesel generators are automatically started when an under-voltage relay is activated, usually due to a failed station service transfer when a generating unit is tripped offline.",
            image: "/assets/images/projects/diesel-plant1.jpg"
        },
        {
            title: "Border Plant of Dairy",
            description: "Construct your dairy, cheese, and cultured product plant with our engineering-led build approach. Our method of project delivery offers you choices regarding the quality and cost of your finished facility.",
            image: "/assets/images/projects/border-plant1.jpg"
        },
        {
            title: "Distillery Unit",
            description: "Alcohol distilling units of STV type are used for continuous distillation of wine, passivized fruit pulp, fermented starch husk raw materials, diluted wine precipitate, and raw mild brandy.",
            image: "/assets/images/projects/distillery-unit1.jpg"
        },
        {
            title: "Mini Boiler",
            description: "To construct a boiler that can be assembled/disassembled without much strain. To construct the boiler such that the fire tubes in one drum do not align with the tubes in the next drum.",
            image: "/assets/images/projects/mini-boiler1.jpg"
        },
        {
            title: "Small Hydro Plant",
            description: "A mini hydropower plant is planned to be constructed on an artificial irrigation canal with a maximum flow rate of 40 m3/sec and a water head of 20 m.",
            image: "/assets/images/projects/hydro-plant1.jpg"
        },
        {
            title: "Deep Boring Proportion Machine",
            description: "Irrigation System Selection and Design - Focusing on the types of systems, their components, water application concepts, and system evaluation are goals for this module.",
            image: "/assets/images/projects/drip-boring1.jpg"
        },
        {
            title: "Construction of Ferry",
            description: "Construction of a boat or ship for conveying passengers and goods, especially over a relatively short distance and as a regular service.",
            image: "/assets/images/projects/event_11.jpg"
        },
        {
            title: "Iron Bridge",
            description: "Construction of the iron bridge with the most scientific way to minimize the load of the bridge and to maximize the load it can resist.",
            image: "/assets/images/projects/iron-bridge1.jpg"
        },
        {
            title: "Tea Estate Related Machines",
            description: "Construction of withering troughs, green leaf sifter, green leaf shredder, orthodox roller, rotor vane, ctc-rollers, fermentation drum, continuous fermenting machine, ECP drier, etc.",
            image: "/assets/images/projects/tea-estate1.jpg"
        },
        {
            title: "Water Purification Plants",
            description: "Providing you the best range of water purification plants, mineral water plants, packaged drinking water plants, water treatment plants, drinking water plants, and water filtering systems with effective & timely delivery.",
            image: "/assets/images/projects/water-purification1.jpg"
        }
    ];

    return (
        <div className="max-w-6xl mx-auto px-6 py-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" key={index}>
                        <img src={project.image} alt={project.title} className="w-full h-80 object-cover rounded-b-lg" />
                        <div className="p-6">
                            <h3 className="text-[24px] font-bold hover:text-[#77c720] cursor-pointer text-gray-800">{project.title}</h3>
                            <p className="text-gray-600 mt-4 text-[18px]">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className="mt-15 px-7 py-3 bg-[#0c4a19] cursor-pointer text-white font-bold text-[22px] hover:bg-[#77C720] transition-colors mx-auto block border-2 border-yellow-500" onClick={()=>window.scrollTo(0,0)}><Link to="/gallery">More can be seen on Gallery Page</Link>

            </button>
        </div>
    );
};

export default Projects;
