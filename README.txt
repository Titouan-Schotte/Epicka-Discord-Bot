Epicka Dagloth's Origins bot discord 



Présentation :

Bot conçu par Titouan Schotté pour le serveur discord Epicka Dagloth's Origins https://discord.gg/4XSWrtcQzV .
Ce bot est fait en Node.JS et en JavaScript en utilisant la librairie discord.js.


-> Bot en cours de développement !




Comment ça marche ??


Le fichier index.js est le corps principal du bot c’est lui qui va gérer ses agissements (initialisation du bot, commandes, statut dynamique, channel aide, etc..)

Dans ce fichier comme dans tous les fichiers il y a différentes parties que j’ai expliqué en vous mettant des commentaires.
Le fichier index.js est relié aux commandes qui se trouvent toutes dans le dossier « commands » et à la config.json qui contient le préfix (ici «# »)  et le token (ou identifiant de connexion) que vous retrouvez sur le site : https://discord.com/developers/applications

Vous pouvez ajouter des commandes dans le dossier prévu à cela en respectant le schéma (voir Schéma d’une commande.txt)




Si vous voulez lancer le bot : 

Avant toute chose il vous faudra installer Node.JS (il est conseillé de prendre une version la plus récente possible) https://nodejs.org/en/download/
Une fois cela fait vous pouvez exécuter la commande suivante pour booter le bot dans votre terminal : 


>>> node index.js


(n'oubliez pas de glisser le token de votre bot discord dans la config)
