import React from 'react';

const BattlePassContainer = ({ children }) => {
  return (
    <div className="w-full overflow-x-scroll whitespace-nowrap">
      {children}
    </div>
  );
};

export default BattlePassContainer;
