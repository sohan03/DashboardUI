import React from 'react';

const DropdownSelector = ({ options, selectedValue, onChange, label }) => {
  return (
    <div>
      <h1 className='text-[14px] leading-[20px] font-semibold text-[#5a5c69]'>
        {label}
      </h1>
      <select
        value={selectedValue}
        onChange={onChange}
        className='block w-40 mt-2 px-2 py-1 border rounded-sm bg-gray-150 text-[13px] leading-[18px] font-semibold text-[#5a5c69] hover:shadow-lg transform hover:scale-103% transition duration-300 ease-out'
        >
        {options.map((option) => (
            <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
     </div>
        
  );
};

export default DropdownSelector;
