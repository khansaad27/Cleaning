import { FaFacebookF, FaTwitter, FaInstagramSquare, FaPinterestSquare, FaYoutube } from "react-icons/fa";
import Image from "./Image";


const TeamCard = ({ name, role, image, socialLinks }) => {
    return (
        <div className="w-[312px] hover:shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px] transition-all duration-500 transform hover:translate-y-[-10px]">
            <div className="image">
                <Image src={image} alt={`${name}'s image`} width={312} height={312} />
            </div>
            <div className="content border border-[#8FCCB3]/30">
                <h3 className="text-[#0C261A] font-Roboto text-[20px] font-medium leading-[32px] tracking-[0px] text-center mt-4">{name}</h3>
                <p className="text-[#69726C] font-Roboto text-[16px] font-medium leading-[32px] tracking-[0px] text-center">{role}</p>
                <ul className="flex gap-2 items-center justify-center my-4">
                    {socialLinks?.facebook && (
                        <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#1877F2] hover:text-white transition-all duration-300 w-[36px] h-[36px] flex justify-center items-center transform hover:scale-125 hover:rotate-12">
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        </li>
                    )}
                    {socialLinks?.twitter && (
                        <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 w-[36px] h-[36px] flex justify-center items-center transform hover:scale-125 hover:rotate-12">
                            <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        </li>
                    )}
                    {socialLinks?.instagram && (
                        <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#ee2a7b] hover:text-white transition-all duration-300 w-[36px] h-[36px] flex justify-center items-center transform hover:scale-125 hover:rotate-12">
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
                        </li>
                    )}
                    {socialLinks?.youtube && (
                        <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#FF0000] hover:text-white transition-all duration-300 w-[36px] h-[36px] flex justify-center items-center transform hover:scale-125 hover:rotate-12">
                            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
                        </li>
                    )}
                    {socialLinks?.pinterest && (
                        <li className="rounded-[5px] bg-[#2B8761]/10 hover:bg-[#c8232c] hover:text-white transition-all duration-300 w-[36px] h-[36px] flex justify-center items-center transform hover:scale-125 hover:rotate-12">
                            <a href={socialLinks.pinterest} target="_blank" rel="noopener noreferrer"><FaPinterestSquare /></a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default TeamCard;
