import React from 'react';

const BotSpecs = ({ bot, goBackToListView, addBotToArmy }) => {
  return (
    <div className="bot-specs" >
      <h2>Bot Specifications</h2>
      <div>
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <p>Catchphrase: {bot.catchphrase}</p>
        <p>Created at: {bot.created_at}</p>
        <p>Updated at:  {bot.updated_at}</p>
        <button onClick={() => addBotToArmy(bot)}>Enlist Bot</button>
        <button onClick={goBackToListView}>Go Back</button>
      </div>
    </div>
  );
};

export default BotSpecs;

