import Button from "./Button";
import Image from "./Image";

const BlogCard = ({ item }) => {

  const { title, description, image, auth, comment, date } = item;

  return (
    <div className="w-[312px] bg-white border text-left rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:translate-y-[-15px] hover:translate-x-[5px] hover:scale-105 transition-all duration-300 hover:bg-[#F0FCF7]">

      <div className="image w-full h-[200px] relative">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className="p-[2rem]">

        <h3 className="text-[#0C261A] font-Roboto text-[20px] font-medium leading-[28px] hover:text-[#2B8761] transition-all duration-300">
          {title}
        </h3>

        <p className="text-[#69726C] text-[16px] font-medium leading-[24px] mt-2 hover:text-[#515854] transition-all duration-300">
          {description}
        </p>


        <div className="mt-4 flex justify-between text-sm text-[#69726C]">
          <span>By {auth}</span>
          <span>{date}</span>
        </div>

        <div className="mt-2 text-[#2B8761]">
          <span>{comment} Comments</span>
        </div>

        <div className="mt-4 text-center">
          <Button className="w-full text-white border border-green-dark hover:bg-green text-[16px] font-medium text-center py-[13px] px-[22px] rounded-[5px] mt-8 inline-block transition-all duration-500 hover:translate-y-[-10px] hover:translate-x-[5px] hover:scale-105">
            Continue Reading
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;


