import React, { useState } from 'react';
import PhoneFrame from "../components/PhoneFrame";
import coinsImg from '../assets/coins.png';
import DonationType from '../components/donations/DonationType';
import DonationAmount from '../components/donations/DonationAmount';
import DonationButton from '../components/donations/DonationButton';

export const DonationsPage = () => {
  const [selectedType, setSelectedType] = useState('once');
  const [selectedAmount, setSelectedAmount] = useState(20);
  const [customFocused, setCustomFocused] = useState(false);
  const [customAmount, setCustomAmount] = useState('');

  return (
    <PhoneFrame>
      <div className="relative flex flex-col min-h-[calc(667px-2.5rem)] bg-white pt-10 pb-20 px-0 overflow-hidden font-sans">
        {/* Coin image background */}
        <img src={coinsImg} alt="Coins" className="absolute right-4 top-0 opacity-80 z-0 w-[440px] h-[340px] object-contain pointer-events-none select-none" />
        {/* Main content */}
        <div className="flex flex-col items-start pt-2 relative z-10 w-full max-w-[90%] mx-auto">
          {/* Donation message */}
          <div className="text-[2.1rem] mb-2 text-gray-500 leading-tight break-words w-full">
            Your donation<br /><span>will help</span>
          </div>
          {/* Program name */}
          <div className="text-[2.5rem] mb-6 text-black leading-tight font-bold break-words w-full">
            Australia's<br />Zero Hunger<br />Program.
          </div>
          <DonationType selectedType={selectedType} setSelectedType={setSelectedType} />
          <DonationAmount
            selectedAmount={selectedAmount}
            setSelectedAmount={setSelectedAmount}
            customAmount={customAmount}
            setCustomAmount={setCustomAmount}
            customFocused={customFocused}
            setCustomFocused={setCustomFocused}
          />
          <DonationButton />
        </div>
      </div>
    </PhoneFrame>
  );
};