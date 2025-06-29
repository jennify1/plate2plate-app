import PhoneFrame from "../components/PhoneFrame";
import { Link } from 'react-router-dom';
import CommunityImg from '../assets/CommunityImg.png';
import downArrow from "../assets/down-arrow.svg";
import profilePicture from "../assets/ProfilePicture.png";
import { CommunityPostCard } from "../components/CommunityPostCard";

export const CommunityPage = () => {
  return (
    <PhoneFrame>
      {/* <h1 className="text-xl font-bold">Welcome</h1>
      <p className="text-gray-600">This is the community page of the app.</p> */}

      {/* HEADER */}

      {/* Banner */}
      <div className="flex flex-row justify-center items-center w-full h-[8rem] bg-[#c5e1b6] text-[#6D6E6C] font-medium gap-x-5">
        <div className="text-2xl">SharePlate <br/> Community</div>
        {/* Image */}
        <img className="w-[6rem]" src={CommunityImg} alt="Basket of Produce" />
      </div>

      {/* Seperator */}
      <div className="w-full h-[0.1rem] bg-[#9B9C9F]"></div>

      {/* Tabs */}
      <div className="flex flex-row justify-start items-center w-full h-[2rem] bg-[#c5e1b6] text-[#9B9C9F] text-xs gap-x-6 pl-7">
        <button>Discussion</button>
        <button>Featured</button>
        <button type="button" class="inline-flex gap-x-1.5 py-1 hover:text-black-400 cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true">
          More
          <img src= {downArrow} alt="drop down" className="w-[0.5rem] opacity-60" ></img>
        </button>
      </div>

      {/* Search Bar */}

      <div className="flex flex-row justify-start gap-x-7 items-center bg-[#F5F7F2] shadow-xl/15 rounded-xl mt-5 px-5 pb-2 h-[3.2rem]">
        <img src= {profilePicture} alt="profile picture" className="w-[2rem] h-[2rem]"></img>

        <input type="text" placeholder="Share Something ..." className="bg-[#E1DFDA] rounded-3xl text-[#929496] text-sm py-1 pl-2 pr-18 focus:ring-gray-500 focus:border-gray-500"/> 
      </div>

      {/* Drop down for filtering */}
      <div className="flex flex-row justify-start w-full mt-3 ml-3">
        <button type="button" class="text-sm inline-flex w-full gap-x-1.5 py-1 hover:text-black-400 cursor-pointer" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Most relevent
          <img src= {downArrow} alt="drop down" className="w-[0.5rem] opacity-60" ></img>
        </button>
      </div>

      {/* Cards for listings */}
      <CommunityPostCard></CommunityPostCard>

      {/* FOOTER */}
    </PhoneFrame>
  );
};