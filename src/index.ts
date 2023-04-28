import dotenv from 'dotenv'
dotenv.config()
const config = process.env
import {Client,GatewayIntentBits,Partials,Events,EmbedBuilder} from "discord.js"
const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessageReactions,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.GuildMembers
    ],
    partials: [
      Partials.Channel,
      Partials.Message,
      Partials.User,
      Partials.GuildMember,
      Partials.Reaction
    ]
  });
client.on(Events.VoiceStateUpdate,(old,neww)=>{
    if(old.member?.user.id == client.user.id) return;
    const channel = old.guild.channels.cache.find(
        channel => channel.id === "1101639223313961051"
      )
      const embed = new EmbedBuilder()
      .setDescription(old.channelId?neww.channelId?`<@${old.member.id}>Saiu da call <#${old.channelId}> Entrou na call <#${neww.channelId}>`:`<@${old.member.id}> Saiu da call <#${old.channelId}>`:`<@${old.member.id}> Entrou na call <#${neww.channelId}>`)
      channel.send({embeds:[embed]})
})
client.login(config.token)