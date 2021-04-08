module.exports = {
    run: async (message) => {
        if (!message.member.hasPermission('BAN_MEMBERS' || 'KICK_MEMBERS')) return message.channel.send('**Vous n\'avez pas la permission d\'utiliser cette commande.**')

        let mention = message.mentions.members.first();
        if(mention == undefined){
            console.log("Pas de mention")
            message.reply(`**Veuillez mentionner un membre à warn.**`)
            console.log("Message 'non mention' envoyé")
        }
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('**Vous ne pouvez pas Warn ce membre.**')
        if (!member.bannable) return message.channel.send('**Le bot ne peut pas bannir ce membre.**')
        else{
            message.channel.send("Membre averti")
            console.log("**Message 'membre averti'**")
            mention.roles.add("815520512805306368")
            console.log("Role ajouté à " + mention)
        }
        },
    name:'warn'
}