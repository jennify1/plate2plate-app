import React from 'react';
import ProfileButton from './home/ProfileButton';

export default function TopBar() {
  return (
    // light green version
    // <div className="relative w-full h-14 bg-[#C4E4B9] flex items-center justify-center">
    // white/transparent version
    <div className="relative w-full h-14 bg-white flex items-center justify-center bottom-1">
      {/* Centered Title */}
      <h1 className="text-[#C4E4B9] text-lg">SharePlate</h1>

      {/* Left-Aligned Profile Button */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <ProfileButton />
      </div>
    </div>
  );
}
