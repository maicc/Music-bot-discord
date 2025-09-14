import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
.setName("ping")
.setDescription("Ping");

export async function execute(interaction: CommandInteraction){
    return interaction.reply("Te pingeo butoooo");
}