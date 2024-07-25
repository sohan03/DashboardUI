import React, { useState } from 'react';
import BigChart from './BigChart'; // Import your BigGraph component

const BigCard = ({ secondtitle, thirdtitle, children }) => {
  const [isSecondTitleVisible, setIsSecondTitleVisible] = useState(false);
  const [isThirdTitleVisible, setIsThirdTitleVisible] = useState(false);

  const toggleSecondTitleVisibility = () => {
    setIsSecondTitleVisible(!isSecondTitleVisible);
    setIsThirdTitleVisible(false); // Close thirdtitle when secondtitle is clicked
  };

  const toggleThirdTitleVisibility = () => {
    setIsThirdTitleVisible(!isThirdTitleVisible);
    setIsSecondTitleVisible(false); // Close secondtitle when thirdtitle is clicked
  };

  return (
    <div className='h-[280px] w-[1230px] bg-white relative cursor-pointer hover:shadow-lg transform hover:scale-[101%] transition duration-300 ease-out'>
      <div className='absolute top-[-5px] left-[25px]'>
        <div style={{ display: 'flex',paddingBottom:10 }}>
          <div onClick={toggleSecondTitleVisibility} style={{ cursor: 'pointer' }}>
            <h2
              className='text-[13px] h-[28px] w-[250px] leading-[20px] text-center text-[#0e1020] mt-4 ml-0.5 hover:bg-sky-400 hover:text-black hover:cursor-pointer transition duration-200'
              style={{ whiteSpace: 'nowrap' }}
            >
              {secondtitle}
            </h2>
          </div>
          <div onClick={toggleThirdTitleVisibility} style={{ cursor: 'pointer' }}>
            <h2
              className='text-[13px] h-[28px] w-[200px] leading-[20px] text-center text-[#0e1020] mt-4 ml-1 hover:bg-sky-400 hover:text-black hover:cursor-pointer transition duration-200'
            >
              {thirdtitle}
            </h2>
          </div>
        </div>
        {isSecondTitleVisible && <BigChart />} {/* Conditionally render the BigChart component for secondtitle */}
        {isThirdTitleVisible && <BigChart />} {/* Conditionally render the BigChart component for thirdtitle */}

        <div className="w-half pt-1 pr-20 mt-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BigCard;
