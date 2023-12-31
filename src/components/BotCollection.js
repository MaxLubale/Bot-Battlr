import React from 'react';
import BotCard from './BotCard';

const BotCollection = ({ bots, selectBot,dischargeBot }) => {
  return (
    <div className='bot-collection'>
        <h1>ALL BOTS</h1>
      {bots.map((bot) => (
        <div key={bot.id}>
          <h3>{bot.name}</h3>
          <BotCard key={bot.id} bot={bot} onClick={selectBot} />
          <button className="button red-button" onClick={() => dischargeBot(bot.id)}>X</button>
          
        </div>
      ))}
    </div>
  );
};

export default BotCollection;
