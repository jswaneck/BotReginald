# BotReginald
Discord bot for shooting_the_breeze.java

## Setup
1. Install the current verison of [Node.js](https://nodejs.org/en/)
2. This should install npm (run `npm -v` to check)
3. If it didn't, run `npm install -g npm@latest`
4. Finally, run `npm install` in the project root

## Testing with you own bot
1. [Setting up a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
2. [Adding your bot to servers](https://discordjs.guide/preparations/adding-your-bot-to-servers.html)
3. Setup a config.json as shown in the src/ folder (you'll need to enable dev settings to get the client and guild id through the right-click in discord):
```
{
	"clientId": "your-bots-id",
	"guildId": "your-guild-id",
	"token": "your-token-goes-here"
}
```

4. Run `npm run deploy` once
5. Run `npm run prod` to start the bot server