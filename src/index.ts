import {Client} from 'discord.js';
import { config } from './config';
import { commands } from './commands';
import { deployCommands } from './deploy-commands';
import { Events } from 'discord.js';

const client = new Client({
    intents:["Guilds", "GuildMessages", "DirectMessages"],
});

client.once("ready", ()=>{
    console.log("Ya esta listo el bot!");
})

client.on("guildCreate", async (guild)=>{
    await deployCommands({guildId: guild.id});
})

client.once(Events.ClientReady, async (c)=>{
    console.log (`✅ Ya está listo el bot: ${c.user.tag}`);

    for (const [guildId] of c.guilds.cache){
        await deployCommands({guildId});
    }
})

client.on("interactionCreate", async (interaction) =>{
    if(!interaction.isCommand()){
        return;
    }

    const {commandName} = interaction;
    if(commands[commandName as keyof typeof commands]){
        commands[commandName as keyof typeof commands].execute(interaction);
    }
});

client.login(config.DISCORD_TOKEN);