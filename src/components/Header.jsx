import React from 'react';
import HeaderIcon from '../assets/HeaderIcon.png';

export const Header = ({ toggleNotifications }) => {
  return (
    <header className="relative flex items-center h-10 mt-3">
      <button
        onClick={toggleNotifications}
        className="absolute left-4 w-7 h-7"
        aria-label="Toggle notifications"
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
    </header>
  );
};
