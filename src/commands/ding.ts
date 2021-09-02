import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ding')
		.setDescription('Replies with dong!'),
	async execute(interaction) {
		await interaction.reply('dong!');
	},
};
