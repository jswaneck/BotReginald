import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Beep!'),
	async execute(interaction) {
		return interaction.reply('Boop!');
	},
};