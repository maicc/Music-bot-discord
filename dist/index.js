"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const config_1 = require("./config");
const commands_1 = require("./commands");
const deploy_commands_1 = require("./deploy-commands");
const discord_js_2 = require("discord.js");
const client = new discord_js_1.Client({
    intents: ["Guilds", "GuildMessages", "DirectMessages"],
});
client.once("ready", () => {
    console.log("Ya esta listo el bot!");
});
client.on("guildCreate", async (guild) => {
    await (0, deploy_commands_1.deployCommands)({ guildId: guild.id });
});
client.once(discord_js_2.Events.ClientReady, async (c) => {
    console.log(`✅ Ya está listo el bot: ${c.user.tag}`);
    for (const [guildId] of c.guilds.cache) {
        await (0, deploy_commands_1.deployCommands)({ guildId });
    }
});
client.on("interactionCreate", async (interaction) => {
    if (!interaction.isCommand()) {
        return;
    }
    const { commandName } = interaction;
    if (commands_1.commands[commandName]) {
        commands_1.commands[commandName].execute(interaction);
    }
});
client.login(config_1.config.DISCORD_TOKEN);
