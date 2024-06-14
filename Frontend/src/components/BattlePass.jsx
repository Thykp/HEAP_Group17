import React from 'react';
import logo from '../assets/workout.png'; // Ensure this path is correct

const BattlePass = () => {
  const level = 5; // Level constant for easy modification
  const progressPercentage = 57; // Example percentage
  const currentExp = 200;
  const maxExp = 350;

  // Calculate the width of the exp bar dynamically
  const expBarWidth = '90%'; // Set exp bar width to 80% of parent

  return (
    <div className="container my-10 max-w-[550px] max-h-[300px] overflow-hidden">
      <div className="bg-n-6 rounded-lg p-5 shadow-lg h-full">
        <div className="flex justify-between items-center h-full">
          {/* Top Left Section - Logo */}
          <div className="w-[70%] h-full">
            <img src={logo} alt="Logo" className="w-full h-full rounded-lg object-cover" />
          </div>

          {/* Top Right Section - Level Circle */}
          <div className="w-[30%] flex justify-center items-center">
            <div className="relative w-24 h-24 flex justify-center items-center">
              <div className="absolute inset-0 rounded-full border-4 border-color-1"></div>
              <div className="w-20 h-20 bg-n-7 rounded-full flex justify-center items-center text-n-1 font-bold text-center">
                <span className="text-ellipsis overflow-hidden whitespace-nowrap" style={{ fontSize: 'clamp(0.5rem, 2vw, 1.25rem)' }}>
                  Level {level}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bar Section */}
        <div className="relative w-[80%] h-5 rounded-full overflow-hidden my-5 bg-n-3 mx-auto">
          <div className="absolute top-0 left-0 h-full bg-color-1" style={{ width: expBarWidth }}></div>
          <div className="absolute inset-0 flex justify-center items-center text-n-1 font-semibold">
            {currentExp}/{maxExp} XP
          </div>
        </div>
      </div>
    </div>
  );
};

export default BattlePass;
