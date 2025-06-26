import PhoneFrame from "../components/PhoneFrame";
import { Link } from 'react-router-dom';
import CommunityImg from '../assets/CommunityImg.png';

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
      <div className="flex flex-row justify-evenly items-center w-full h-[1.8rem] bg-[#c5e1b6] text-[#9B9C9F] text-xs">
        <div>Discussion</div>
        <div>Featured</div>
        <div>
          <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-1 hover:text-black-400" id="menu-button" aria-expanded="true" aria-haspopup="true">
            More
            <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}

      {/* Drop down for filtering */}

      {/* Cards for listings */}

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