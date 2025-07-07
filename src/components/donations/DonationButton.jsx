import React from 'react';

export default function DonationButton() {
  return (
    <div className="w-full flex justify-center">
      <button
        className="w-40 py-3 rounded-full bg-[#f3f4f6] text-gray-700 text-lg flex items-center justify-center gap-2 shadow mb-4 active:bg-[#c5e1b6] transition-colors"
      >
        DONATE!
        <span className="ml-2 flex items-center justify-center rounded-full" style={{ background: '#c5e1b6', width: '1.8em', height: '1.8em' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="14" fill="#c5e1b6"/>
            <path d="M11 8L17 14L11 20" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
  );
}