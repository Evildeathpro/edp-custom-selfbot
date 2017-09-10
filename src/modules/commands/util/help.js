const { Command } = require('discord-akairo');
const Discord = require ('discord.js');
 

//Categories

//Utility
const utility = "" +
"**Async** - Something Like Eval but better\n" +
"**Eval** - Something for progammers basically\n" +
"**Flush** - Prunes bot messages provided you have the perms\n" +
"**Game** - Changes your playing status\n"+
"**Help** - This Menu\n" +
"**Ping** - Tests your connection to the bot's host\n" +
"**Prune** - Prunes your messages only\n" +
"**Purge** - Prunes all messages provided you have the perms\n" +
"**Python** - Something Like Eval but in the Python Language\n" +
"**Quote** - Quotes peoples messages via message id\n" +
"**Restart** - Restarts the bot. Does not turn it back on\n" +
"**Status** - Changes your status (Example: Online, Invisble, etc.)\n";

//Fun
const fun = "" +
"**Cat** - Creates an image of a cat!\n" +
"**CatBomb** - Creates multiple images of cats! (5)\n" +
"**Color** - Creates a Rich Embed with a random color (And shows the hex code automatically)\n" +
"**Dog** - Creates an image of a dog!\n" +
"**DogBomb** - Creates multiple images of dogs! (5)\n" +
"**Embed** - Puts the text you input into a Rich Embed\n" +
"**Flip** - Flips the text you input\n" +
"**GreenText** - Makes a green code block containing text that you specify\n" +
"**MemeDoge** - Creates a doge meme (Copypasta)\n" +
"**OrangeText** - Makes an orange code block containing text that you specify\n" +
"**React** - Turns text into reactions!\n" +
"**Reverse** - Reverses the text you input\n" +
"**RPN** - Reverse Polish notation\n" +
"**Shoot** - Lets you shoot some people!\n" +
"**Shout** - Turns text into emotes!\n" +
"**Sigh** - Makes a giant sigh\n" +
"**SuperReact** - Reacts with a random emote that you are able to use\n" +
"**Time** - Shows the time of an area you name\n" +
"**XKCD** - Generates a random webcomic\n";

//Info
const info = "" +
"**Avatar** - Shows a persons avatar\n" +
"**Edits** - Checks the edits of a message\n" +
"**Emotes** - Shows a guild's emotes\n" +
"**Guild** - Shows information about a server\n" +
"**Icon** - Shows a guilds icon\n" +
"**Id** - Shows the ids of objects\n" +
"**Idd** - Rewrite of id\n" +
"**Locate** - Finds where an emoji is from\n" +
"**Stats** - Shows the bot's statistics\n" +
"**User** - Shows information about a user\n";

//Moderation
const moderation = "" +
"**Ban** - Ban someone by mentioning them\n" +
"**Kick** - Kick someone by mentioning them\n";


//Commands Constants

//Color
const ColorDesc = "" +
"Generates a random color or outputs with a specified color.";

const ColorUsage = "" + 
"//color [Hex Code]\n" +
"\tProduces a color based on what hex code you input\n" +
"//color[Integer]\n" +
"\tProduces a color based on what integer you input\n" +
"//color [Random Stuff]\n" +
"\tProduces a random color\n" +
"//color[auto]\n" +
"\tMakes it so that the color is equal to your current role";

const ColourDesc = "" + 
"Generates a random colour or outputs with a specified colour.";

const ColourUsage = "" + 
"//colour [Hex Code]\n" +
"\tProduces a colour based on what hex code you input\n" +
"//colour[Integer]\n" +
"\tProduces a colour based on what integer you input\n" +
"//colour [Random Stuff]\n" +
"\tProduces a random colour\n" +
"//colour[auto]\n" +
"\tMakes it so that the colour is equal to your current role";
	
//Embed
const EmbedDesc = "" +
"Generates a Rich Embedded message with message content of your choice.";

const EmbedUsage = "" +
"//embed [message content]\n" +
"\tProduces a Rich Embed with the message content you provide";

const EmbUsage = "" +
"//emb [message content]\n" +
"\tProduces a Rich Embed with the message content you provide";

const EmbdUsage = "" +
"//embd [message content]\n" +
"\tProduces a Rich Embed with the message content you provide";

//Flip
const FlipDesc = "" +
"Flips the message you provide upsidedown!";

const FlipUsage = "" +
"//flip [message content]\n" +
"\tProduces a flipped message with the message content you provide";


//GreenText
const GreenTextDesc = "" +
"Makes some green text.\n" +
"Each new line will be prefixed with a `>`."

const GreenTextUsage = "" +
"//greentext [message content]\n" +
"\tProduces a message with the message content you provide in a green coloration";

const GreenUsage = "" +
"//green [message content]\n" +
"\tProduces a message with the message content you provide in a green coloration";


const time = new Date();

function exec(message, args){
	
	const urgs = message.content.split(/\s+/).slice(1);

    //Incase nothing is presented for the help menu	
	if (!urgs[0]) {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription("Type //help [command] to learn how to use a command! (coming soon)").setColor("#2200FF").setTitle(`Help Menu`).addField("Want all of the help commands?", "Type `//help all`").addField("Want all of the fun help commands?", "Type `//help fun`").addField("Want all of the utility help commands?", "Type `//help utility` or `//help util`").addField("Want all of the info help commands?", "Type `//help information` or `//help info`").addField("Want all of the moderation help commands?", "Type `//help moderation` or `//help mod`"));	
    }
	
	//Categories
	
	//All Categories
    if (urgs[0]=="all") {
	args.amount = Math.min(args.amount, 200);
    let ms;
    let delay=500;
    let currentTime;
    for(let i=1;i<args.amount+1;i++){
      message.channel.sendEmbed(new Discord.RichEmbed().setDescription("Type //help [command] to learn how to use a command! (coming soon)").setColor("#2200FF").setTitle(`Help Menu`).addField("Fun Help Menu", fun).addField("Info Help Menu", info).addField("Utility Help Menu", utility).addField("Moderation Help Menu", moderation));
      ms=time.getMilliseconds();

      do
      {
        currentTime=time.getMilliseconds;
      }while((currentTime)-ms<delay);
    }  message.delete();
	  }
	  
	//Fun Commands
	if (urgs[0]=="fun") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(fun).setColor("#2200FF").setTitle(`Fun Help Menu`));
    }
	
	//Information Commands
	if (urgs[0]=="information") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed().setDescription(info).setColor("#2200FF").setTitle(`Information Help Menu`));
    }
	
	//Info Commands
	if (urgs[0]=="info") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription(info)
		.setColor("#2200FF")
		.setTitle(`Info Help Menu`));
    }
	
	//Utility Commands
	if (urgs[0]=="utility") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription(utility)
		.setColor("#2200FF")
		.setTitle(`Utility Help Menu`));
    }
	
	//Util Commands
	if (urgs[0]=="util") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription(utility)
		.setColor("#2200FF")
		.setTitle(`Util Help Menu`));
    }
	
	//Moderation Commands
	if (urgs[0]=="moderation") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription(moderation)
		.setColor("#2200FF")
		.setTitle(`Moderation Help Menu`));
    }
	
	//Mod Commands
	if (urgs[0]=="mod") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription(moderation)
		.setColor("#2200FF")
		.setTitle(`Mod Help Menu`));
    }
	
	//Color Command
	if (urgs[0]=="color") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Color", ColorDesc)
		.addField("Aliases:", "Color\n"+"Colour")
		.addField("Usage:", ColorUsage));
    }
	
	//Color Command Alias: Colour
	if (urgs[0]=="colour") {
	message.delete();		
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Colour", ColourDesc)
		.addField("Aliases:", "Colour\n"+"Color")
		.addField("Usage:", ColourUsage));
    }
	
	//Embed Command
	if (urgs[0]=="embed") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Embed", EmbedDesc)
		.addField("Aliases:", "Embed\n"+"Emd\n"+"Embd")
		.addField("Usage:", EmbedUsage));
    }
	
	//Embed Command Alias: Emb
	if (urgs[0]=="emb") {
	message.delete();	
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Emb", EmbedDesc)
		.addField("Aliases:", "Embd\n"+"Embed\n"+"Emb")
		.addField("Usage:", EmbUsage));
    }
	
	//Embed Command Alias: Embd
	if (urgs[0]=="embd") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Embd", EmbedDesc)
		.addField("Aliases:", "Emb\n"+"Embd\n"+"Embed")
		.addField("Usage:", EmbdUsage));
    }
	
	//Flip Command
	if (urgs[0]=="flip") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Flip", FlipDesc)
		.addField("Aliases:", "Flip")
		.addField("Usage:", FlipUsage));
    }
	
	//GreenText Command
	if (urgs[0]=="greentext") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("GreenText", GreenTextDesc)
		.addField("Aliases:", "GreenText\n" + "Green")
		.addField("Usage:", GreenTextUsage));
    }	
	
	//GreenText Command Alias: Green
	if (urgs[0]=="green") {
	message.delete();
    return message.channel.sendEmbed(new Discord.RichEmbed()
		.setDescription("Beta Thing")
		.setColor("#2200FF")
		.setTitle(`Singular Command Help Menu`)
		.addField("Green", GreenTextDesc)
		.addField("Aliases:", "Green\n" + "GreenText")
		.addField("Usage:", GreenUsage));
    }	
}

module.exports = new Command('help', exec, {
    aliases: ['help'],
    args: [
        {
          id: 'amount',
          type: 'integer',
          default: 1
        }
    ],
    category: 'info'
});

