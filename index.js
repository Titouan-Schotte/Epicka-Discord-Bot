
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const { exec } = require('child_process');

//Execute commands
function Execute(command){
  exec(command, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return;
    }
    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
}




//Ready
client.on("ready", () => {
  Execute('git init')
  Execute('git remote add origin https://github.com/Titouan-Schotte/ExtensionChromeBot.git')
  Execute('git branch -M main')
  console.log("READY !");
});

//On player add
client.on("guildMemberAdd", member => {
  console.log(`${member.user.tag}`+ " join the server ! ID = " + `${member.id}` + " BOT ? : " + `${member.user.bot}`)
  var worth = true;
  try {
    const data = fs.readFileSync('user.txt', 'UTF-8');
    const lines = data.split(/\r?\n/);
    lines.forEach((line) => {
      if(line == member.id){
        console.log('Already Exist !')
        worth = false;
      }
    });
  } catch (err) {
    console.error(err);
  }
  if(worth){
    console.log('Dont Exist !')
    var content = '\n'+`${member.id}`
    if(!member.user.bot){
      try {
        fs.appendFile("user.txt",content,function (err) {
          if (err) throw err;
          console.log('Saved : ' + `${member.user.tag}`);});
        //git

        Execute('git add .')
        Execute('git commit -m "user.txt update"')
        Execute('git push')



      }
      catch (err) {
        console.error(err);
      }
    }
  }
});

//Login
client.login(config.token);