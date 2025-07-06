import React from 'react';
import ProfilePicture from '../../assets/ProfilePicture.png';

export default function ProfileButton({ onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open profile"
      className={`
        relative
        w-10 h-10
        rounded-full
        overflow-hidden
        border-2 border-gray-300
        hover:ring-2 hover:ring-blue-400
        transition-all
        ${className}
      `}
    >
      <img
        src={ProfilePicture}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </button>
  );
}
