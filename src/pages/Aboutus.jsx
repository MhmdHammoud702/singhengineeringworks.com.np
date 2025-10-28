import React from "react";

const Aboutus = () => {
    return (
        <div className="bg-white py-12 lg:px-50">

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* LEFT CONTENT (2/3 width) */}
                <div className="lg:col-span-2 space-y-10">
                    {/* About Image + Text */}
                    <div className="bg-gray-50">
                        <img
                            src="/assets/images/about us/singh-engg-works-about-photo.jpg"
                            alt="About Singh Engineering Works"
                            className="shadow-md w-full h-auto"
                        />
                        <h2 className="px-5 text-[24px] font-bold text-[#77c720] mt-6 hover:text-[#426f12] transition-colors duration-300">
                            ABOUT SINGH ENGINEERING WORKS
                        </h2>
                        <p className="text-[#333333] text-[18px] px-5 leading-relaxed mt-3">
                            Singh Engineering Works was established in 1990 AD. It has been
                            providing various mechanical works in Nepal. Ranging from ferry,
                            water treatment plants, gas bullets to many other mechanical,
                            fabrication and erection works. We believe in customers’
                            satisfaction.
                            <br />
                            <br />
                            The firm is guided and operated by Mechanical Engineer who has a
                            decades of experience in the same field. Singh Engineering Works
                            has been providing its esteemed services to Government Agencies,
                            International Organisations working for Nepal.
                        </p>
                    </div>

                    <div className="bg-gray-50 h-50 lg:h-25 flex flex-col gap-3 lg:gap-5 lg:flex-row items-center justify-center" >
                        <img src="/assets/images/logo.png" alt="manager logo" className="text-center h-12 sm:h-auto" loading="lazy"/>
                        <img src="/assets/images/about us/managerLogo.png" alt="manager logo" className="text-center h-[70%] lg:h-20 sm:h-auto" loading="lazy"/>
                    </div>

                    {/* Director Message */}
                    <div className="bg-gray-50 px-5">
                        <h2 className="text-[24px] font-bold text-[#77c720] hover:text-[#426f12] transition-colors duration-300">
                            MESSAGE FROM THE DIRECTOR
                        </h2>
                        <div className=" text-[#333333] text-[18px] leading-relaxed mt-3">
                            Namaste & Sat Sriakal, It’s my immense pleasure to introduce
                            myself as a company director of Singh Engineering Works. Singh
                            Engineering was established in 2047 BS (1991 AD) and registered in
                            VAT 2054 BS (1998 AD). We have been creating history in Mechanical
                            Engineering field since decades. Have been building trust & turning
                            every project into milestone. Quality Assurance is the main part in every product & project,
                            hence I personally see every project myself.
                            <br />
                            <br />
                            I would like to thank everyone who is a part of Singh Engineering
                            Works and the people, companies, organisations whom we have been
                            serving till date.
                            <br />
                            <div className="mt-6 text-right">
                                <p className="text-[#77c720] italic text-lg">Arbin Singh</p>
                                <p className="text-[#77c720] italic">Director</p>
                            </div>


                        </div>
                    </div>
                </div>

                {/* RIGHT SIDEBAR (1/3 width) */}
                <div className="space-y-8">
                    {/* Our Works */}
                    <div className="bg-gray-50 p-6 ">
                        <h2 className="text-[24px] font-bold mb-3 ">
                            Our Works
                        </h2>
                        <div className="flex items-center  mb-4">
                            <div className="w-9 h-[3px] bg-[#77c720] rounded"></div>
                            <div className="flex-1 h-[3px] bg-gray-300 rounded"></div>
                        </div>
                        <p className="text-[#333333] text-[18px] leading-relaxed">
                            We have been working with A-class contractors of Nepal.
                            <br />
                            Our company has worked with international companies of Japan,
                            Denmark and Finland.
                            <br />
                            We are capable of providing any kinds of fabrication works.
                            <br />
                            We are currently working on an Indian railway project in Nepal.
                        </p>
                    </div>

                    {/* Our Clients */}
                    <div className="bg-gray-50 p-6 ">
                        <h2 className="text-[24px] font-bold mb-3 ">
                            Our Clients
                        </h2>
                        <div className="flex items-center  mb-4">
                            <div className="w-9 h-[3px] bg-[#77c720] rounded"></div>
                            <div className="flex-1 h-[3px] bg-gray-300 rounded"></div>
                        </div>
                        <ul className="text-[#333333] text-[18px] space-y-2">
                            <li className="flex items-center space-x-4">
                                <img
                                    src="/assets/images/about us/denmark.png"
                                    alt="Denmark flag"
                                    className="h-20 w-25 "
                                />
                                <span>Denish Project: Biratnagar Dairy Border Plant for Globe Met.</span>
                            </li><br />

                            <li className="flex items-center space-x-4"><img src="/assets/images/about us/finland.jpg" alt="finland flag" className="h-20 w-25" /><span>Finnish Project: Heavy Diesel Plant for Wart Sila Oy.</span></li><br />
                            <li className="flex items-center space-x-4"    ><img src="/assets/images/about us/japan.png" alt="japan flag" className="h-20 w-25" /><span>Japanese Project: Gaighat Cement Factory.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;
