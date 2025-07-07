import React from 'react'
import HeaderIcon from '../assets/HeaderIcon.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <header className="relative flex items-center h-10 mt-3">
      <button
        onClick={toggleDropdown}
        className="absolute left-4 w-7 h-7"
        aria-label="Toggle info dropdown"
      >
        <img
          src={HeaderIcon}
          alt="plate2plate logo"
          className="w-full h-full"
        />
      </button>

      <h1 className="mx-auto text-xl font-semibold text-[#AAD399]">
        plate2plate
      </h1>

      {showDropdown && (
        <div className="absolute top-10 left-4 w-48 p-3 rounded shadow-lg bg-white text-black text-sm z-10 space-y-2">
          <p>Ready to share?</p>
          <Link
            to="/community"
            className="block px-3 py-1 bg-[#AAD399] text-white rounded hover:bg-[#8bbc7c] transition"
          >
            Go to Community
          </Link>
        </div>
      )}
    </header>
  );
};