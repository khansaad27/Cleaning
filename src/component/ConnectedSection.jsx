import Button from "../layer/Button";
import Container from "../layer/Container";
import Image from "../layer/Image";

const ConnectedSection = ({
  imageSrc,
  imageSr,
  imageS,
  title,
  description,
  button1Text,
  button1Icon,
  button2Text,
  button2Icon,
}) => {
  return (
    <div className="py-[92px] px-16 mt-[56px] bg-[#F2FFFA]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center relative">

        <div className="flex flex-wrap justify-center gap-6 relative">
  <div className="phone w-[437px] h-[562px] z-20 animate-bounce-up">
    <Image src={imageSrc} alt="Stay Connected" />
  </div>
  <div className="absolute left-0 bottom-[20%] -rotate-[55deg] z-0">
    <Image src={imageSr} alt="Stay Connected" />
  </div>
  <div className="absolute left-0 bottom-0 z-10">
    <Image src={imageS} alt="Stay Connected" />
  </div>
</div>





          <div className="content w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-[#0C261A] font-typold text-[24px] font-normal leading-[33px]">{title}</h2>
            <p className="max-w-[435px] mt-4 text-[#515854] font-typold text-[15px] font-normal leading-[24px]">
              {description}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <Button className="py-[14px] px-[55px] bg-black text-[#F2FFFA] font-roboto text-[14px] font-normal leading-[16px] rounded-[5px] flex gap-1 items-center">
                {button1Icon && <img src={button1Icon} alt="Icon" className="w-6 h-6" />}
                {button1Text}
              </Button>
              <Button className="py-[14px] px-[55px] bg-black text-[#F2FFFA] font-roboto text-[14px] font-normal leading-[16px] rounded-[5px] flex gap-1 items-center">
                {button2Icon && <img src={button2Icon} alt="Icon" className="w-6 h-6" />}
                {button2Text}
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default ConnectedSection;
