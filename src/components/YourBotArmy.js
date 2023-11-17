import React, { useState, useEffect } from 'react';

const YourBotArmy = ({ removeBotFromArmy}) => {
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/enlisted')
      .then((response) => response.json())
      .then((data) => setEnlistedBots(data))
      .catch((error) => console.error('Error fetching enlisted bots:', error));
  }, []);

  return (
    <div>
      <h2>Your Enlisted Bot Army</h2>
      <div className="enlisted-bot">
        {enlistedBots.map((bot) => (
          <div key={bot.id} className="enlisted-bot">
            {/* Render enlisted bot details */}
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.bot_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => removeBotFromArmy(bot.id)}>Remove from Army</button>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;

