import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Ping!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};