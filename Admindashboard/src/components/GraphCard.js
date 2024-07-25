import React from 'react';

const GraphCards = ({ title, children }) => {
  return (
    <div className='h-[280px] w-[280px] bg-white relative cursor-pointer hover:shadow-lg transform hover:scale-[100%] transition duration-300 ease-out'>
      <div className='absolute top-[15px] left-[15px]'>
        <h2 className='text-[14px] leading-[20px] font-bold text-[#0e1020]'>
          {title}
        </h2>
        <div className="w-half pt-1 pr-20 mt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GraphCards;
