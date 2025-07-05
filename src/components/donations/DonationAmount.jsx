import React from 'react';

const AMOUNTS = [20, 45, 80];

export default function DonationAmount({
  selectedAmount,
  setSelectedAmount,
  customAmount,
  setCustomAmount,
  customFocused,
  setCustomFocused
}) {
  const BASE_W = 64;
  const digitCount = customAmount.length;
  const boxW = BASE_W + Math.max(0, Math.min(digitCount - 3, 2)) * 16;
  const customInputStyle = {
    width: boxW,
    minWidth: BASE_W,
    maxWidth: BASE_W + 32,
    transition: 'width 0.2s',
    overflowX: digitCount > 5 ? 'auto' : 'hidden',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  };
  const inputFieldStyle = {
    width: '100%',
    minWidth: 24,
    background: 'transparent',
    overflowX: digitCount > 5 ? 'auto' : 'hidden',
    whiteSpace: 'nowrap',
    textAlign: 'left',
    paddingLeft: '0.25rem',
    zIndex: 2,
  };

  return (
    <div className="flex w-full max-w-xs mb-6 gap-2">
      {AMOUNTS.map(amount => (
        <button
          key={amount}
          className={`w-20 transition-all py-2 rounded-xl border ${selectedAmount === amount && !customFocused
            ? 'bg-[#c5e1b6] border-[#c5e1b6] text-[#3a4d2c]'
            : 'bg-[#f3f4f6] border-gray-200 text-gray-500'
          }`}
          onClick={() => { setSelectedAmount(amount); setCustomFocused(false); setCustomAmount(''); }}
        >${amount}</button>
      ))}
      {/* Custom donation input */}
      <div
        className={`transition-all rounded-xl border ${customFocused
          ? 'bg-[#c5e1b6] border-[#c5e1b6] text-[#3a4d2c]'
          : 'bg-[#f3f4f6] border-gray-200 text-gray-500'
        }`}
        style={customInputStyle}
        onClick={() => { setCustomFocused(true); setSelectedAmount(null); }}
      >
        <div className="relative flex items-center w-full h-full">
          <span className="pl-2 text-lg">$</span>
          <input
            type="text"
            className="py-2 bg-transparent outline-none border-none text-inherit focus:ring-0 w-full"
            value={customAmount}
            onChange={e => setCustomAmount(e.target.value.replace(/[^0-9]/g, ''))}
            onFocus={() => { setCustomFocused(true); setSelectedAmount(null); }}
            onBlur={() => setCustomFocused(false)}
            autoComplete="off"
            style={inputFieldStyle}
          />
          {/* Underline when empty */}
          {customAmount === '' && (
            <span className="absolute left-5 right-2 bottom-2.5 border-b border-gray-400 opacity-60 pointer-events-none" style={{ zIndex: 1, height: '1px' }}></span>
          )}
        </div>
      </div>
    </div>
  );
}