import { IoIosCheckmark } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import Image from "../layer/Image";
import Container from "../layer/Container";
import Button from "../layer/Button";

const MainSection = () => {
  return (
    <div className="bg-[#F2FFFA] py-[264px]">
      <Container>
        <div className="flex justify-between items-center gap-0 flex-wrap relative">
          <ImageSection />
          <ContentSection />
        </div>
      </Container>
    </div>
  );
};

const ImageSection = () => {
  return (
    <div className="w-1/2">
      <div className="w-[362px] h-[379px] border border-[#2B8761] rounded-[10px] relative mx-auto">
        <MainImage />
        <CardInfo />
        <DecorativeDot />
      </div>
    </div>
  );
};

const MainImage = () => (
  <div className="w-[184px] h-[253px] rounded-[10px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <Image src="/hd.svg" alt="Image" className="rounded-[10px]" />
  </div>
);

const CardInfo = () => (
  <div className="w-full  h-[283px] z-50 bg-white py-8 px-4 absolute left-[73px] bottom-0 translate-y-1/2 rounded-[10px]">
    <div className="flex justify-between items-center">
      <PersonInfo />
      <ContactIcons />
    </div>
    <p className="mt-[35px] text-[#6a6a6a] font-Roboto text-[14px] leading-[24px]">
      Cleaning Co is one of the fastest-growing outsource service and cleaning service provider companies in Bangladesh and abroad. Smart Force prides itself on being the pioneer outsource service company.
    </p>
  </div>
);

const PersonInfo = () => (
  <div className="flex gap-2 items-center">
    <div className="w-[70px] h-[70px] rounded-full">
      <Image src="/ban.svg" alt="src" className="rounded-full" />
    </div>
    <div>
      <h3 className="text-[#1c1c1c] font-Roboto text-[20px] font-bold leading-[30px]">A.j Hanna</h3>
      <p className="text-[#838383] font-Roboto text-[14px] font-normal leading-[18px]">CEO</p>
    </div>
  </div>
);

const ContactIcons = () => (
  <div className="flex gap-2 items-center cursor-pointer text-gray-400">
    <IoCallOutline className="text-lg" />
    <CiMail className="text-lg" />
  </div>
);

const DecorativeDot = () => (
  <div className="w-[287px] h-[287px] rounded-[10px] absolute -left-[50px] bottom-0 translate-y-1/2">
    <Image src="/dot.png" alt="dot" className="rounded-[10px]" />
  </div>
);

const ContentSection = () => {
  return (
    <div className=" w-1/2 mt-6">
      <div className="w-[575px] ml-auto space-y-4">
        <Title />
        <FeaturesList />
        <LearnMoreButton />
      </div>
    </div>
  );
};

const Title = () => (
  <h2 className="text-[#0c261a] border border-green py-[16px] pl-[16px] pr-[57px] rounded font-Roboto text-[28px] font-medium leading-[38px]">
    The Best help in cleaning the house.
  </h2>
);

const FeaturesList = () => (
  <ul className="mt-6 border border-green py-[16px] pl-[16px] pr-[57px] rounded space-y-2">
    {[
      "Our team professional and experienced.",
      "Quick and efficient cleaning service.",
      "100% satisfaction guaranteed.",
      "Highly disciplined in the workplace.",
    ].map((feature, idx) => (
      <Feature key={idx} text={feature} />
    ))}
  </ul>
);

const Feature = ({ text }) => (
  <li className="text-[#515854] font-Roboto text-[16px] leading-[26px] flex gap-2 items-center">
    <span className="bg-[#b7ded8] text-[#2B8761] rounded-[5px]">
      <IoIosCheckmark />
    </span>
    {text}
  </li>
);

const LearnMoreButton = () => <Button>Learn More</Button>;

export default MainSection;
