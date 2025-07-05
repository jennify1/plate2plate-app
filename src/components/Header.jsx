import React from 'react'
import HeaderIcon from '../assets/HeaderIcon.png'

export const Header = () => (
  <header className="relative flex items-center h-10 mt-3">
    <img
      src={HeaderIcon}
      alt="plate2plate logo"
      className="absolute left-4 w-7 h-7"
    />
    <h1 className="mx-auto text-xl font-semibold text-[#AAD399]">
      plate2plate
    </h1>
  </header>
)
