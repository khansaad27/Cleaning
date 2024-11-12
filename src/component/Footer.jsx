import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../layer/Container';
import Li from '../layer/Li';
import Button from '../layer/Button';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 mt-[71px]">
      <Container>
        <div className="flex flex-wrap justify-between">

          <div className="w-[336px]">
            <h2 className="text-green font-typold text-[24px] font-extrabold leading-[33px] tracking-tight uppercase">Cleaning.Co</h2>
            <p className="mt-6 text-[#515854] font-typold text-[14px] font-normal leading-[24px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id consectetur in integer ullamcorper ut in. Suspendisse et amet faucibus a duis sapien. Et vitae augue integer at arcu, hac a. Nunc facilisis vitae erat in nam eu at consectetur nec erat.
            </p>
          </div>

          <div>
            <h3 className="text-[#0C261A] font-typold text-[20px] font-medium leading-[27px]">Services</h3>
            <ul className="mt-6 space-y-2">
              {['Residential Clean', 'Commercial Clean', 'Window Cleaning', 'Outdoor Furniture', 'Laundry Services', 'Car Wash', 'Sofa Wash'].map(service => (
                <Li key={service}>{service}</Li>
              ))}
            </ul>
          </div>


          <div>
            <h3 className="text-[#0C261A] font-typold text-[20px] font-medium leading-[27px]">Useful Links</h3>
            <ul className="mt-6 space-y-2">
              {['Projects', 'Blog', 'About Us', 'Contact Us'].map(link => (
                <Li key={link}>{link}</Li>
              ))}
            </ul>
          </div>


          <div >
            <h3 className="text-[#0C261A] font-typold text-[20px] font-medium leading-[27px]">Subscribe to Newsletter</h3>
            <div className=" space-y-6 ">
            <input
              type="email"
              placeholder="Your Email address"
              className="border border-green outline-green w-full p-4 mt-6 rounded-[5px]"
            />
            <Button>
              Subscribe
            </Button>
            </div>


          </div>
        </div>


        <div className="border-t border-[#8FCCB3] mt-[71px]">
          <div className="py-4 flex justify-between items-center">
            <div className="flex items-center gap-[26px]">
              <span className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">2022 @Cleaning.Co</span>
              <p className="text-[#515854] font-typold text-[14px] font-normal leading-[22px]">All rights reserved</p>
            </div>
            <div className="flex items-center gap-[26px]">
              <Link to="#" className="text-[#515854] font-typold text-[14px] font-normal leading-[22px] hover:underline">
                Terms and Conditions
              </Link>
              <Link to="#" className="text-[#515854] font-typold text-[14px] font-normal leading-[22px] hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
