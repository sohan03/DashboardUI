import React from 'react';

const SmallCard = ({ title, value, percentage }) => {
  return (
    <div className='grid grid-cols-6 gap-[20px] mt-[0px] pt-[1px] pb-[10px] margin'>
      
    <div className='h-[120px] w-[180px] bg-white relative cursor-pointer hover:shadow-lg transform hover:scale-[100%] transition duration-300 ease-out'>
      <div className='absolute top-[15px] left-[15px]'>
        <h2 className='text-[14px] leading-[20px] font-bold text-[#0e1020]'>
          {title}
        </h2>
      </div>
      <div className='text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h1 className='text-[20px] leading-[25px] font-semibold'>{value}</h1>
      </div>
      <div className='absolute bottom-[10px] left-[50px]'>
        <h1 className='text-[10px] leading-[25px]'>{percentage}</h1>
      </div>
    </div>
    </div>
  );
};

export default SmallCard;
