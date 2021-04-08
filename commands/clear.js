module.exports = {
    run: async (message, args) => {

//permission de gérer les messages ?? -> si oui continuer -> si non message d'erreur
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**__Vous n\'avez pas la permission d\'utiliser cette commande.__**') 
        const count = args[0]


//si la personne n'a pas spécifié le nombre de messages qu'elle veut delete, envoyer message "de renvoie"
        if (!/\d+/.test(count)) return message.channel.send('**__Veuillez indiquer un nombre de messages à supprimer.__**')


//si la personne a proposé un chiffre au dela de 18 ou inférieur à 1, message d'erreur
        if (count < 1 || count > 18) return message.channel.send('__Le nombre de message doit être compris entre **1** et **18**.__')


//suppression des messages + autosuppression à la fin avec un timeout
        const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
        message.channel.send(`**${size - 1} messages ont été supprimés !**`).then(sent => sent.delete({timeout: 5e3}))
    },
    name: 'clear',
    guildOnly: true
}


///DOWN POUR LE MOMENT