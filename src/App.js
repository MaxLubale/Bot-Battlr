import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import SortBar from './components/SortBar';
import BotSpecs from './components/BotSpecs';
import './App.css';

const App = () => {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('name'); // Default sorting by name

  useEffect(() => {
    fetch(`https://bot-api-ga2w.onrender.com/bots?_sort=${sortBy}`)
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching bots:', error));
  }, [sortBy]);

  useEffect(() => {
    fetch('https://bot-api-ga2w.onrender.com/enlisted')
      .then((response) => response.json())
      .then((data) => setYourBotArmy(data))
      .catch((error) => console.error('Error fetching enlisted bots:', error));
  }, []); // Fetch enlisted bots once on component mount

  const addBotToArmy = (bot) => {
    if (!yourBotArmy.some((b) => b.id === bot.id)) {
      setYourBotArmy((enlisted) => [...enlisted, bot]);

      fetch('https://bot-api-ga2w.onrender.com/enlisted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bot),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to enlist bot: ${response.statusText}`);
          }
        })
        .catch((error) => console.error('Error enlisting bot:', error));
    }
  };

  const removeBotFromArmy = (botId) => {
    fetch(`https://bot-api-ga2w.onrender.com/enlisted/${botId}`, {
      method: 'DELETE',
    })
    .then(() => {
      setBots((bots) => bots.filter((bot) => bot.id !== botId));
      setYourBotArmy((bots) => bots.filter((bot) => bot.id !== botId));
      window.location.reload();
    })
    .catch((error) => console.error('Error Deleting bot:', error));
  };

  const dischargeBot = (botId) => {
    fetch(`https://bot-api-ga2w.onrender.com/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBots((bots) => bots.filter((bot) => bot.id !== botId));
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
      <h1 id='title'>Bot Battlr</h1>
      <SortBar onSortChange={handleSortChange} />
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          goBackToListView={goBackToListView}
          addBotToArmy={addBotToArmy}
        />
      ) : (
        <>
          <YourBotArmy army={yourBotArmy} removeBotFromArmy={removeBotFromArmy} />
          <BotCollection
            bots={bots}
            selectBot={selectBot}
            addBotToArmy={addBotToArmy}
            dischargeBot={dischargeBot}
          />
        </>
      )}
    </div>
  );
};

export default App;
