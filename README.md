## Bot Battlr - React Web App
  Welcome to Bot Battlr, the ultimate destination in the known universe where you can build your own Bot Army! This React web app allows you to browse through a list of robots, view their details, and enlist them into your galactic army.

# Getting Started

1. Clone the repository:
  - git clone https://github.com/MaxLubale/Bot-Battlr.git
  
2. Install dependencies:
  - npm install

3. Start the development server:
  - npm start

4. Now you're ready to explore Bot Battlr and build your ultimate Bot Army! May the bots be with you.

# As a user, you should be able to:

- See profiles of all bots rendered in the BotCollection.

-  Add an individual bot to your army by clicking on it. The selected bot should render in the YourBotArmy component. The bot can be  enlisted only once, and it does not disappear from the BotCollection.

- Release a bot from your army by clicking on it. The bot disappears from the YourBotArmy component.

- Discharge a bot from service forever by clicking the red button marked "x," which deletes the bot from both the backend and the YourBotArmy on the frontend.

- Choose to enlist a bot or see their data by clicking on the card, displaying a show view (BotSpecs) for that bot. This should replace BotCollection. BotSpecs should have buttons to go back to the list view and enlist that bot.

- Sort bots by their health, damage, or armor using a new component, SortBar.

- Filter bots by their class with the ability to select multiple filters.

- Only enlist one bot from each bot_class. The classes are ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"].

# Project Structure
  The project is structured with several components:

- BotCollection: Renders profiles of all bots.
- YourBotArmy: Displays enlisted bots and allows their removal.
- SortBar: Provides sorting options for bots.
- BotSpecs: Shows detailed specifications of a selected bot.

# Technologies Used
- React
- JSON Server

## Contributing
 If you'd like to contribute to Bot Battlr, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and commit them.
4. Push your changes to your fork.
5. Create a pull request.

  Happy coding, and may the bots be ever in your favor!

## License
This project is licensed under the MIT License - see the [LICENSE] file for details.