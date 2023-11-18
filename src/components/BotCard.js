import React from 'react';

const BotCard = ({ bot, onClick }) => {
  const { name, bot_class, avatar_url} = bot;

  return (
    <div className="bot-card" onClick={() => onClick(bot)}>
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <p>Class: {bot_class}</p>
      
    </div>
  );
};

export default BotCard;
