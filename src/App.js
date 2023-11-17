import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import BotSpecs from './components/BotSpecs';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('name'); // Default sorting by name

  useEffect(() => {
    fetch(`http://localhost:3001/bots?_sort=${sortBy}`)
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, [sortBy]);

  useEffect(() => {
    fetch('http://localhost:3001/enlisted')
      .then((response) => response.json())
      .then((data) => setYourBotArmy(data))
      .catch((error) => console.error('Error fetching enlisted bots:', error));
  }, []); // Fetch enlisted bots once on component mount

  const addBotToArmy = (bot) => {
    if (!yourBotArmy.some((b) => b.id === bot.id)) {
      // Placeholder for enlisting the bot on the server
      fetch('http://localhost:3001/enlisted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bot),
      })
        .then((response) => response.json())
        .then((enlistedBot) => setYourBotArmy((prevArmy) => [...prevArmy, enlistedBot]))
        .catch((error) => console.error('Error enlisting bot:', error));
    }
  };

  const removeBotFromArmy = (botId) => {
    fetch(`http://localhost:3001/enlisted/${botId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setYourBotArmy((enlisted) => enlisted.filter((bot) => bot.id !== botId));
        } else {
          throw new Error(`Failed to remove bot with ID ${botId} from army: ${response.statusText}`);
        }
      })
      .catch((error) => console.error(error.message));
  };
  
  

  const dischargeBot = (botId) => {
    // Placeholder for discharging the bot from the server
    fetch(`http://localhost:3001/enlisted/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBots((prevBots) => prevBots.filter((bot) => bot.id !== botId));
        setYourBotArmy((bots) => bots.filter((bot) => bot.id !== botId));
      })
      .catch((error) => console.error('Error discharging bot:', error));
  };

  const selectBot = (bot) => {
    setSelectedBot(bot);
  };

  const goBackToListView = () => {
    setSelectedBot(null);
  };

  const handleSortChange = (value) => {
    setSortBy(value);
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <SortBar onSortChange={handleSortChange} />
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          goBackToListView={goBackToListView}
          addBotToArmy={addBotToArmy}
        />
      ) : (
        <>
         <YourBotArmy
            army={yourBotArmy}
            removeBotFromArmy={removeBotFromArmy}
            dischargeBot={dischargeBot}
          />
          <BotCollection bots={bots} selectBot={selectBot} addBotToArmy={addBotToArmy} />
        </>
      )}
    </div>
  );
};

export default App;

