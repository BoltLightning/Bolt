const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = "b:";

const token = 'NzM3MTA2NTM5Nzk3NTQ1MDEx.Xx4h9Q.8jiuznDgg8RdshAkBpwnp97832M';

bot.on('ready', () =>{
    console.log(bot.guilds.cache.size);
    bot.user.setActivity('b: for bot actvation');
    bot.user.setStatus('online');
    bot.user.setAvatar('https://cdn.discordapp.com/attachments/901969790166511668/923353783357018132/DIIIIIIIIIIID_scold.png')

})


const oncooldown = new Set(); 

var servers = {};

bot.on('message', message =>{
    let args = message.content.substring(prefix.length).split(" ");

    if(!message.content.startsWith(prefix) || message.author.bot)
    return; 

    const user = message.mentions.users.first();
    


        switch (args[0]) {
            case 'cooldown':
                if(oncooldown.has(message.author.id)) {
                    message.reply('You cannot use that command! wait another 30 seconds as you are on cooldown')
                }else{
                    message.reply('you are not on cooldown');

                    oncooldown.add(message.author.id);
                    setTimeout(() =>{
                    oncooldown.delete(message.author.id)
                    }, 30000)
                }
            break;
            case 'play':
                if(!args[1]) {
                    message.channel.send('You need to provide a link to the music');
                    return;
                }
                if(!message.member.voiceChannel) {
                    message.channel.send('you need to be in a voice channel');
                    return;
                }

            break;
            case '.':
                message.channel.send('you need to add a comand, use b:help for the ENTIRE list');
                break; 
            case 'blackhole':
                message.channel.send('https://contraryperspective.files.wordpress.com/2016/02/mediablackhole.jpg');
                break;
            case 'bolts':
                message.channel.send('https://discord.gg/9WbjbW9');
                break;
            case 'teslas' :
                message.channel.send('http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/09/tesla-model-s-threebatwo.jpg');
                break;
            case 'tesla3':
                message.channel.send('https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Tesla_Model_3_parked%2C_front_driver_side.jpg/1200px-Tesla_Model_3_parked%2C_front_driver_side.jpg');
                break;
            case 'teslax':
                message.channel.send('https://i.ytimg.com/vi/urDSWETx2UU/maxresdefault.jpg');
                break;
            case 'teslay':
                message.channel.send('https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/tesla_newd_a_0.jpg?itok=O3BcYXeo');
                break;
            case 'teslac':
                 message.channel.send('https://st.hotrod.com/uploads/sites/5/2019/11/Tesla-Cybertruck-Electric-Pickup-Truck-Front-3-4-View-with-Headlamps-Illuminated.jpg');
                 break;
            case 'teslarn' :
                message.channel.send('https://95octane.com/wp-content/uploads/2017/11/new_tesla_2019_roadster_1.jpg');
                break; 
            case 'teslaro' :
                message.channel.send('https://tse1.mm.bing.net/th?id=OIP.XM9B8dLnnHCbwDo1JNEWYQHaCx&pid=Api&P=0&w=495&h=186');   
                break; 
            case 'help':
                const helb = new Discord.MessageEmbed()
                .setColor('#00FF00')
                .setTitle('All possible commands')
                .setDescription('Prefix b: Commands you can use help-2, support, help, teslaro, teslarn, teslac, teslay, teslax, tesla3, teslas, bolts, blackhole, info, youtube, vote, did, support, cement, test, bakeacake, thickskull, elonmusk, bolt!, javascript, rbc, blackhole2, quarantine, coronavirus, vaccine, luna, moonlord, vortex, solar, stardust, nebulapillar, Rosedose, demons, defDID, anime 1-4, makah, clientid, testiping, fix, youtube, Rodopo, twitter, reddit, invitelink, cementgf, lmao, logo, sword, priceisright, cementgroundultra, welcome, givediamonds {@user} mwiki, barter, jackpot, testluck, Rock paper scissors, lottery, jackpot, 8ball, assignmemusic, random-number-generator (0-100) data, give-me-a-car, manual, mine, top-luxury, epic-cars, best-Ecars, 2-shifters, donate, Claimbtc, Cute-anime-girl, snipe, donate-crypto')
                .setFooter('page 1 of 2 b:help-2')
                message.channel.send(helb);
                break;
            case 'help-2':
                const helb2 = new Discord.MessageEmbed()
                .setColor('#00FF00')
                .setTitle('All possible command (pt 2)')
                .setDescription('Prefix b: Commands you can use: dev, bet-heads, bet-tails, roulette, rol-help (help for roulette game), cornhole, guess-that-plane! see if you can name these planes! copy the ID number and run b:check-[paste ID here] to check your answer!')
                .setFooter('page 2 of 2')
                message.channel.send(helb2)
                break;

            case 'vote':
                const voteem = new Discord.MessageEmbed()
                .setColor('#00FF00')
                .setTitle('Show us some support!')
                .setDescription('Please consider voting for us on top.gg: https://top.gg/bot/737106539797545011 it is 100% free and takes no time to do! voting is not required but it will help show your support!')
                message.channel.send(voteem);
                break;   
            case 'support': 
                message.channel.send('https://discord.gg/qyQEg4p');
                break; 
            case 'did':
                message.reply('I CAN\'T BELIEVE WHAT YOU DIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIID YOU AUTOMATICLY GET TO SERVE A CEMENT GROUND!!');
                break; 
            case 'test':
                message.channel.send('I\'m online and ready to go');
                break; 
            case 'bakeacake':
                message.channel.send('have a minecraft cake! vannila cake with sugar toppings https://img00.deviantart.net/5a1b/i/2012/188/8/d/minecraft_cake____cake_by_bitebacksugar-d56ahfa.jpg ');
                break;
            case 'thickskull':
                message.channel.send('So another bot on the web Rose Dose has a THICK skull, she has a problem where she gets wet cement and dumps it on her mom and it dries so her mom gets stuck in cement! her mom keeps telling her ROSE WHEN WILL YOU GET IT THROUGH YOUR THICK SKULL, DUMPING CEMENT ON PEOPLE IS NOT OK! NOW GO TO CEMENT! rose gets placed in cement with only her head out and it dried. yikes');
                message.author.send('Rose Dose\'s profile pic https://media.discordapp.net/attachments/737107781060132945/739541452543098970/yikes_burned.png');
                break; 
            case 'reveal': ;
                 message.reply('it is with great honor to award you this because you found the secrete. HAVE A LAMBO! https://s1.cdn.autoevolution.com/images/news/lamborghini-aventador-wrapped-in-gold-chrome-video-72843-7.jpg lamborghinis are EPIC. I\'ll  be over the moon if someone offered me a free lambo! but have a BEAUTIFLE mansion to pair with your lambo http://media-cache-ak0.pinimg.com/originals/92/2a/54/922a542a7e147d9a495ed4256b10878e.jpg also 2 tickets to the price is right! ');              
                break;
            case 'elonmusk':
                message.channel.send('http://media.idownloadblog.com/wp-content/uploads/2014/02/elon-musk-tesla.jpg');
                break;
            case 'bolt!':
                message.channel.send('yes Bolt is listning unlike rose who never lestins to her mom and gets told by her mom that rose has a thick skull');
                break;
            case 'javascript':
                message.channel.send('http://www.tandemseven.com/wp-content/uploads/2017/01/img_Selecting_JavaScript_Framework.png');
                break; 
            case 'rbc':
                message.channel.send('my favorite images or just random ones');
                break;
            case 'blackhole2':
                message.channel.send('http://cdn.sci-news.com/images/enlarge5/image_6812e-Rotating-Black-Hole.jpg');
                break;
            case 'quarantine':
                message.channel.send('what you can do: These aren\'t fun times at all, but you can do some things to stay buisy, you can master an instument, you could catch up on some reading or some actually fun things like doing a compleat run through your favorite game');
                break; 
            case 'coronavirus':
                message.channel.send('COVID 19 or coronavirus is a *beep* they MUST come up with a vaccine soon or I\'ll flip! and yall anti vaccinators BETTER get some or you are basicly saing keep this pandemic going!');
                break;
            case 'vaccine':
                message.channel.send('*you have been vaccinate from coronavirus*');
                break;
            case 'luna':
                message.channel.send('https://tse3.mm.bing.net/th?id=OIP.vpQBLF_3Xk_meQXv9Rv1mgAAAA&pid=Api&P=0&w=300&h=300');
                break;
            case 'moonlord':
                message.channel.send('https://terraria.gamepedia.com/media/terraria.gamepedia.com/7/7f/Moon_Lord.png');
                break; 
            case 'cement':
                message.channel.send('http://ngmblocks.com/wp-content/uploads/2017/08/3-Cement-Bags-2.jpg');
                break; 
            case 'vortex':
                message.channel.send('http://vignette3.wikia.nocookie.net/terraria/images/8/8d/Vortex_Pillar.png/revision/latest?cb=20150705054028');
                break;
            case 'solar':
                message.channel.send('https://gamepedia.cursecdn.com/terraria_gamepedia/5/50/Solar_Pillar.png?version=bfdaf5a185695c5fd70fa94ae9de8602');
                break;
            case 'ping':
                message.reply('ping');
                break; 
            case 'stardust':
                message.channel.send('http://vignette3.wikia.nocookie.net/terraria/images/9/9f/Stardust_Pillar.png/revision/latest?cb=20150705054010');
                break;
            case 'nebulapillar':
                message.channel.send('https://i.ytimg.com/vi/LMVgUk0Wme0/hqdefault.jpg');
                break;
            case 'blackhole3':
                message.channel.send('https://tse2.mm.bing.net/th?id=OIP.89yFOY_DKIzAUdXfFdza_QHaEK&pid=Api&P=0&w=330&h=186');
                break; 
            case 'gold':
                message.channel.send('https://images-ext-2.discordapp.net/external/PV_YdRJjvTbpsLAFjmiouQvaVKudP5fqfFtl2GFpf-c/https/g.foolcdn.com/editorial/images/214749/gold-bars-bullion-stacked-in-pile-getty.jpg?width=1197&height=898');
                break; 
            case 'diamond':
                message.channel.send('https://images-ext-1.discordapp.net/external/nVpmCwJZMyo5QXJCkUlrce23A4aRQrJKL_i_Rgl4dEs/%3Fid%3DOIP.gQuTPkdATZ0Drn5IH-p0OQHaHa%26pid%3DApi%26P%3D0%26w%3D300%26h%3D300/https/tse1.mm.bing.net/th');
                break; 
            case 'sub':
                message.channel.send('subcribe to Boltlightning780!');
                break;
            case 'tesla':
                message.channel.send('https://www.tesla.com/');
                break; 
            case 'minecraft':
                message.channel.send('https://www.minecraft.net/en-us/');
                break;
            case 'terraria':
                message.channel.send('https://www.terraria.org/');
                break;
            case 'Rosedose':
                message.channel.send('Rose has a thick skull!');
                break;
            case 'bolt':
                message.channel.send(`howdy user!, how are you doing on this fine day unless it is raining`);
                break;
            case 'gather':
                if(oncooldown.has(message.author.id)) {
                    message.reply('You cannot use this command. wait another 30 seconds');
                }else{
                    message.channel.send(`heads up @everyone! An anoncement is being held!`);
                }

                oncooldown.add(message.author.id);
                setTimeout(() =>{
                oncooldown.delete(message.author.id)
                }, 30000)
               break;
            case 'defDID':
                message.channel.send('the word DIIIIIIIIIIIIIIIIIIIIIIIID is DID with an extended I. the purpose for increasing the number of I\'s to express energy, I CAN\'T BELIEVE WHAT YOU DID or I CAN\'T BELIEVE WHAT YOU DIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIID! to pronounce this wonderful word, just say DI then sustain the I until the final D');
                break;
            case 'anime1': 
                message.channel.send('https://i.ytimg.com/vi/aNy67Ai3wAg/hqdefault.jpg');
                break;
            case 'anime2':
                message.channel.send('https://i.ytimg.com/vi/b4Uizoan0aQ/hqdefault.jpg');
                break; 
            case 'anime3':
                message.channel.send('https://data.whicdn.com/images/295558600/original.jpg?t=1503688074');
                break;
            case 'anime4':
                message.channel.send('http://images6.fanpop.com/image/answers/3579000/3579564_1411127552041.77res_500_281.jpg');
                break;  
            case 'makah':
                message.channel.send('pronounced mc-ka http://918thefan.com/wp-content/uploads/2010/09/shiki11_5.jpg');
                break;
            case 'javalearn':
                message.channel.send('https://www.youtube.com/watch?time_continue=2&v=o1IaduQICO0&feature=emb_logo');
                break;
            case 'fix':
                message.author.send('contact the developer Bolt2434, and report the issue');
                break;
            case 'testping':
                message.author.send('@everyone');
                break; 
            case 'clientid':
                message.author.send('Client ID sent in this area!')
                message.author.send('737106539797545011');
                console.log('command has been used!')
                message.channel.send('check DMs don\'t misuse the ID!');
                
                break; 
            case 'devsinfo':
                message.author.send('clientid, permsinteger,');
                console.log('command used')
                message.channel.send('used by devs only');
                break;
            case 'permsinteger':
                message.channel.send('8');
                break; 
            case 'Rodopo':
                message.channel.send('Rose Dose Pose');
                break;
            case 'music':
                message.channel.send('https://www.bensound.com/');
                break;
            case 'youtube':
                message.channel.send('https://www.youtube.com/channel/UC4gmQN1b-fQG0lpRFA_rRMg');
                break; 
            case 'twitter':
                message.channel.send('https://twitter.com/Bolt2434');
                break;
            case 'reddit':
                message.channel.send('https://www.reddit.com/');
                break; 
            case 'invitelink':
                message.channel.send('https://discordapp.com/oauth2/authorize?client_id=737106539797545011&scope=bot&permissions=8');
                break; 
            case 'cementgf':
                message.channel.send('cement is in serious love with makah! I don\'t get it http://918thefan.com/wp-content/uploads/2010/09/shiki11_5.jpg');
                break;
            case 'lmao':
                message.channel.send('cement\'s girlfriend makah is so disgusting and ugly it is FUNNY AS BEEP! that cement likes her also, cement\'t reaction to reciving makah is SO funny!');
                break;
            case 'animeteenager':
                if(oncooldown.has(message.author.id)) {
                    message.reply('You cannot use this command again. you\'re on cooldown. wait another 30 seconds');
                }else{
                    var anim =['http://2.bp.blogspot.com/-2nESXnhSPHU/T5oqdy22qII/AAAAAAAAA5E/MQDjy5RFXds/s1600/anime_boy-1.jpg', 'https://i.ytimg.com/vi/apPwVe50l48/hqdefault.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/6b/39/0b/6b390b09a0155df0cc9b56fff6713583.jpg', 'https://i.pinimg.com/originals/6b/4f/f0/6b4ff0ad43af410957911a7a0302c56d.jpg', 'http://media-cache-ak0.pinimg.com/736x/f2/27/b7/f227b74fe7ca7bd4728ffef12af5fc86.jpg', 'https://tse2.mm.bing.net/th?id=OIP.PDd710_yFyeQmpqXFs2QYQHaHu&pid=Api&P=0&w=300&h=300', 'https://i.pinimg.com/736x/2b/62/e1/2b62e11adeafde615c98002ce2aff651.jpg', 'https://i.pinimg.com/736x/64/1f/04/641f0483fe6e68923e63577e59c0e44f.jpg', 'https://s-media-cache-ak0.pinimg.com/236x/b4/d1/b6/b4d1b6102a5e95724fde0a6134019f7b.jpg', 'https://s-media-cache-ak0.pinimg.com/originals/cb/1b/2c/cb1b2c44013251b65e7d6cc966138e3c.jpg', 'https://i.pinimg.com/736x/c8/e3/c6/c8e3c6dca75cda3f3a61823d1bd95585.jpg', 'https://i.pinimg.com/originals/2b/3c/e6/2b3ce6e8f15fcfcb29ec5f8bc02a5f6a.jpg', 'http://data.whicdn.com/images/118320278/original.jpg'];
               var nim= anim[Math.floor(Math.random()*anim.length)];
               message.channel.send(nim)
                }
                oncooldown.add(message.author.id);
                setTimeout(() =>{
                oncooldown.delete(message.author.id)
                }, 30000)
                break;
            case 'cuteanimeg':
                if(oncooldown.has(message.author.id)) {
                    message.reply('You cannot use this command again. you\'re on cooldown. wait another 30 seconds');
                }else{
                    var gihi =['https://i.pinimg.com/originals/37/5a/8e/375a8e0decc8e693ed53e6949e36f909.png', 'https://i.pinimg.com/736x/9a/12/52/9a1252cad989790a2c3d3217a638acfe--anime-beautiful-cute.jpg', 'https://i.ytimg.com/vi/UHqgpB-qXLs/hqdefault.jpg', 'https://i.pinimg.com/originals/d4/28/e7/d428e7ab48e754bb616009a98cb18323.jpg', 'http://2.bp.blogspot.com/_QTOPstrBLaY/TLNVcLyhtGI/AAAAAAAAAD4/qk4YyTifvro/s1600/anime_vampire.jpg'];
                    var Pose = gihi[Math.floor(Math.random()*gihi.length)];
                    message.channel.send(Pose);
                }

                oncooldown.add(message.author.id);
                setTimeout(() =>{
                oncooldown.delete(message.author.id)
                }, 30000)
               
             break;
            case 'priceisright':
                message.channel.send('https://i.ytimg.com/vi/1-sYNPLs0OQ/maxresdefault.jpg');
                break; 
            case 'sword':
                message.channel.send('he reminds me terraria https://images-ext-1.discordapp.net/external/q2tO5ycoxUhpmB9IUqbuZ04YGqeBiiAajgvgnuBl1K8/https/i.stack.imgur.com/wTWJG.jpg?width=654&height=898');
                break;   
            case 'flipcoin':
                var coin = ['heads', 'tails'];
                var output = coin[Math.floor(Math.random()*coin.length)];
                message.channel.send(output);
                break;
                if(!args[1]) message.channel.send('Terraria... what');
            const wiki = message.content.wiki
                
                if(args[1]){

                    if(wiki) {
                        message.channel.send('https://terraria.gamepedia.com/Terraria_Wiki');
                    }
                 else 
                    message.channel.send('https://terraria.gamepedia.com/Terraria_Wiki');
                }
                break;
            case 'warn':
               if(!args[1]) message.channel.send('Who would you like to warn? mention them!');

               if(user) {
                   user.send('Please don\'t do that! you were caught breaking the rules. this is only a warning no serious punishments will occur thanks for understanding').then(() =>{
                    message.channel.send('Warned them!')
                   });
               }
                   

                break; 
                case 'Cement':
                if (!args[1]) message.channel.send('Cement...');

            const ground = message.content.ground

                if(args[1]) {

                    if(ground) {
                        message.channel.send('https://media.discordapp.net/attachments/734586259044958228/739266727971651634/cement_ground.png rose is in cement serving her cement ground in her room');
                    }else {
                        message.channel.send('https://media.discordapp.net/attachments/734586259044958228/739266727971651634/cement_ground.png')
                    }
                }
                
                break;
            case 'cementgroundultra':
                message.channel.send('This is what the cement ground ultra looks like https://www.chinookmed.com/mas_assets/cache/image/1/7/5/a/5978.Jpg')
                message.channel.send('Rose gets inside the bag her mom pours in the cement then it hardens and mom zips up the bag leaving rose inside. The cement ground ultra is portable in case the regular cement ground thing is too big to take on the go');
                break; 
            case 'smoke':
                message.channel.send('🚬 💨');
                break;
            case 'Rose':
                if (!args[1]) message.channel.send('Rose who');

                const Dose = message.content.Dose 

                if(args[1]) {

                    if(Dose) {
                        message.channel.send('Rose Dose has a THICK skull');
                    }else {
                        message.channel.send('Rose has a THICK skull!')
                    }
                }
                break; 
                case 'ban' :
                if(!args[1]) message.channel.send('you need to mention a user in order to nail them with the ban hammer');
                

                if (user) {
                    const member = message.guild.member(user);
                    if(member) {
                        if (member.hasPermission('BAN_MEMBERS')) {
                            console.log('this person can ban');
                        }
                            member.roles.cache.has('745747503919530128');
                            member.ban({resason: 'you got nailed by the ban hammer'}).then(() =>{
                            message.reply(`nailed ${user.tag} with the ban hammer!`)
                            message.author.send('Nailed it! check your bans to revoke ban')
                            
                        }); 
                    }else {
                        message.reply("that user isn\'t in the guild")
                    }
                } else { 
                    message.reply('You need to mention a user in order for me to run this command');
                }
            break; 
            case 'boot' : 
                if(!args[1]) message.channel.send('you need to mention a user in order for me to give them the boot');


                if (user) {
                    const member = message.guild.member(user);
                    if(member) {
                        member.kick('you got the boot!').then(() =>{
                            message.channel.send('booted them!');       
                    }).catch(err => {
                        message.channel.send('cannot boot');
                        console.log(err)
                });
                    }else {
                        message.reply("that user isn\'t in the guild")
                    }
                } else {
                    message.reply('You need to mention a user in order for me to run this command');
                }
            break; 
            // Commands beyond this point is part of indev update (1.0.1 1.01)
            case 'welcome':
                if(!args[1]) message.channel.send('Who would you like to send a welcome message? mention them!')

                if(user) {
                    const member = message.guild.member(user);
                    if(member) {
                         member.send(`Welcome ${user} to this server! have a fun time here! be sure to read ${'#rules'} to know the expecations!`).then(() =>{
                            message.channel.send('sent a warm welcome!'); 
                        }); 
                    }
                }else {
                    message.channel.send('Who would you like to welcome? mention them!')
                }
                break; 
                case 'concrete':
                    message.channel.send('https://gamepedia.cursecdn.com/minecraft_gamepedia/thumb/4/4d/Lime_Concrete.png/150px-Lime_Concrete.png?version=ec00c54d8ce6efcbaccbfbf7a738d93d');
                    break;
                case 'favcolor':
                    let favcolor = ['green', 'red', 'blue'] 
                    message.channel.send(favcolor);
                    break; 
                case 'top3games':
                    let top3games = ['Minecraft', 'Terraria','Fortnite (back in 2018!)'];
                    message.channel.send(top3games);
                    break;
                case 'pint':
                    message.channel.send('https://www.pinterest.com/');
                    break;
                case 'some':
                  if (!args[1]) message.channel.send('...cement?');

                      const cement = message.content.cement 
        
                        if(args[1]) {
        
                            if(cement) {
                                message.channel.send('Get your cement ground ultra today! only $19.95! call today and we\'ll double that order! call 1-800-828-312');
                            }else {
                                message.channel.send('Get your cement ground ultra today! only $19.95! call today and we\'l double that order! call 1-800-828-312')
                            }
                        }
                        break; 
                        //game update (1.02)
                        //minecraft commands
                        case 'givediamonds':
                            if(!args[1]) message.channel.send('Who would you like to give diamonds to?');
             
                            if(user) {
                                user.send('You were gifted 64 diammonds!').then(() =>{
                                 message.channel.send('Gave them diamonds! how nice!')
                                });
                            }
                             break; 
                            case 'mwiki':
                                message.channel.send('https://minecraft.gamepedia.com/Minecraft_Wiki');
                                break;    
                            case 'barter':
                        
                            var options=['You got obsidian!', 'you got crying obsidian!', 'you got a netherite hoe!', 'you got some leather!', 'you got some fire charges', 'you got soul sand!', 'you got an iron nugget!']
                            var response = options[Math.floor(Math.random()*options.length)];
                            message.channel.send(response).then().catch(console.error);
                            break;
                            //Rock paper siccors game code
                            case 'Rock': 
                            var rpc=['Rock, tie', 'paper, I win!', 'scissors, you win!'];
                            var Rpaper = rpc[Math.floor(Math.random()*rpc.length)];
                            message.channel.send(Rpaper);
                            break; 
                            case 'paper':
                            var paper =['Rock, you win!', 'paper, tie', 'scissors I win'];
                            var tree = paper[Math.floor(Math.random()*paper.length)];
                            message.channel.send(tree);
                            break;
                            case 'scissors':
                            var siccors =['Rock I win', 'paper, You win', 'scissors, tie!'];
                            var sizz = siccors[Math.floor(Math.random()*siccors.length)];
                            message.channel.send(sizz);
                            break; 
                            case 'Rockpapersiccors':
                                message.channel.send('Rock beats scissors, Scissors beats paper, paper beats rock');
                                break;
                            case 'testluck':
                                var test =['not your day :( *your car broke down when going to your favorite job getting you fired then send to clean sewers!*', 'you have average luck *you go through your day with nothing too evenful good nor bad*', 'alright you have pretty solid luck *you were picked to play on the price is right*', 'DANG! you NEED to buy a lottery ticket. *the city you live in has way too much cash so they give $1.4B to you and you alone!*'];
                                var luck = test[Math.floor(Math.random()*test.length)];
                                message.channel.send(luck);
                                break;
                            case 'lottery':
                                var lotloot=['You got -3 gold!', 'You got -2 gold!', 'You got -1 gold!', 'You got 0 gold', 'You got 1 gold!', 'You got 2 gold!', 'you got 3 gold!', 'you got one gold nugget (1/10 of a gold)', 'you struck the jackpot! you got 500 gold!']
                                var lhhhhhh = lotloot[Math.floor(Math.random()*lotloot.length)];
                                message.channel.send(lhhhhhh);
                                break; 
                            //finace - money (only for Bolt2434's server)
                            case 'jackpot':
                                message.channel.send('This weeks jackpot is 50,000 boltcoins!');
                                break;
                            case 'boltcoin':
                                message.channel.send('A boltcoin is the Bolt2434\'s server currency (if you\'re not in Bolt2434\'s server ignore this) Boltcoins can buy server advertisements and roles and more')
                                break;
                            case 'tsla':
                                message.channel.send('https://search.yahoo.com/search?fr=mcafee&type=E210US91088G91316&p=tsla');
                                break;
                                //back to games
                            case '8ball':
                                var ball = ['ask me later', 'ask again and try again', 'it\'s a concrete yes' ,'my sources say no', 'without a doubt!', 'all signs point to yes!', 'highly unlikely', 'cannot decide now try again later', 'yes', 'outlook good', 'outlook not so good', 'reply hazy try again'];
                                var dihid = ball[Math.floor(Math.random()*ball.length)];
                                message.channel.send(dihid);
                                break; 
                            case 'assignmemusic':
                                var mus = ['you get to play the sax!', 'you get to play the drums', 'you get to play the clarinet', 'you get to play the guitar', 'you don\'t get to play anything :('];
                                var muhus = mus[Math.floor(Math.random()*mus.length)];
                                message.channel.send(muhus);
                                break; 
                            case 'random-number-generator':
                                var rng =['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27', '28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51', '52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100'];
                                var Randomnumb = rng[Math.floor(Math.random()*rng.length)];
                                message.channel.send(Randomnumb);
                                break; 
                            case 'data': 
                                 const data = new Discord.MessageEmbed()
                                 .setColor('#00FF00')
                                 .setTitle('Bolt')
                                 .setImage('https://media.discordapp.net/attachments/737497964041338931/784277988484186122/rsz_d562e25887e8059e832adaccb48315f7.png')
                                 .setDescription('Bolt was born on 7/27/20. Creator/dev Bolt2434. Bot library Discord.js. lang Javascript, code runner. node.js Current version 1.0.3')
                                 message.channel.send(data)
                                 break;
                                //car update
                            case 'give-me-a-car':
                                var cahar = ['Tesla','Ford','lamborghini','toyota','honda','Jeep','chevy','rolls royce','nissan', 'Ram','mini','BMW','Jag','Mclaren','bentley'];
                                var scarhar = cahar[Math.floor(Math.random()*cahar.length)];
                                message.channel.send(scarhar);
                                break; 
                            case 'manual':
                                var man = ['https://tse4.mm.bing.net/th?id=OIP.He0EK9QLMZxXkt8WdF-5vQHaE8&pid=Api&P=0&w=242&h=162','http://i.ebayimg.com/images/i/281251933765-0-1/s-l1000.jpg','https://www.corvetteforum.com/wp-content/uploads/2014/05/C7-Corvette-Stingray-Interior-Manual.jpg','https://ae01.alicdn.com/kf/HTB1lBGjQXXXXXalapXXq6xXFXXXH/Stainless-Car-Accelerator-Gas-Brake-pedal-Clutch-Pedal-For-VW-Volkswagen-Jetta-MK5-Golf-5-6.jpg'];
                                var manua = man[Math.floor(Math.random()*man.length)];
                                message.channel.send(manua);
                                break; 
                            case '#savethemanuals':
                                const beddead = new Discord.MessageEmbed()
                                .setColor('#00FF00')
                                .setTitle('#savethemanuals!')
                                .setImage('http://i.ebayimg.com/images/i/361469920851-0-1/s-l1000.jpg')
                                .setDescription('Manual cars are decreasing but they have their advantages! #savethemanuals! manual cars are fun, cheap, allow more controle and more!')
                                message.channel.send(beddead)
                                break; 
                            case 'mine':
                                var mihine = ['you got stone!','you got cobblestone!','you got diorite!', 'you got granite!','you got gravel','you got flint!','you got coal!','you got iron!','you got gold!','you got a diamond!', 'uh oh looks like you dug straight down! *you fell in lava!*','LOOK OUT! *a creeper ruined your run!*','OH NO! you dig straight up! *gravel came down on top of you!*','What was that! *you heard cave ambience! you left the mine!*', 'your inventory filled up with diorite! *you went to dump it in a chest*','you found an emerald!'];
                                var dihig = mihine[Math.floor(Math.random()*mihine.length)];
                                message.channel.send(dihig);
                                break; 
                            case 'top-luxury':
                                var lux = ['https://cdn.vox-cdn.com/thumbor/pgOnLrLYcfb6lP8bgrQpAy0BCh4=/0x0:3000x2002/1200x675/filters:focal(1260x761:1740x1241)/cdn.vox-cdn.com/uploads/chorus_image/image/61441153/Rolls_Royce_Phantom_Front_3Q_v11_copy.0.0.1429282120.0.jpg','http://www.telegraph.co.uk/content/dam/motoring2/2015/12/03/1-Bentley-Flying-Spur-main-xlarge_trans++rWYeUU_H0zBKyvljOo6zlkYMapKPjdhyLnv9ax6_too.jpg','http://2.bp.blogspot.com/-71Y4Fc-1yeM/TmDUBTnU4EI/AAAAAAAAAY8/bIcaR8y2EBQ/s1600/luxury+car+wallpaper29.jpg', 'https://s.aolcdn.com/os/ab/_cms/2020/08/10095609/16753-MaseratiGhibliTrofeo.jpg'];
                                var luxury = lux[Math.floor(Math.random()*lux.length)];
                                message.channel.send(luxury);
                                break; 
                            case 'epic-cars':
                                var EWTO = ['https://s1.cdn.autoevolution.com/images/news/lamborghini-aventador-wrapped-in-gold-chrome-video-72843_1.png','https://i.ytimg.com/vi/QXTaxpJ1hKI/maxresdefault.jpg','https://i.ytimg.com/vi/DRu-BC9pqWw/maxresdefault.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg/1200px-Red_2019_Ferrari_SF90_Stradale_%2848264238897%29_%28cropped%29.jpg','http://cdn.carbuzz.com/gallery-images/1600/523000/700/523781.jpg'];
                                var spehed = EWTO[Math.floor(Math.random()*EWTO.length)];
                                message.channel.send(spehed);
                                break; 
                            case 'best-Ecars':
                                var ecar = ['http://s3.amazonaws.com/digitaltrends-uploads-prod/2016/09/tesla-model-s-threebatwo.jpg','https://i.ytimg.com/vi/28MUP8SyVJ4/maxresdefault.jpg','https://i.pinimg.com/originals/43/b9/ab/43b9ab057fcf65909527c5072470e249.jpg','https://www.autoguide.com/blog/wp-content/uploads/2018/09/Bugatti-Divo-Live-1.jpg'];
                                var tesla = ecar[Math.floor(Math.random()*ecar.length)];
                                message.channel.send(tesla);
                                break;
                            case '2-shifters':
                                message.channel.send('WHAT THE BEEP! https://i.ytimg.com/vi/FTe0wxHI8p8/maxresdefault.jpg');
                                break;
                            case 'guilds':
                                const guildem = new Discord.MessageEmbed()
                                .setColor('#00FF00')
                                .setTitle('Guilds')
                                .setDescription(bot.guilds.cache.size)
                                message.channel.send(guildem);
                                break;
                            case 'donate':
                                const sdbt = new Discord.MessageEmbed()
                                .setColor('00FF00')
                                .setTitle('Send Bitcoin')
                                .setThumbnail('https://th.bing.com/th/id/OIP.JBV7VVSxXvoZ97b0-FAMFAHaHX?pid=Api&rs=1')
                                .setDescription('send any ammount to bitcoin to this address: 121YDAJdyykUez5387estrcBFtJLMv5Lh6')
                                message.channel.send(sdbt);
                                break;
                            case 'donate-ltc':
                                const ltcd = new Discord.MessageEmbed()
                                .setColor('0000FF')
                                .setTitle('Send Litecoin')
                                .setThumbnail('https://th.bing.com/th/id/OIP.eM0Y9LAffKD3LbqiY-1tTwHaHa?pid=Api&rs=1')
                                .setDescription('send any amout of litecoin to this address: LRShrpuPNxfi53Jj9zUCyqi2yQHsRzvYCx')
                                message.channel.send(ltcd);
                                break;
                            case 'donate-eth':
                                const ethd = new Discord.MessageEmbed()
                                .setColor('#5F5F89')
                                .setTitle('Send Ethereum')
                                .setThumbnail('https://th.bing.com/th/id/OIP.I1wk00i0I6WqKWbdO45d6gHaHa?pid=Api&rs=1')
                                .setDescription('send any amount of eth to this address: 0xEDC449Da4AD7d2E789dCc385d704eB4411F11b6D')
                                message.channel.send(ethd);
                                break; 
                            case 'donate-doge':
                                const doged = new Discord.MessageEmbed()
                                .setColor('#DFC422')
                                .setTitle('Send Dogecoin')
                                .setThumbnail('https://th.bing.com/th/id/OIP.ceOSe1t8yg-9LvQA9r-MJgAAAA?pid=Api&rs=1')
                                .setDescription('send any amount of dogecoin to this address: D5iPNFpQzhVKDu6Czu1VVkusutUeJuYx49')
                                message.channel.send(doged);
                                break; 
                            case 'donate-crypto':
                                message.channel.send('We except Bitcoin [run b:donate], litecoin [run b:donate-ltc], ethereum [run b:donate-eth] amd dogecoin [run donate-doge]');
                                break;
                                case 'Cute-anime-girl':
                                    message.channel.send('https://media.discordapp.net/attachments/737497964041338931/784223912363556924/cute_anime_girl.JPG');
                                    break; 
                                case 'open-present':
                                    var presents = ['oh no! you were naughty this year! *you got a lump of coal!*', 'Hey you have quite the sweettooth! *you opened a nice batch of cookies! (just make sure to brush well!)*', 'uh oh, you were good but someone stole your presents! *you got nothing!* the next person other than you that types on this channel stole your presents!', 'santas in a prank mood with you! *you got a month of fake nitro*' , 'WOO you must of been the best! *you got a new gaming PC*' , 'you got lucky! *santa did your homework you forgot about and earned you a A+!' , 'what\'s that thick stack of green? MONEY! *santa got you $2500!' , '1 less thing to do! *santa cooked you and your ENTIRE family dinner!* '];
                                    var opresent = presents [Math.floor(Math.random()*presents.length)];
                                    message.channel.send(opresent);
                                    break; 
                                case 'snipe' :
                                    if (!args[1]) message.channel.send('You need to mention a user to snipe'); 

                                    if(user) {
                                        user.send('You got sniped! but by who is the question!').then (() =>{
                                            message.channel.send('headshot!')
                                        });                          }
                                        break;
                                case 'botnews': 
                                const rednew = new Discord.MessageEmbed()
                                .setColor('#00FF00')
                                .setThumbnail('https://content.thriveglobal.com/wp-content/uploads/2017/08/breaking-news.jpg')
                                .setTitle('Bolt bot offical news subreddit')
                                .setDescription('https://www.reddit.com/r/Boltbotnews/ get the latest news on Bolt stay up to date on current events or join the discord support server: https://cb.run/cspe to stay up to date on events and updates')
                                message.channel.send(rednew);
                                break; 
                                case 'sendthankyou':
                                    if(!args[1]) message.channel.send('who would you like to send the thank you note?') 

                                    if(user) {
                                        const thahank = new Discord.MessageEmbed()
                                        .setColor('#0000FF')
                                        .setTitle(` ${user} You were sent a thankyou note!`)
                                        .setDescription('you are appreciated by someone in this amazing comunity! how nice! check your pings to find out who did it')
                                        user.send(thahank).then (() =>{
                                            message.channel.send('you send them a thankyou note! how nice!')
                                        });  
 
                                    }
                                    case 'dev': 
                                    const devs = new Discord.MessageEmbed()
                                    .setThumbnail('https://cdn.discordapp.com/attachments/904049967151325278/923340248128311326/Airplane.jpg')
                                    .setTitle('Bolt2434')
                                    .setDescription('Bolt2434 is a bot developer who created Bolt bot. Bolt2434 works in javascript and HTML/CSS. follow Bolt2434 twitter: @bolt2434 and on youtube at Boltlightning780')
                                    message.channel.send(devs)
                                    break;

                                    //Fun 'gamble' games (not actual gambling)

                                    case 'bet-heads':
                                        var behe = ['Tails, sorry you did not win', 'heads! you won! ']
                                        var lihi = behe [Math.floor(Math.random()*behe.length)];
                                        message.channel.send(lihi);
                                        break;
                                    case 'bet-tails':
                                        var taha = ['Tails! you won!', 'heads, sorry you did not win']
                                        var tawi = taha [Math.floor(Math.random()*taha.length)];
                                        message.channel.send(tawi)
                                        break; 
                                    case 'roulette':
                                    var rolle = ['The ball landed on 00 (Green)','The ball landed on 0 (green)', 'The ball landed on 1 (red)', 'the ball landed on 2 (black)', 'The ball landed on 3 (Red)', 'The ball landed on 4 (black)', 'The ball landed on 5 (Red)', 'The ball landed on 6 (black)', 'The ball landed on 7 (Red)', 'The ball landed on 8 (Black)', 'The ball landed on 9 (Red)' , 'The ball landed on 10 (Black)', 'The ball landed on 11 (black)', 'the ball landed on 12 (Red) ', 'The ball landed on 13 (Black)' , 'The ball landed on 14 (Red)', 'the ball landed on 15 (black)', 'the ball landed on 16 (Red)', 'The ball landed on 17 (Black)' , 'the ball landed on 18 (red)' ,'The ball landed on 19 (Red)', 'The ball landed on 20 (Black)' , 'The ball landed on 21 (Red)' , 'The ball landed on 22 (Black)', 'The ball landed on 23 (Red)' , 'the ball landed on 24(Black)', 'the ball landed on 25(Red)', 'The ball landed on 26(Black)' ,'The ball landed on 27(Red)', 'The ball landed on 28(Black)','The ball landed on 29(Black)','The ball landed on 30 (Red)', 'The ball landed on 31 (Black)','The ball landed on 32 (Red)','The ball landed on 33 (Black)' , 'The ball landed on 34 (Red)','The ball landed on 35 (Black)' ,'The ball landed on 36(Red)'];
                                    var roho = rolle [Math.floor(Math.random()*rolle.length)]
                                    message.channel.send(roho);
                                    break;
                                    case 'rol-help':
                                    const rolh = new Discord.MessageEmbed()
                                    .setColor('#00FF00')
                                    .setThumbnail('https://th.bing.com/th/id/OIP.8F8lav1moW6KfyFua8nP7wHaHa?pid=Api&rs=1')
                                    .setTitle('How to use')
                                    .setDescription('first make a bet in chat. you can either bet on a color (red or black) or you can directly bet on a number (1-36 or 00 0) once done, run b:roulette to spin. The bot will tell you the results. Odds. Betting on a color has a 50/50 outcome, note this will earn you the least, bettin directly has a 1/38 chance but earns you the most (in real gambling)')
                                    .setFooter('As the dev, I am not responsible for losses on this game or any other. this is just for fun but can be used in real gambling. ')
                                    message.channel.send(rolh)
                                    break;
                                    case 'plinko':
                                        var plihi = ['WOO HOO! your chip landed in the middle! you won 10 points!' , 'oh no! you landed in 0!', 'ok, you got 5 points', 'well, it\'s something, 1 point' , 'better than 0, 0.5 points!', 'oh no! the one spot you shouldn\'t ok, -1 point for you', 'YIKES! you landed in cement ground ultra, you lost everything!']
                                        var plik = plihi [Math.floor(Math.random()*plihi.length)]
                                        message.channel.send(plik);
                                        break;
                                        case 'cornhole':
                                            var coho = ['miss, in the grass!', 'miss, in the grass!' ,'hit! board +1 point!' , 'hit! board +1 point!','miss, in the grass', 'YIKES! watch out! you busted a window -1 point' ,'hole! +3 for you!']
                                            var cornbag = coho [Math.floor(Math.random()*coho.length)]
                                            const beanz = new Discord.MessageEmbed()
                                            .setColor('#00FF00')
                                            .setTitle('cornhole match')
                                            .setDescription(cornbag)
                                            message.channel.send(beanz)
                                            break;
                                        case 'guess-that-plane!':
                                            var Plane1 = ['ID: 834732: Can you guess what this plane is?  https://cdn.discordapp.com/attachments/904049046887497728/923347758386143292/354156.png' , 'ID: 1352432: Can you guess what this plane is? https://cdn.discordapp.com/attachments/904049046887497728/923351247807975465/unknown.png' , 'ID: 746378: Can you guess what this plane is? https://cdn.discordapp.com/attachments/904049046887497728/923349394223407204/OIP.png ' , 'ID: 78462467: Can you guess what this plane is? https://cdn.discordapp.com/attachments/904049046887497728/923349621634392135/OIP.png' , 'ID: 6372163721: Can you guess what plane this is? https://cdn.discordapp.com/attachments/904049046887497728/923349847501836298/unknown.png' , 'ID: 736276251: Can you guess what this plane is? https://cdn.discordapp.com/attachments/904049046887497728/923350236116693033/twin_prop_plane.jpg' ]
                                            var guess2 = Plane1 [Math.floor(Math.random()*Plane1.length)]
                                            message.channel.send(guess2)
                                            break;
                                        case 'check-834732':
                                            message.channel.send('This plane is a Boeing 777')
                                            break;
                                        case 'check-1352432':
                                            message.channel.send('This plane is a Boeing 737')
                                            break;
                                        case 'check-746378':
                                            message.channel.send('This plane is a Boeing 747')
                                            break;
                                        case 'check-78462467':
                                            message.channel.send('This plane is an Airbus A320')
                                            break;
                                        case 'check-6372163721':
                                            message.channel.send('This plane is an Airbus A380')
                                            break;
                                        case 'check-736276251':
                                            message.channel.send('This plane is a beechcraft king air 350i')
                                            break;

                                            
                                                                                                       }
    }),

bot.login(token);   
