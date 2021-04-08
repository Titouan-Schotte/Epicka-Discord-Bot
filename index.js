// Initialisation du bot (utilisation de discord.js + redirection vers le fichier config qui contient le token + le préfix qui est ici un #)

const Discord = require('discord.js'),
    client = new Discord.Client({
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    fs = require('fs')
 
client.login(config.token)
client.commands = new Discord.Collection()
 

//Configuration des commandes -> que l'on va ensuite retrouver dans le dossier /commands
fs.readdir('./commands', (err, files) => {
    if (err) throw err
    files.forEach(file => {
        if (!file.endsWith('.js')) return
        const command = require(`./commands/${file}`)
        client.commands.set(command.name, command)
    })
})
 
client.on('message', message => {
    if (message.type !== 'DEFAULT' || message.author.bot) return
 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    command.run(message, args, client)
})


//Statut auto du bot (actualisation toute les 10 secondes)
client.on('ready', () => {
    const statuses = [
        'Dagloth \'s Origins ',
        '#help'
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i], {type: 'PLAYING'})
        i = ++i % statuses.length

    }, 1e4)

})




//Ping dés qu'un utilisateur rentre dans un channel d'aide


client.on('voiceStateUpdate', (oldMember, newMember) => {
    let newUserChannel = newMember.channelID;
    let oldUserChannel = oldMember.channelID;


    const helpchannel1 = "814954869374451835"
    const helpchannel2 = "814973286907772999"

    if(newUserChannel === helpchannel1 || newUserChannel === helpchannel2)
    { 
        console.log("L'utilisateur vient de rejoindre un vocal d'aide avec cette id : "+newUserChannel);
        client.channels.cache.get(`789221213993435177`).send(`__**On a besoin de vous**__ <@&${'766963983366094858'}>`)  
    }
    else {
        console.log("Un utilisateur vient de quitter un salon d'aide avec cette id : "+oldUserChannel)
    }

 });

