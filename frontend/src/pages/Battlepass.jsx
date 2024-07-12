import React from 'react';
import BattlePassContainer from '../components/Battlepasscontainer';
import BattlePassItem from '../components/Battlepassitem';

const App = () => {
  const battlePassData = [
    { tier: 'Tier 1', reward: 'Reward 1' },
    { tier: 'Tier 2', reward: 'Reward 2' },
    { tier: 'Tier 3', reward: 'Reward 3' },
    // Add more tiers and rewards as needed
  ];

  return (
    <div className="container">
      <h1 className="h1 text-center mb-10">Battle Pass</h1>
      <BattlePassContainer>
        {battlePassData.map((item, index) => (
          <BattlePassItem key={index} tier={item.tier} reward={item.reward} />
        ))}
      </BattlePassContainer>
    </div>
  );
};

export default App;
