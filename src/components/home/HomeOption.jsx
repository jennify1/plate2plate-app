import React from 'react';

export default function HomeOption({ title, subtitle, icon }) {
  return (
    <div className="relative w-[230px] h-[110px] bg-[#F1F6EF] rounded-[38px] flex flex-col items-center justify-center text-center shadow-sm pt-8">
      {/* Icon that overflows the top */}
      <img
        src={icon}
        alt=""
        className="w-[90px] h-[90px] object-contain absolute -top-12"
      />

      {/* Text Content */}
      <h2 className="text-[22px] font-semibold text-[#333] -mb-1">{title}</h2>
      <p className="text-[14px] text-[#999D98]">{subtitle}</p>
    </div>
  );
}
