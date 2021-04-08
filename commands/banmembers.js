module.exports = {
    run: async (message, args) => {

        //Si user n'a pas la permission pour Ban -> message de refus
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('**Vous n\'avez pas la permission d\'utiliser cette commande.**')

        //Si user a oublié de mentionné l'utilisateur qu'il veut ban -> message d'erreur (pour manque de données)
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('**Veuillez mentionner le membre à bannir.**')

        //Si user tente de ban le propriétaire du serveur (guild.owner) -> message de refus + message de troll
        if (member.id === message.guild.ownerID) return message.channel.send('**Vous ne pouvez pas bannir le propriétaire du serveur. Vous avez perdu la tête !!**')

        //Si user tente de ban une personne op (roles.highest) -> message de refus 
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas Bannir ce membre.')


         //Si user tente de ban une personne qu'il ne peut pas ban -> message d'erreur 
        if (!member.bannable) return message.channel.send('**Le bot ne peut pas bannir ce membre.**')

        //Bannissement
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.ban({reason})
        message.channel.send(`${member.user.tag} **a été banni avec succés !**`)
        console.log(`${member.user.tag} **a été banni avec succés par `+ member)
    },
    name: 'ban',
    guildOnly: true
}