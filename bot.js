const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "S."

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    client.user.setActivity("S.help | S.invite",{type: 'WATCHING'})

});




client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) {
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل 24 ساعه
 اكتب
 S.support لدخول سيرفر الدعم :smile:
 S.invite للحصول على رابط دخول البوت ٍ
**
        ***__General orders__***
**
『${prefix}server/يعرض لك معلومات عن السيرفر』
『${prefix}count/يعرض لك عدد الاشخاص بالسيرفر بدون بوتات』
『${prefix}invites/ يعرض لك  عدد انفايتاتك بالسيرفر 』
『${prefix}inv-info <invitelink here> / لمعلومات عن الدعوه』
『 مثال : invinfo m82n8P
『${prefix}giveaway / يعمل لك جيف اواى 』
『${prefix}top/يعرض لك روابط الانفايتات حكك في السيرفر 』
『${prefix}perms/ يقولك البرمشنات الى حقق فى السيرفر 』
『${prefix}say/يكرر الكلام الي تكتبو』
『${prefix}image/صورة السيرفر』
『${prefix}members/عرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص』
『${prefix}id/معلومات عنك』
『${prefix}bans / عدد الاشخاص المبندة 』
『${prefix}image/يعرض لك صوره السيرفر』
『${prefix}support/سيرفر الدعم』
『${prefix}link/يعرض لك لينك السيرفر لكل يوم انفيت』
『${prefix}find/للبحث عن عضو معين』
**
        ***__Administrative Orders__***
**
『${prefix}move @user /  لسحب الشخص الى روومك』
『${prefix}temp / انشا روم مؤقت  』
『${prefix}setvoice /يصنع لك ساعه و فويس اونلاين وتاريخ 』
『${prefix}bc / رسالة جماعية الى كل اعضاء السيرفر』
『${prefix}bk <everyone or @role> / راسال رساله جماعيه لرتبه محدده』
『${prefix}hc / اخفاء الشات』
『${prefix}sc / اضهار الشات المخفية』
『${prefix}clear <numbr> / مسح الشات بعدد』
『${prefix}kick @user <reason> / طرد الشخص من السيرفر』
『${prefix}ban @user <reason> / حضر الشخص من السيرفر』
『${prefix}mc / تقفيل الشات』
『${prefix}unmc / فتح الشات』
**
   `,`
        ***__Games orders__***
 **
『${prefix}marry  / لعبه التزاوج بس منشن للى تبيه』
『${prefix}sra7a /لعب صراحة』
『${prefix}نكت مرا فله/نكت』
『${prefix}معلومات عامه/ هل تعلم』
『${prefix}hack / لعبه الهاكر بس منشن حد』
『${prefix}نكت مرا فله/نكت』
『${prefix}لعبه مريم واساله ونت تجاوب فويس/مريم』
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;

      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});







client.on('message', message => {
    if (message.content.startsWith("S.id")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('**المعلومات التى توصل لها البوت** ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('**عدد السيرفرات التى تملكها**', [client.guilds.size], true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("** اسمك **", `${message.author.username}`)
            .addField('** التاج **', message.author.discriminator)
            .addField('**الايدى حقك**', message.author.id)
            .addField('**Bot**', message.author.bot)
            .addField('**تاريخ دخولك الديسكورد**', message.author.createdAt)
    })
}
});


client.on('message', message => {
       if(message.content.startsWith(`S.support`)){
           if(!message.channel.guild) return message.channel.send("This Command is Just For Servers!")
           var embed = new Discord.RichEmbed()
           .setTitle("Support Server Click here")
           .setURL("https://discord.gg/tbGU6tr")
           .setTimestamp()
           .setColor("RANDOM")
           message.channel.send({embed})
       }
   });

   client.on('message', msg => {
     if(msg.content === 'هلا')
                 setTimeout(function() {
   msg.reply('هلا حبي')
                 }, 10000)
   });


   client.on('message', msg => {
     if(msg.content === 'Galal')
                 setTimeout(function() {
   msg.reply('غور ياض جلال بطل ينيك عيال')
                 }, 10000)
   });




   client.on('message', msg => {
     if(msg.content === 'S.help')
                 setTimeout(function() {
   msg.reply('**تم الارسال بالخاص**')
                 }, 10000)
   });



   client.on('message', msg => {
     if(msg.content === 'S.invite')
                 setTimeout(function() {
   msg.reply('**تم الارسال بالخاص رابط البوت**')
                 }, 10000)
   });


   client.on('message', msg => {
     if(msg.content === 'S.setvoice')
                 setTimeout(function() {
   msg.reply('تم')
                 }, 10000)
   });



   client.on('message',async msg => {
        if(msg.channel.type === "dm") return;
     if(msg.author.bot) return;
     var p = "S.";
     if(msg.content.startsWith(p + "setvoice")) {
     if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **لا تملك رتبه لذلك**');
     if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
     var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
              var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                   var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                      var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
          al.setParent(kk);
          alp.setParent(kk);
          alph.setParent(kk);

        al.overwritePermissions(msg.guild.id, {
         CONNECT: false,
         SPEAK: false
       });
        alp.overwritePermissions(msg.guild.id, {
         CONNECT: false,
         SPEAK: false
       });
        alph.overwritePermissions(msg.guild.id, {
         CONNECT: false,
         SPEAK: false
       });
     setInterval(() => {
         var currentTime = new Date(),
   hours = currentTime.getHours() + 0 ,
   minutes = currentTime.getMinutes(),
   Seconds = currentTime.getSeconds(),
   Year = currentTime.getFullYear(),
   Month = currentTime.getMonth() + 1,
   Dat = currentTime.getDate()
   if (minutes < 10) {
   minutes = "0" + minutes;
   }
   var suffix = "AM";
   if (hours >= 12) {
   suffix = "PM";
   hours = hours - 12;
   }
   if (hours == 0) {
   hours = 12;
   }
        al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
         alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
           alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
    },1000);
                      })

                   })
              })
     })

     }

   });



   client.on('message', message => {
                 if (!message.channel.guild) return;
         if(message.content =='S.members')
         var kayan = new Discord.RichEmbed()
         .setThumbnail(message.author.avatarURL)
         .setFooter(message.author.username, message.author.avatarURL)
         .setTitle('🌷| Members info')
         .addBlankField(true)
         .addField('📗| Online',
         `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
         .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
         .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
         .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
         .addField('➡| Server Members',`${message.guild.memberCount}`)
         message.channel.send(kayan);

       });



       client.on('message', async msg => {
             client.snek = require('snekfetch');
           var p = "S."
         if(msg.content.startsWith(p + "say")) {
          let args = msg.content.split(' ').slice(1).join(' ');
         if(!args) return args.missing(msg, 'No text added', this.help);
         msg.channel.startTyping();
         const searchMessage = await msg.channel.send('🖌️Painting...');
         const { body } = await client.snek.get(`https://nekobot.xyz/api/imagegen?type=clyde&text=${encodeURIComponent(args)}`);
         msg.channel.send({file: { attachment:body.message, name: 'clyde.png'}}).then(()=> { searchMessage.delete(); msg.channel.stopTyping(); });
       };
       });





       client.on('message', message => {
            if (message.content === "S.servers") {
                if(!message.channel.guild) return;
            let embed = new Discord.RichEmbed()
         .setColor("RANDOM")
         .addField("**سيرفرات يلي البوت موجود فيها: **" , client.guilds.size)
         message.channel.sendEmbed(embed);
           }
       });





       client.on('message', message => {
           if (message.content.startsWith("S.hack")) {
             if (message.author.bot) return
                  message.delete();
                    let args = message.content.split(' ').slice(1);
                          let virusname = args.join(' ');
                        if (virusname < 1) {
                            return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                            }
                        message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
                    setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
                    }, 1000)
                   setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
                    }, 2000)
                  setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
                    }, 3000)
                       setTimeout(function() {
                      m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
                    }, 4000)
                     setTimeout(function() {
                      m.delete()
                  }, 5000)
                    setTimeout(function() {
                      message.channel.send('تم تهكيرك')
                  }, 6000)
                  });
                }
        });




        client.on('message', message => {
        if (message.content.startsWith('S.inv-info')) {
        let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ;
          let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
          let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
          message.guild.fetchInvites().then(invs => {
            let member = client.guilds.get(message.guild.id).members.get(oi);
            let personalInvites = invs.filter(i => i.inviter.id === oi);
            let urll = invs.filter(i => i.inviter.id === oi);
            let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
           let exec = personalInvites.reduce((p, v) => v.inviter);
         let possibleInvites = [['Total de membros recrutados:']];
        possibleInvites.push([inviteCount, exec]);
                let user = message.mentions.users.first() || message.author;
                let mem = message.guild.member(user);
                let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
                let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
        const alpha = new Discord.RichEmbed()
        .setAuthor(img)
        .addField('🏆 Invite Infos',  `\n\n► لقد قمت باضافه  \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضضمت لسيرفر منذ\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)
        .setThumbnail(imagemm)
        .setColor(0x4959e9);
        message.channel.send(alpha);

        });

        };
          });




          client.on('message', message => {
              var command = message.content.split(" ")[0];
              var prefix = 'S.';
              var args1 = message.content.split(" ").slice(1).join(" ");
              if(command == prefix + 'find') {
                  let sizePlayers = 1;

                  if(message.author.bot) return;
                  if(!message.channel.guild) return;
                  if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}find (اي حرف من الاسم الي تبيه)`).then(msg => msg.delete(5000));

                  var playersFind = new Discord.RichEmbed()
                  .setTitle(`:white_check_mark: **البحث عن اسم العضو**`)
                  .setThumbnail(client.user.avatarURL)
                  .setDescription(`**\n➥ البحث عن الاعضاء الموجود بداخل اسمائهم:**\n " ${args1} "\n\n**➥ عدد الاعضاء:**\n " ${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).size} "\n\n\`\`\`════════════════════════════════════════════════════════════════════════════════════════\n\n${message.guild.members.filter(m=>m.user.username.toUpperCase().includes(args1.toUpperCase())).map(m=>sizePlayers++ + '. ' + m.user.tag).slice(0,20).join('\n') || 'لا يوجد اعضاء بهذه الاحرف'}\n\n════════════════════════════════════════════════════════════════════════════════════════\`\`\``)
                  .setColor('GRAY')
                  .setTimestamp()
                  .setFooter(message.author.tag, message.author.avatarURL)

                  message.channel.send(playersFind);
                  message.delete();
              }
          });





          const devs = ['200644160179535872' , '' , '' , ''];
          const adminprefix = "S.";
          client.on('message', message => {
              var argresult = message.content.split(` `).slice(1).join(' ');
                if (!devs.includes(message.author.id)) return;

            if (message.content.startsWith(adminprefix + 'ply')) {
              client.user.setGame(argresult);
                message.channel.sendMessage(`**✅   ${argresult}**`)
            } else
            if (message.content.startsWith(adminprefix + 'wt')) {
            client.user.setActivity(argresult, {type:'WATCHING'});
                message.channel.sendMessage(`**✅   ${argresult}**`)
            } else
            if (message.content.startsWith(adminprefix + 'ls')) {
            client.user.setActivity(argresult , {type:'LISTENING'});
                message.channel.sendMessage(`**✅   ${argresult}**`)
            } else
            if (message.content.startsWith(adminprefix + 'st')) {
              client.user.setGame(argresult, "https://www.twitch.tv/حب بلا حدود");
                message.channel.sendMessage(`**✅   ${argresult}**`)
            }
            });



            client.on('message', message => {
                 if(message.content.startsWith("S.clear")) {
                     var args = message.content.split(" ").slice(1);
             if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('You need MANAGE_MESSAGES permission noob');
              if (!args[0]) return message.channel.send('  مثل #clear 1 ضح عدد الرسائل التى تريد مسحها!!!');

              message.channel.bulkDelete(args[0]).then(() => {
                const embed = new Discord.RichEmbed()
                  .setColor(0xF16104)
                  .setDescription(`Cleared ${args[0]} messages.`);
                message.channel.send({ embed });

                const actionlog = message.guild.channels.find('name', 'logs');

                if (!actionlog) return message.channel.send('تم المسح بنجاح');
                const embedlog = new Discord.RichEmbed()
                  .setDescription('~Purge~')
                  .setColor(0xF16104)
                  .addField('Purged By', `<@${message.author.id}> with ID ${message.author.id}`)
                  .addField('Purged in', message.channel)
                  .addField('Time', message.createdAt);
                actionlog.send(embedlog);

              });
            };

            });













            client.on("message", (message) => {
                        if (message.channel.type === "dm") {
                    if (message.author.id === client.user.id) return;
                    let yumz = new Discord.RichEmbed()
                                .setTimestamp()
                                .setTitle("Direct Message To The Bot")
                                .addField(`Sent By:`, `<@${message.author.id}>`)
                                .setColor("RANDOM")
                                .setThumbnail(message.author.displayAvatarURL)
                                .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                                .setFooter(`DM Bot Messages | DM Logs`)
                            client.users.get("200644160179535872").send(yumz)
                        }
            });





            const misaka = new Set();
                client.on('message', async msg => {
              if(msg.content.startsWith("S.link")) {
              if (misaka.has(msg.author.id)) {
                let misakaemb = new Discord.RichEmbed()
                .setDescription(`يجب عليك الانتظار 24 ساعه!`)
                .setColor(`RED`)
                return msg.channel.send(misakaemb).then(message => {
                 message.delete(10000)
                })

                }
                misaka.add(msg.author.id);


               msg.channel.createInvite({
                    thing: true,
                    maxUses: 5,
                    maxAge: 86400,
              }).then(invite =>
               msg.author.sendMessage(`
                     <@${msg.author.id}>
                     **maxUses: 5 **
                     ${invite.url}`)
              )
                msg.channel.send(`**:link: تم بعت اللينك الخاص بالسيرفر فى الخاص**`)
              }
                setTimeout(() => {
                },86400000);
                })




                client.on('message',message =>{
                    var prefix = "S.";
                    if(message.content.startsWith(prefix + 'top')) {
                  message.guild.fetchInvites().then(i =>{
                  var invites = [];

                  i.forEach(inv =>{
                    var [invs,i]=[{},null];

                    if(inv.maxUses){
                        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
                    }else{
                        invs[inv.code] =+ inv.uses;
                    }
                        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);

                  });
                  var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
                  .setThumbnail("https://i.imgur.com/OM00xyh.png")
                           message.channel.send({ embed: embed });

                  });

                    }
                  });







                  client.on('message', message => {
                           if (message.content.startsWith("S.bot")) {
                    let embed = new Discord.RichEmbed()
               .setThumbnail(message.author.avatarURL)
               .addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
               .addField(' الاعضاء👥 ',` [${client.users.size}] `)
               .addField('الرومات📚 ',`[${client.channels.size}]`)
               .addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`)
               .addField(`Galal#7423`)
               .setColor('#7d2dbe')
                 message.channel.sendEmbed(embed);
                   }
               });









               client.on('message', message => {
                           if(!message.channel.guild) return;
               let args = message.content.split(' ').slice(1).join(' ');
               if (message.content.startsWith('S.abc')){
                if (message.author.id !== '200644160179535872') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
               message.channel.sendMessage('جار ارسال الرسالة |✅')
               client.users.forEach(m =>{
               m.sendMessage(args)
               })
               }
               });


               client.on('guildCreate', guild => {
                 var embed = new Discord.RichEmbed()
                 .setColor(0x5500ff)
                 .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
                     guild.owner.send(embed)
               });







               client.on('message', message => {
                   var prefix = "S."
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "ban")) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "ban") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 /*let b5bzlog = client.channels.find("name", "5bz-log");
                 if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).ban(7, user);

                 const banembed = new Discord.RichEmbed()
                 .setAuthor(`BANNED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : banembed
                 })
               }
               });







               client.on('message', message => {
                   var prefix = "S."
                 if (message.author.x5bz) return;
                 if (!message.content.startsWith(prefix + "kick" )) return;

                 let command = message.content.split(" ")[0];
                 command = command.slice(prefix.length);

                 let args = message.content.split(" ").slice(1);

                 if (command == "kick") {
                              if(!message.channel.guild) return message.reply('** This command only for servers**');

                 if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
                 if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
                 let user = message.mentions.users.first();
                 let reason = message.content.split(" ").slice(2).join(" ");
                 if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
                 if(!reason) return message.reply ("**اكتب سبب الطرد**");
                 if (!message.guild.member(user)
                 .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

                 message.guild.member(user).kick();

                 const kickembed = new Discord.RichEmbed()
                 .setAuthor(`KICKED!`, user.displayAvatarURL)
                 .setColor("RANDOM")
                 .setTimestamp()
                 .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
                 .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
                 .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
                 message.channel.send({
                   embed : kickembed
                 })
               }
               });



               client.on('message', message => {
                   if (message.content.startsWith("S.bans")) {
                       message.guild.fetchBans()
                       .then(bans => message.channel.send(`${bans.size} **الاشخاص المتنده من السيرفر هم ** `))
                 .catch(console.error);
               }
               });



               client.on('message', message => {
                   if(message.channel.type === "dm") return;
                     if(message.content.startsWith ("S.marry")) {
                     if(!message.channel.guild) return message.reply(' This command only for servers ')
                     var proposed = message.mentions.members.first()

                     if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
                     if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت تذكر لازم بنت الحلال').catch(console.error);
                      if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
                       if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
                             message.channel.send(`**${proposed}
                بدك تقبلي عرض الزواج من ${message.author}
                العرض لمدة 10 ثانية
                اكتب موافقة او لا**`)

               const filter = m => m.content.startsWith("موافقة");
               message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
               .then(collected =>{
                   message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
               })
                  .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول قلللوش مبروك**`))

                  const filte = m => m.content.startsWith("لا");
               message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
               .then(collected =>{
                  message.channel.send(`**${message.author} تم رفض عرضك**`);
               })




                 }
               });





               const Sra7a = [
                   'صراحه  |  صوتك حلوة؟',
                   'صراحه  |  ضربت عشره قبل كدا؟',
                   'صراحه  |  كم مره اتبعبصت؟',
                   'صراحه  |  ما هو اكثر موقف محرج حصل لك؟',
                   'صراحه  |  التقيت الناس مع وجوهين؟',
                   'صراحه  |  هل بصيت على طياز البنات من قبل؟',
                   'صراحه  |  شيء وكنت تحقق اللسان؟',
                   'صراحه  |  أنا شخص ضعيف عندما؟',
                   'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
                   'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
                   'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
                   'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
                   'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
                   'صراحه  |  أشجع شيء حلو في حياتك؟',
                   'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
                   'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
                   'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
                   'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
                   'صراحه  |  نظرة و يفسد الصداقة؟',
                   'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
                   'صراحه  |  شخص معك بالحلوه والمُره؟',
                   'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
                   'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
                   'صراحه  |  وش تتمنى الناس تعرف عليك؟',
                   'صراحه  |  ابيع المجرة عشان؟',
                   'صراحه  |  أحيانا احس ان الناس ، كمل؟',
                   'صراحه  |  مع مين ودك تنام اليوم؟',
                   'صراحه  |  صدفة العمر الحلوة هي اني؟',
                   'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
                   'صراحه  |  صفة تحبها في نفسك؟',
                   'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
                   'صراحه  |  تصلي صلواتك الخمس كلها؟',
                   'صراحه  |  ‏تجامل أحد على راحتك؟',
                   'صراحه  |  اشجع شيء سويتة بحياتك؟',
                   'صراحه  |  وش ناوي تسوي اليوم؟',
                   'صراحه  |  وش شعورك لما تشوف المطر؟',
                   'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
                   'صراحه  |  ما اكثر شي ندمن عليه؟',
                   'صراحه  |  اي الدول تتمنى ان تزورها؟',
                   'صراحه  |  متى اخر مره بكيت؟',
                   'صراحه  |  تقيم حظك ؟ من عشره؟',
                   'صراحه  |  هل تعتقد ان حظك سيئ؟',
                   'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
                   'صراحه  |  كلمة تود سماعها كل يوم؟',
                   'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
                   'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
                   'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
                   'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
                   '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
                   'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
                   '‏صراحه | هل تحب عائلتك ام تكرههم؟',
                   '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
                   '‏صراحه  |  هل خجلت من نفسك من قبل؟',
                   '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
                   '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
                   '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
                    '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
                   '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
                   '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
                   'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
                   '‏صراحه  |  ما هو عمرك الحقيقي؟',
                   '‏صراحه  |  ما اكثر شي ندمن عليه؟',
                   'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
               ]
                 client.on('message', message => {
               if (message.content.startsWith('S.sra7a')) {
                   if(!message.channel.guild) return message.reply('** This command only for servers **');
                var client= new Discord.RichEmbed()
                .setTitle("لعبة صراحة ..")
                .setColor('RANDOM')
                .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
                .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                                .setTimestamp()

                 message.channel.sendEmbed(client);
                 message.react("??")
               }
               });




               client.on('message', message => {
                   var args = message.content.split(/[ ]+/)
                   if(message.content.includes('كسمك')){
                       message.delete()
                     message.channel.sendMessage("", {embed: {
                       title: "لا تسب",
                       color: 0x06DF00,
                       description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
                       footer: {
                         text: "By Abo Galal"
                       }
                     }}).then(msg => {msg.delete(4000)});
                                         }


               });









               client.on('message', msg => {
                 if (msg.content === 'discord.gg') {
                  msg.delete(30)
                   msg.reply('ممنوع');
                 }
               });





      var cats = [

      "https://cdn.discordapp.com/attachments/479044877745782801/479045993132720128/download_1.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046003937247253/download_2.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046011956887552/download_3.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046019904962562/download_4.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046030214692864/download_5.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046039794352151/download_6.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046055581974549/download_7.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046065367154712/download.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046084442980354/images_1.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046105674547216/images_4.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046113945583639/images_5.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046119838580756/images_6.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046131796672513/images_7.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046143318425621/images_8.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046152491368448/images_9.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046158979825686/images_10.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046162247188498/images_11.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046196434960416/images_12.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046214571130882/images_13.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046219528929290/images_14.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479072892022161408/images_15.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046222045511685/images_16.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046225086382081/images_18.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046228047560736/images_19.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046230794829834/images_20.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046233533710336/images_21.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479074274850766863/images_22.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046289477337089/images_23.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046293436629041/images_24.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046294925606914/images_25.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046303330992169/images_26.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046307072311317/images_27.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046315100340224/images_28.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046325619392537/images_29.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046333114875907/images_30.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046334825889807/images_31.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046338718466058/images_32.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046340379148288/images_33.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046342795198484/images_34.jpg",
      "https://cdn.discordapp.com/attachments/479044877745782801/479046349644365827/images.jpg"
      ]
          client.on('message', message => {
              var args = message.content.split(" ").slice(1);
          if(message.content.startsWith('S.هل تعلم')) {
               var cat = new Discord.RichEmbed()
      .setImage(cats[Math.floor(Math.random() * cats.length)])
      message.channel.sendEmbed(cat);
          }
      });


      client.on('guildMemberAdd', member => {
          member.createDM().then(function (channel) {
       return channel.send("**`سلفر للمحترفين و الجيمر` \n [https://discord.gg/huWKueA]**")
          }
          )});

          client.on('message', message => {
                 if(message.content === "S.mc") {
                                     if(!message.channel.guild) return message.reply("**This command only for servers**");

             if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                        message.channel.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: false

                        }).then(() => {
                            message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                        });
                          }

              if(message.content === "S.unmc") {
                                  if(!message.channel.guild) return message.reply("**This command only for servers**");

             if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("**__ليس لديك صلاحيات__**");
                        message.channel.overwritePermissions(message.guild.id, {
                      SEND_MESSAGES: true

                        }).then(() => {
                            message.reply("**__تم فتح الشات__:white_check_mark:**")
                        });
              }

          });


          client.on('message' , message => {
      if(message.author.bot) return;

      if(message.content.startsWith("S.bk")) {
        if (!message.member.hasPermission("ADMINISTRATOR"))  return;
        let args = message.content.split(" ").slice(2);
     var codes = args.join(' ')

        if(!codes) {
          message.channel.send("قم بكتابة الرسالة | !rolebc @everyone message")
            return;
        }


              var role = message.mentions.roles.first();
                if(!role) {
                  message.reply("لا توجد رتبة بهذا الاسم")
                    return;
                }
            message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
              n.send(
              "**" + "السيرفر :" + "\n" +
              `${message.guild.name}` + "\n" +
              "المرسل :" + "\n" +
              `${message.author.tag}` + "\n" +
              "الرسالة :" + "\n" +
              `${codes}` + "**"
              )
            })
            message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
        }
    });

    client.on('message' , message => {
    if (message.content === 'S.invite') {
             let embed = new Discord.RichEmbed()

           .setThumbnail(message.author.avatarURL)
           .addField("**رابط اضافه البوت**","**[https://goo.gl/kft4bf] **")
           .setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});








client.on('message' , async message => {
            if(message.content.startsWith(prefix + "ads")) {
     await message.channel.send("`ارسال الرساله .`").then(e => {
    let filter = m => m.author.id === message.author.id
    let tests = '';
    let time = '';
    let channel = '';
    let chaTests = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
    .then(collected => {
      tests = collected.first().content
      collected.first().delete()
e.edit("`تكرار الرساله كل ....... دقائق`")
let chaTime = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("`الوقت بالدقائق ! ارقام فقطٍ`");
if(co.first().content > 1500 || co.first().content < 1) return message.channel.send("`لا اقل من دقيقه ولا اكثر من يوم`")
  time = co.first().content
co.first().delete()
  e.edit("`ادخل اسم الروم`")
  let chaChannel = message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
.then(col => {
  channel = col.first().content
col.first().delete()
  e.edit("`جاري اعداد المعلومات الرجاء الانتظاار...`").then(b => {
              setTimeout(() => {
    b.edit(`** تم اعداد المعلومات بنجاح .**`)
        },2000);
  })
  var room = message.guild.channels.find('name' , channel)
  if(!room) return;
  if (room) {
setInterval(() => {
room.send(tests);
}, time*60000)
  }
})
})
})

})
}
});




client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`**Showing Details Of** ${msg.guild.name}`)
      .addField('`Server Region`',`[${msg.guild.region}]`,true)
      .addField('`Roles Count`',`[${msg.guild.roles.size}]`,true)
      .addField('`Members Count`',`[${msg.guild.memberCount}]`,true)
      .addField('`Online Members`',`[${msg.guild.members.filter(m=>m.presence.status == 'online').size}]`,true)
      .addField('`Text Channels`',`[${msg.guild.channels.filter(m => m.type === 'text').size}]`,true)
      .addField('`Voice Channels`',`[${msg.guild.channels.filter(m => m.type === 'voice').size}]`,true)
      .addField('`Server Owner`',`**${msg.guild.owner}**`,true)
      .addField('`Server Id`',`**${msg.guild.id}**`,true)
      .addField('`Server was created in`',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed})
    }
});






client.on('message', message => {
             if (!message.channel.guild) return;
     if(message.content =='S.count')

     message.reply(`**${message.guild.memberCount}**`);
   });
   client.on('message', message => {
  if(message.content.startsWith(prefix + "invites")) {
   message.guild.fetchInvites().then(invs => {
     let user = message.mentions.users.first() || message.author
     let personalInvites = invs.filter(i => i.inviter.id === user.id);
     let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
 }
});



client.on("message", message => {

          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){
          const embed = new Discord.RichEmbed()

      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });








  client.on('message', message => {
  if(!message.channel.guild) return;
  if(message.content.startsWith(prefix + 'move')) {
   if (message.member.hasPermission("MOVE_MEMBERS")) {
   if (message.mentions.users.size === 0) {
   return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
  }
  if (message.member.voiceChannel != null) {
   if (message.mentions.members.first().voiceChannel != null) {
   var authorchannel = message.member.voiceChannelID;
   var usermentioned = message.mentions.members.first().id;
  var embed = new Discord.RichEmbed()
   .setTitle("Succes!")
   .setColor("#000000")
   .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
  var embed = new Discord.RichEmbed()
  .setTitle(`You are Moved in ${message.guild.name}`)
   .setColor("RANDOM")
  .setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
   message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
  message.guild.members.get(usermentioned).send(embed)
  } else {
  message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
  }
  } else {
   message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
  }
  } else {
  message.react("❌")
   }}});
   client.on('message', message => {
    if(!message.channel.guild) return;
  if(message.content.startsWith('S.bc')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let copy = "Smartbot";
  let request = `Requested By ${message.author.username}`;
  if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
  msg.react('✅')
  .then(() => msg.react('❌'))
  .then(() =>msg.react('✅'))

  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
  let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
  reaction1.on("collect", r => {
  message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
  message.guild.members.forEach(m => {
  var bc = new
  Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Broadcast')
  .addField('Server', message.guild.name)
  .addField('Sender', message.author.username)
  .addField('Message', args)
  .setThumbnail(message.author.avatarURL)
  .setFooter(copy, client.user.avatarURL);
  m.send({ embed: bc })
  msg.delete();
  })
  })
  reaction2.on("collect", r => {
  message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
  msg.delete();
  })
  })
  }
  });



  client.on('message', message => {
        if(message.content === prefix + "hc") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: false
   })
                message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
   }
  });


client.on('message', message => {
        if(message.content === prefix + "sc") {
        if(!message.channel.guild) return;
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
               message.channel.overwritePermissions(message.guild.id, {
               READ_MESSAGES: true
   })
                message.channel.send('Done  ')
   }
  });










  client.on('message', message => {
     if(message.content.startsWith(prefix + 'alljoin')) {
      if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
        if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
     if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
      var author = message.member.voiceChannelID;
      var m = message.guild.members.filter(m=>m.voiceChannel)
      message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
      m.setVoiceChannel(author)
      })
      message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


      }
        });



        client.on('message', message => {
            var args = message.content.split(/[ ]+/)
            if(message.content.includes('discord.gg')){
                message.delete()
              message.channel.sendMessage("", {embed: {
                title: "** ممنوع نشر سيرفرات هنا يا برنس **",
                color: 0x06DF00,
                description: "المره القادمه بكلم الادمن يعطيك ميوت",
                footer: {
                  text: "By Abo Galal"
                }
              }}).then(msg => {msg.delete(4000)});
                                  }


        });



        client.on('message',async message => {
          var room;
          var title;
          var duration;
          var gMembers;
          var filter = m => m.author.id === message.author.id;
          if(message.content.startsWith(prefix + "giveaway")) {
            if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
            message.channel.send(`:eight_pointed_black_star:| **من فضلك اكتب اسم الروم**`).then(msgg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                let room = message.guild.channels.find('name', collected.first().content);
                if(!room) return message.channel.send(':heavy_multiplication_x:| **لم اقدر على ايجاد الروم المطلوب**');
                room = collected.first().content;
                collected.first().delete();
                msgg.edit(':eight_pointed_black_star:| **اكتب مدة القيف اواي بالدقائق , مثال : 60**').then(msg => {
                  message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                  }).then(collected => {
                    if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **يجب عليك ان تحدد وقت زمني صحيح.. ``يجب عليك اعادة كتابة الامر``**');
                    duration = collected.first().content * 60000;
                    collected.first().delete();
                    msgg.edit(':eight_pointed_black_star:| **واخيرا اكتب على ماذا تريد القيف اواي**').then(msg => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 20000,
                        errors: ['time']
                      }).then(collected => {
                        title = collected.first().content;
                        collected.first().delete();
                        try {
                          let giveEmbed = new Discord.RichEmbed()
                          .setAuthor(message.guild.name, message.guild.iconURL)
                          .setTitle(title)
                          .setDescription(`المدة : ${duration / 60000} دقائق`)
                          .setFooter(message.author.username, message.author.avatarURL);
                          message.guild.channels.find('name', room).send(giveEmbed).then(m => {
                             let re = m.react('🎉');
                             setTimeout(() => {
                               let users = m.reactions.get("🎉").users;
                               let list = users.array().filter(u => u.id !== m.author.id);
                               let gFilter = list[Math.floor(Math.random() * list.length) + 0];
                                 if(users.size === 1) gFilter = '**لم يتم التحديد**';
                               let endEmbed = new Discord.RichEmbed()
                               .setAuthor(message.author.username, message.author.avatarURL)
                               .setTitle(title)
                               .addField('انتهى القيف اواي !',`الفائز هو : ${gFilter}`)
                               .setFooter(message.guild.name, message.guild.iconURL);
                               m.edit(endEmbed);
                             },duration);
                           });
                          msgg.edit(`:heavy_check_mark:| **تم اعداد القيف اواي**`);
                        } catch(e) {
                          msgg.edit(`:heavy_multiplication_x:| **لم اقدر على اعداد القيف اواي بسبب نقص الخصائص**`);
                          console.log(e);
                        }
                      });
                    });
                  });
                });
              });
            });
          }
        });


        client.on('guildDelete', guild => {
          client.channels.get("489918883319513128")
        const embed = new Discord.RichEmbed()
           .setAuthor(`طلعت من سيرفر ❎`)
           .setDescription(`**
Server name : __${guild.name}__
Server Id: __${guild.id}__
Owner Server : __${guild.owner}__
Members : __${guild.memberCount}__
        Servers Counter : __${client.guilds.size}__**`)
                 .setColor("#f3ae10")
                 .setFooter('SmartBot' , client.user.avatarURL)
                   client.channels.get("489918883319513128").send({embed});
        }

        );



        client.on('guildCreate', guild => {

  client.channels.get("489918883319513128")
const embed = new Discord.RichEmbed()
   .setAuthor(`بوتك دخل سيرفر جديد مبروك ✅`)
   .setDescription(`**
Server Name : __${guild.name}__
Server Id: __${guild.id}__
Owner Server: __${guild.owner}__
Members : __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .addField("New Server!")
         .setFooter('Smartbot' , client.user.avatarURL)
           client.channels.get("489918883319513128").send({embed});
}

);

client.on('guildMemberAdd', member => {
    let memberavatar = member.user.avatarURL
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Hello Dude' , `Welcome to the server **${member}**`)
        .addField('User Id :', "**[" + `${member.id}` + "]**" )
                .addField(' Member Number',`${member.guild.memberCount}`)

                  .addField("Name:",`<@` + `${member.id}` + `>`, true)

                                     .addField(' Server', `${member.guild.name}`,true)
.setFooter(member.user.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')


        .setTimestamp()

    member.createDM().then(function (channel) {
return channel.send(embed)
    }
    )});


client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [' S.help ','S.invite | S.support ' ];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/n3k4a`);
    }, ms);

})
client.on('message', async message => {
 if(message.content.startsWith(prefix + "temp")) {
   await message.channel.send("**ارسل اسم الروم**").then(e => {
   let filter = m => m.author.id === message.author.id
   let name = '';
   let time = '';
   let type = '';
   let limit = '';


   message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
   .then(collected => {
     name = collected.first().content
     collected.first().delete()



e.edit("**ارسل مدة الروم بالدقائق لااقل من 2 ولا اعلى من 180**")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(co => {
if(isNaN(co.first().content)) return message.reply("**الوقت بالدقائق ! ارقام فقطٍ**");
if(co.first().content > 180 || co.first().content < 2) return message.channel.send("لا اقل من دقيقتان ولا اكثر من 180 دقيقه")
 time = co.first().content
co.first().delete()
 e.edit("**ارسل نوع الروم text, voice**")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(col => {
 type = col.first().content
col.first().delete()
e.edit("**ارسل عدد الاعضاء الذين يستطيعون الدخول**")
message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
.then(coll => {
 if(isNaN(coll.first().content)) return message.reply("**عدد الاعضاء يكون بالارقام فقط**");
   limit = coll.first().content
coll.first().delete()

 e.edit("جاري اعداد الغرفه الرجاء الانتضار...")
 message.guild.createChannel(name, type).then(c => {
   c.edit({
     userLimit: limit
   })
   setTimeout(() => {
     c.delete()
     message.channel.send("**تم انقضاء الوقت**")
   }, Math.floor(time*60000))

 })
 e.edit("**تم انشاء الغرفه استمتع**")

})
})
})
})
})

 }
})



var cats = [

"https://cdn.discordapp.com/attachments/477840502583066624/489925349480595471/c8458dcb83ef3f51eb67871656460acda8008de1_hq.jpg",
"https://cdn.discordapp.com/attachments/471048168734326784/489926293945843722/D986D983D8AA-D8B9D986-D8A7D984D8A8D986D8A7D8AA-4.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926344956837918/D986D983D8AA-D986D983D8A7D8AA-D986D983D8AA-D985D8B6D8ADD983D8A9-130.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926377219555328/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926396878127114/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926441497001984/75e9de50bbe56adfa2dd0d79765618f3_400x400.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926523143585793/maxresdefault.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926558975262721/D986D983D8AAD8A9-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926561441513482/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926572699025408/83efa282386a3c97b55b554e12034f09.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926573823361037/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927028988968970/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927039474991117/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927054238679052/hqdefault.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927075751395338/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927100300525568/screen-16.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927135952240666/D986D983D8AAD987.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927196056748032/1462535501-kololk.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927216474357771/52ec73eb7867b5d69fe2573c695ddec0ef59aaae_00.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927223055220736/10352280_326716524148020_473570926368633860_n.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927225953615872/84.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927310246674432/D8B5D988D8B1-D986D983D8AA-D985D8B6D8ADD983D8A9-D8ACD8AFD8A7-500x380.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927542812180493/D8B5D988D8B1-D986D983D8AA-2.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927575783735316/750a293b4222503c2c82ea351795d82d94d394bd_hq.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927587653615626/joke.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927610260914178/D8B5D988D8B1-D986D983D8AA-32.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927618972352547/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927638794764288/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927661502857226/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927734458581002/665.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927737738526721/D986D983D8AA-D985D8B6D8ADD983D8A9-5.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927741555343405/5L756426.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927775168233493/27-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928045449314356/D986D983D8AA.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928124188852226/C_0g73iVYAARXkq.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928134347587604/almastba.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928135379517440/e3b1c8571e56805fc07e776eb5fd46df-best-funny-images-arabic-jokes.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928158141743112/PIC-724-1452961611-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928201116581888/do.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928210126077955/21581874-v2_xlarge.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928236390940698/D986D983D8AA-D985D8B6D8ADD983D8A9-3.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928244293009408/D986D983D8AA-D986D983D8A7D8AA-D986D983D8AA-D985D8B6D8ADD983D8A9-128.png"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith("S.نكت")) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});



const zead = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
	 '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
'*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدني في نشر البوت وادخل هذا السيرفر  ***'
];
 client.on('message', message => {
 if (message.content.startsWith('S.مريم')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
  }
});


client.on('message', message => {
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: Permissions')
         .addField('Your Permissions:',perms)

                  message.channel.send({embed:zPeRms});

    }
});


client.login(NTQzMzI1NTA2Nzk2MjU3Mjgw.Dz7oxQ.W_gnJG35ZpVr_HCYDAV124CZTMo);
