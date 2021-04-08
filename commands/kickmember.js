module.exports = {
    run: async (message, args) => {

        //Si user n'a pas la permission pour Kick -> message de refus
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('**__Vous n\'avez pas la permission d\'utiliser cette commande.__**')


        //Si user a oublié de mentionné l'utilisateur qu'il veut kick -> message d'erreur (pour manque de données)
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('**__Veuillez mentionner le membre à exclure.__**')

        //Si user tente de kick le propriétaire du serveur (guild.owner) -> message de refus + message de troll
        if (member.id === message.guild.ownerID) return message.channel.send('**__Vous ne pouvez pas exclure le propriétaire du serveur ! Vous êtes fou !!__**')

        //Si user tente de kick une personne op (roles.highest) -> message de refus 
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas exclure ce membre.')
        
        //Si user tente de kick une personne qu'il ne peut pas kick -> message d'erreur 
        if (!member.kickable) return message.channel.send('**Je ne peux pas exclure ce membre !**')

        //Kick 
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.kick(reason)
        message.channel.send(`${member.user.tag} **a été exclu avec succés !**`)
        console.log(`${member.user.tag} **a été kick avec succés par `+ member)
    },
    name: 'kick',
    guildOnly: true
}