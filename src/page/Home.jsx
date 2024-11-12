import React from 'react';
import Slider from '../component/Slider';
import FrameOne from '../component/FrameOne';
import ServicesSection from '../component/ServicesSection '
import HomePage from '../component/HomePage';
import PricingSection from '../component/PricingSection';
import TeamMembers from '../component/TeamMembers';
import BlogList from '../component/BlogList';
import ConnectedSection from '../component/ConnectedSection';

const Home = () => {
  return (
    <div className="">
      <Slider />
      <FrameOne />
      <ServicesSection />
      <HomePage />
      <PricingSection />
      <TeamMembers />
      <BlogList />
      <ConnectedSection
        imageSrc="/bns.png"
        imageSr="/Elli.svg"
        imageS="/Ell.svg"    
        title="Stay Connected by Phone"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tincidunt nisl, morbi aliquet gravida. Lorem adipiscing urna."
        button1Text="Google Play"
        button1Icon="/go.png"
        button2Text="Apple Store"
        button2Icon="/ip.png"
      />
    </div>
  );
}

export default Home;
