import React from 'react';

export default function DonationType({ selectedType, setSelectedType }) {
  return (
    <div className="flex w-full max-w-xs mb-4 gap-0.5">
      {['monthly', 'once'].map(type => (
        <button
          key={type}
          className={`flex-1 py-2 transition-colors ${
            selectedType === type
              ? 'bg-[#c5e1b6] text-[#3a4d2c]'
              : 'bg-[#e5e7eb] text-gray-400'
          } ${type === 'monthly' ? 'rounded-l-xl rounded-r-none' : 'rounded-r-xl rounded-l-none'}`}
          style={{
            borderTopRightRadius: type === 'monthly' ? 0 : undefined,
            borderBottomRightRadius: type === 'monthly' ? 0 : undefined,
            borderTopLeftRadius: type === 'once' ? 0 : undefined,
            borderBottomLeftRadius: type === 'once' ? 0 : undefined,
            border: 'none'
          }}
          onClick={() => setSelectedType(type)}
        >
          {`Give ${type}`}
        </button>
      ))}
    </div>
  );
}