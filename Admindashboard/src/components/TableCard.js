import React from 'react';

const TableCard = ({ title}) => {
  return (
    <div className='grid grid-cols-6 gap-[20px] mt-[0px] pt-[1px] pb-[10px] margin'>
      
    <div className='h-[400px] w-[1230px] bg-white relative cursor-pointer hover:shadow-lg transform hover:scale-[100%] transition duration-300 ease-out'>
      <div className='absolute top-[15px] left-[15px]'>
        <h2 className='text-[14px] leading-[20px] font-bold text-[#0e1020]'>
          {title}
        </h2>
      </div>
    </div>
    </div>
  );
};

export default TableCard;
