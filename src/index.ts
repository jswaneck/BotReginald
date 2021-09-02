const fs = require("fs")
import { Client, Collection, Intents } from 'discord.js';
import * as config from './config.json';

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

let commands:Collection<string, any> = new Collection<string, any>();
const commandFiles = fs.readdirSync('./dist/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(config.token);