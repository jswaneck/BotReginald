const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('day')
		.setDescription('Says the current day of the week'),
	async execute(interaction) {
        let d = new Date();
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        let response = weekday[d.getDay()];
        if (response == "Wednesday")
        {
            response += " My Dudes";
        }
		await interaction.reply('It is' + response);
	},
};