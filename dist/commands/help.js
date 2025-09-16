"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
exports.execute = execute;
const discord_js_1 = require("discord.js");
exports.data = new discord_js_1.SlashCommandBuilder()
    .setName("help")
    .setDescription("Lista todos los comandos disponibles");
async function execute(interaction) {
    await interaction.reply("Comandos disponibles: `/ping`, `/help`");
}
