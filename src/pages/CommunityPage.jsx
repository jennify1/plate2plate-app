import PhoneFrame from "../components/PhoneFrame";
import { Link } from 'react-router-dom';
import CommunityImg from '../assets/CommunityImg.png';
import downArrow from "../assets/down-arrow.svg";
import profilePicture from "../assets/ProfilePicture.png";
import CommentImg from "../assets/CommentImg.png";
import MockPostPhoto from "../assets/MockPostPhoto.png";
import ShareImg from "../assets/ShareImg.png";
import SmileyFace from "../assets/SmileyFace.png";
import ThumbsUp from "../assets/ThumbsUp.png";
import HeartImg from "../assets/HeartImg.png";


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
        <img className="" src={CommunityImg} alt="Basket of Produce" />
      </div>

      {/* Seperator */}
      <div className="w-full h-[0.1rem] bg-[#9B9C9F]"></div>

      {/* Tabs */}
      <div className="flex flex-row justify-start items-center w-full h-[1.8rem] bg-[#c5e1b6] text-[#9B9C9F] text-xs gap-x-5 pl-5">
        <div>Discussion</div>
        <div>Featured</div>
        <div>
          <button type="button" class="inline-flex w-full justify-center gap-x-1.5 py-1 hover:text-black-400" id="menu-button" aria-expanded="true" aria-haspopup="true">
            More
            <img src= {downArrow} alt="drop down" className="w-[0.5rem] opacity-50" ></img>
          </button>
        </div>
      </div>

      {/* Search Bar */}

      <div className="flex flex-row justify-start gap-x-7 items-center bg-[#F5F7F2] shadow-xl/15 rounded-2xl mt-5 px-5 pb-2 h-[3.2rem]">
        <img src= {profilePicture} alt="profile picture" className=""></img>

        <div className="bg-[#E1DFDA] rounded-3xl text-[#929496] text-sm py-1 pl-2 pr-15">
          Share Something ...
        </div>
      </div>

      {/* Drop down for filtering */}
      <div className="flex flex-row justify-start w-full mt-3 ml-3">
        <button type="button" class="text-sm inline-flex w-full gap-x-1.5 py-1 hover:text-black-400" id="menu-button" aria-expanded="true" aria-haspopup="true">
          Most Relevent
          <img src= {downArrow} alt="drop down" className="w-[0.5rem] opacity-50" ></img>
        </button>
      </div>

      {/* Cards for listings */}

      <div className="flex flex-col bg-[#F5F7F2] h-auto shadow-xl/20 rounded-2xl px-5 py-3 mt-5">
        {/* Card header */}
        <div className="flex flex-row flex-start w-full p-2 gap-x-5">
          <img src= {profilePicture} alt="profile picture" className="w-[2.5rem]"></img>
          <div className="flex flex-col">
            <h2 className="text-sm font-medium"> John Doe </h2>
            <p className="text-xs text-[#929496]"> a day ago</p>
          </div>
        </div>

        {/* Post caption */}
        <p className="text-sm mt-3"> Still had leftovers from lunch. Glad I was able to share!</p>

        {/* Post Photo */}
        <img src={MockPostPhoto} alt="Post photo" className="mt-3 w-full"></img>

        {/* Likes and comments number */}

        {/* Like Comment Share div */}
        <div className="w-full flex flex-col justify-evenly items-center gap-y-2 text-xs text-[#929496] mt-3">
          <div className="w-full bg-[#E1DFDA] h-[0.1rem]"></div>
          <div className="w-full flex flex-row justify-around items-center gap-x-3">
            <button> 
              <img src={ThumbsUp} alt="Thumbs Up Buttin" className=""></img>
              Like 
            </button>
            <button> 
              <img src={CommentImg} alt="Comment Button" className=""></img>
              Comment 
            </button>
            <button> 
              <img src={ShareImg} alt="Share Button" className=""></img>
              Share 
            </button>
          </div>
          <div className="w-full bg-[#E1DFDA] h-[0.1rem]"></div>
        </div>

        {/* Comments section */}
        <div className="flex flex-col justify-evenly w-full h-auto gap-y-3 px-2 py-4">
          {/* Comments Card */}
          <div className="flex flex-row gap-x-3">
            <img src= {profilePicture} alt="profile picture" className="w-[2rem] h-[2rem] opacity-90"></img>

            <div className="flex flex-col bg-[#EAE9E4] h-auto w-full gap-x-1 rounded-xl px-3 py-1 text-sm">
              <h2 className="font-medium">Sarah</h2>
              <p>So grateful for everyone using this app. Food waste is such a big problem!</p>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER */}
    </PhoneFrame>
  );
};

// import PhoneFrame from "../components/PhoneFrame";
// import { Link } from 'react-router-dom';
// export const CommunityPage = () => {
//   return (
//     <PhoneFrame>
//       <h1 className="text-xl font-bold">Welcome</h1>
//       <p className="text-gray-600">This is the community page of the app.</p>
//     </PhoneFrame>
//   );
// };