import { SlashCommandBuilder } from '@discordjs/builders';

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poop')
		.setDescription('Replies with poop emoji'),
	async execute(interaction) {
		await interaction.reply(':poop:');
	},
};
