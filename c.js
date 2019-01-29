const Discord = require('discord.js');
const client = new Discord.Client();











client.on('ready',  () => {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'); 
  console.log('by safa7');
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log(`Logged in as  * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
  console.log('is online')
client.user.setStatus("dnd");
});

// playing
client.on('ready', () => {                           
client.user.setGame(`OG BOT `,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`-help | On 20 Servers`,'https://www.twitch.tv/v5bz');
});          

client.on('message',async message => {
  if(message.author.bot || message.channel.type === 'dm') return;
  let args = message.content.split(' ');
  if(args[0] === `~bc`) {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send('- **أنت لا تملك الصلاحيات اللازمة لأستخدام هذا الأمر**');
    if(!args[1]) return message.channel.send('- **يجب عليك كتابة الرسالة بعد الأمر**');
  
    let msgCount = 0;
    let errorCount = 0;
    let successCount = 0;
    message.channel.send(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`).then(msg => {
      message.guild.members.forEach(g => {
        g.send(args.slice(1).join(' ')).then(() => {
          successCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        }).catch(e => {
          errorCount++;
          msgCount++;
          msg.edit(`**- [ :bookmark: :: ${msgCount} ] ・عدد الرسائل المرسلة**\n**- [ :inbox_tray: :: ${successCount} ] ・عدد الرسائل المستلمة**\n**- [ :outbox_tray: :: ${errorCount} ]・عدد الرسائل الغير مستلمة**`);
        });
      });
    });
  }
});




client.on('message', message => {
     if (message.content === "~help") {
message.author.send("" + `  **
لأرسال برودكسات أستخدم أمر ~bc (الرسالة)**
 

**`);
    }
});     


client.login(process.env.BOT_TOKEN);//لا تفير فيها شي
