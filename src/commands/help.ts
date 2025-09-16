import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const data = new SlashCommandBuilder()
.setName("help")
.setDescription("Lista todos los comandos disponibles");

export async function execute(interaction: CommandInteraction){
    await interaction.reply("Comandos disponibles: `/ping`, `/help`");
}