import CommentImg from "../assets/CommentImg.png";
import MockPostPhoto from "../assets/MockPostPhoto.png";
import ShareImg from "../assets/ShareImg.png";
import SmileyFace from "../assets/SmileyFace.png";
import ThumbsUp from "../assets/ThumbsUp.png";
import HeartImg from "../assets/HeartImg.png";
import profilePicture from "../assets/ProfilePicture.png";

export const CommunityPostCard = () => {
    return (
        <div className="flex flex-col bg-[#F5F7F2] h-auto shadow-xl/20 rounded-2xl px-4 py-3 mt-5">
        {/* Card header */}
        <div className="flex flex-row flex-start w-full p-2 gap-x-3">
          <img src= {profilePicture} alt="profile picture" className="w-[2rem] h-[2rem]"></img>
          <div className="flex flex-col">
            <h2 className="text-sm font-medium"> John Doe </h2>
            <p className="text-xs text-[#929496]"> a day ago</p>
          </div>
        </div>

        {/* Post caption */}
        <p className="text-sm mt-3 px-3"> Still had leftovers from lunch. Glad I was able to share!</p>

        {/* Post Photo */}
        <img src={MockPostPhoto} alt="Post photo" className="mt-3 w-full px-3"></img>

        {/* Likes and comments number */}
        <div className="flex flex-row w-full px-4 pt-2 justify-between text-sm text-[#929496] items-center">
          <div className="relative flex flex-row h-[1rem] pl-[1.8rem]">
            <img src={HeartImg} alt="Heart react" className="absolute left-0 top-0 w-[1rem] h-[1rem] z-20"></img>
            <img src={SmileyFace} alt="Smiley face" className="absolute left-2 top-0 w-[1rem] h-[1rem] z-10"></img>
            <p className=""> 2 </p>
          </div>

          <div className="flex flex-row gap-x-1">
            <p> 2 </p>
            <img src={CommentImg} alt="Comments" className="w-[1.1rem] h-[1.2rem]"></img>
          </div>
        </div>

        {/* Like Comment Share div */}
        <div className="w-full flex flex-col justify-evenly items-center gap-y-2 text-xs text-[#929496] mt-3">
          <div className="w-full bg-[#E1DFDA] h-[0.1rem]"></div>
          <div className="w-full flex flex-row justify-around items-center gap-x-3">
            <button className="flex flex-row cursor-pointer gap-x-1"> 
              <img src={ThumbsUp} alt="Thumbs Up Buttin" className="w-[1rem] h-[1rem]"></img>
              Like 
            </button>
            <button className="flex flex-row cursor-pointer gap-x-1"> 
              <img src={CommentImg} alt="Comment Button" className="w-[1rem] h-[1rem]"></img>
              Comment 
            </button>
            <button className="flex flex-row cursor-pointer gap-x-1"> 
              <img src={ShareImg} alt="Share Button" className="w-[1rem] h-[1rem]"></img>
              Share 
            </button>
          </div>
          <div className="w-full bg-[#E1DFDA] h-[0.1rem]"></div>
        </div>

        {/* Comments section */}
        <div className="flex flex-col justify-evenly w-[18rem] h-auto gap-y-3 px-2 py-4">
          {/* Comments Card */}
          <div className="flex flex-row gap-x-2">
            <img src= {profilePicture} alt="profile picture" className="w-[1.5rem] h-[1.5rem] opacity-90"></img>

            <div className="flex flex-col bg-[#EAE9E4] h-auto w-full gap-x-1 rounded-xl px-3 py-1.5 text-sm">
              <h2 className="font-medium">Sarah</h2>
              <p className="">So grateful for everyone using this app. Food waste is such a big problem!</p>
            </div>
          </div>
        </div>
    </div>

    );
};