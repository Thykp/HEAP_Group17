import React from 'react';

const BattlePassItem = ({ tier, reward }) => {
  return (
    <div className="inline-block p-4 m-2 bg-n-2 rounded-lg">
      <div className="h3">{tier}</div>
      <div className="body-1">{reward}</div>
    </div>
  );
};

export default BattlePassItem;
