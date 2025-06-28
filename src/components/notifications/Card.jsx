import React from 'react';
import { X } from 'lucide-react';
import warningIcon from '../../assets/warning.png';
import heartIcon from '../../assets/heart.png';

const Card = ({ type, title, subtitle, button }) => {
  const isAlert = type === 'alert';
  const icon = isAlert ? warningIcon : heartIcon;

  return (
    <div className='relative p-2 pt-3 pb-6 bg-lightgreen rounded-xl shadow-md flex space-x-1 items-start'>
      <button className='absolute top-2 left-2 text-gray-500'>
        <X size={14} />
      </button>

      <img src={icon} alt='icon' className='w-12 h-12 mt-3 mr-2' />
      <div className='flex-1'>
        <div className='text-gray-1000 font-semibold text-lg'>{title}</div>
        <p className='text-gray-500 text-sm'>{subtitle}</p>
      </div>
      <button className='text-xs bg-gray-300 rounded-full text-gray-700 px-3 py-1 absolute bottom-2 right-2'>
        {button}
      </button>
    </div>
  );
};

export default Card;
