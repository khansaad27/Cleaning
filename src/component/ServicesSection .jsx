import React from "react";
import Image from "../layer/Image";
import Container from "../layer/Container";

const ServicesPage = () => {
    const services = [
        {
            id: 1,
            title: "Residential Cleaning",
            description: "Your dedicated representative available 24/7. No automated systems, just personal support.",
            image: "/h.svg"
        },
        {
            id: 2,
            title: "Commercial Cleaning",
            description: "Reliable cleaning services, with a dedicated representative available around the clock.",
            image: "/hh.png"
        },
        {
            id: 3,
            title: "Event Cleanup",
            description: "Post-event cleaning service ensuring your venue is spotless with professional care.",
            image: "/e.png"
        },
        {
            id: 4,
            title: "Window Cleaning",
            description: "Specialized window cleaning for homes and offices, offering crystal-clear results.",
            image: "/w.png"
        },
        {
            id: 5,
            title: "Outdoor Furniture",
            description: "Expert cleaning for outdoor furniture, restoring shine and durability.",
            image: "/o.png"
        },
        {
            id: 6,
            title: "Laundry Service",
            description: "Premium laundry services for a fresh, clean environment.",
            image: "/l.png"
        },
        {
            id: 7,
            title: "Car Wash",
            description: "Full-service car wash, ensuring your vehicle is spotless and fresh.",
            image: "/c.png"
        },
        {
            id: 8,
            title: "Sofa Cleaning",
            description: "Post-construction or renovation cleaning to remove dust, debris, and materials.",
            image: "/s.png"
        }
    ];

    return (
        <div className="py-[90px] bg-[linear-gradient(90deg,_rgba(225,_245,_238,_0.9682)_15%,_rgba(242,_247,_245,_1)_51%,_rgba(244,_247,_246,_0.6993)_95%,_rgba(245,_252,_250,_1)_100%,_rgba(246,_246,_247,_1)_100%)]">
            <Container>
                <div className="mx-auto">
                    <div className="text-start mb-12">
                        <h2 className="text-[#0c261a] font-Roboto text-[28px] font-medium leading-[36px]">Our Professional Services</h2>
                        <p className="text-[#515854] max-w-[552px] mt-[10px] font-Roboto text-[16px] font-normal leading-[24px] tracking-[0.25px]">
                            Transforming Cleaning & Facility Services with Expertise and Care.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-start gap-6">
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="service-card w-[312px] group py-12 px-8 bg-white relative overflow-hidden hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] transition-all duration-500   rounded-lg"
                            >
                                {/* Image */}
                                <div className="service-image w-[72px] h-[72px] mb-6 relative z-20 ">
                                    <Image src={service.image} alt={service.title} imgClassName=' group-hover:bg-white ' className="  transition-all duration-500 z-20 relative " />
                                </div>

                                {/* Title */}
                                <h2 className="service-title text-[#0c261a] font-Roboto text-[20px] font-medium leading-[30px] group-hover:text-white  transition-all duration-500 z-20 relative">
                                    {service.title}
                                </h2>

                                {/* Description */}
                                <p className="service-description text-[#515854]  font-Roboto text-[14px] font-normal leading-[22px] mt-2 mb-6 group-hover:text-white transition-all duration-500 z-20 relative">
                                    {service.description}
                                </p>

                                {/* Button */}
                                <button className="book-button py-[14px] px-6 text-[#2B8761] border border-[#2B8761] group-hover:bg-white transition-all duration-500 rounded-[5px] z-20 relative">
                                    Book Now
                                </button>

                                {/* Circle Effect */}
                                <div className="circle-effect w-[191px] h-[191px] group-hover:w-[435px] group-hover:h-[650px] absolute -right-[60px] group-hover:-right-[65px] -top-[60px] group-hover:-top-[68px] transition-all duration-500  group-hover:bg-[#65a593] group-hover:opacity-95  group-hover:rounded-full">
                                    <Image src="/cer.png" alt={service.title} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ServicesPage;










// import React from 'react';
// import Container from '../layer/Container';
// import Image from '../layer/Image';
// import Button from '../layer/Button';

// const ServicesGrid = () => {
//   return (
//     <div className="">
//       <Container>
//         <div className=" mt-[48px] max-w-[312px] h-[372px] px-[32px] pt-[48px] pb-[68px]  flex flex-col  items-start gap-y-[24px] w-[312px] hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]
//  transition-all duration-500 ">
//           <div className="w-[72px] h-[72px]">
//             <Image src='/h.png' />
//           </div>
//           <h4>Residential Cleaning</h4>
//           <p>You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.</p>
//           <Button>
//           Book Now
//         </Button>
//         </div>

//       </Container>
//     </div>
//   );
// };

// export default ServicesGrid;

{/* <div className="w-[312px] hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px]
 transition-all duration-500 ">
            <div className="image ">
                <Image src='/h.png'></Image>
            </div>
            <div className="content border border-[#8FCCB3]/30">
                <h3 className="text-[#0C261A] font-Roboto  text-[20px] font-medium leading-[32px] tracking-[0px] text-center mt-4">Residential Cleaning</h3>
                <p className="text-[#69726C] font-Roboto  text-[16px] font-medium leading-[32px] tracking-[0px] text-center">You’ll have your own moving representative on-call, any time of day or night. No automated systems or unanswered questions.</p>
                <ul className="flex gap-2 items-center justify-center my-4">
                    <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#1877F2] hover:text-white transition-all duration-500 w-[36px] h-[36px] flex justify-center items-center"><FaFacebookF /></li>
                    <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#1DA1F2] hover:text-white transition-all duration-500 w-[36px] h-[36px] flex justify-center items-center" ><FaTwitter /></li>
                    <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#ee2a7b] hover:text-white transition-all duration-500 w-[36px] h-[36px] flex justify-center items-center" ><FaInstagramSquare /></li>
                    <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#FF0000] hover:text-white transition-all duration-500 w-[36px] h-[36px] flex justify-center items-center"><FaYoutube /></li>
                    <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#c8232c] hover:text-white transition-all duration-500 w-[36px] h-[36px] flex justify-center items-center" ><FaPinterestSquare /></li>
                </ul>
            </div>
        </div> */}

