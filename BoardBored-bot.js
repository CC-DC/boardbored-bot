var Discord = require("discord.js");
var yt = require('ytdl-core');
var now = require('performance-now');
//NEW
var dgram = require('dgram');
var server = dgram.createSocket('udp4');
//NEW
var bot = new Discord.Client();

server.on('error', (err) => {
  console.log(`server error:\n${err.stack}`);
  server.close();
});

server.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  var address = server.address();
  console.log(`server listening ${149368356821139456}:${01234}`);
});

server.bind(01234);
// server listening 0.0.0.0:41234
//NEW

if (process.env.NODE_ENV !== 'production'){
  require('longjohn');
}

bot.on ("message", message =>
{
	let prefix = "%";
//If no prefix stop
 if(!message.content.startsWith(prefix)) return;
//If author of message with same prefix is bot with same prefix, ignore
 if(message.author.bot) return;
//Start Array of commands so its easier to input with if/else statements
 if (message.content.startsWith(prefix + "CENA"))
	{
//defining voice channel here with this code:
		var voiceChannel = message.member.voiceChannel;
		if (!voiceChannel)
		{
      return message.reply("Please be in a voice channel first!");
    }
//Actual establishment of connection to voice channel
		voiceChannel.join()
		.then(connection =>
			{
			 var stream = yt("https://www.youtube.com/watch?v=77Sg-Je6qR8", {audioonly: true});
			 var dispatcher = connection.playStream(stream);
			 dispatcher.on("end", () =>
			 {
				 voiceChannel.leave();
			 });
		 });
} else if (message.content.startsWith(prefix + "pylons"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=tEJd838oNp4", {audioonly: true});
		 var dispatcher = connection.playStream(stream);
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
} else if (message.content.startsWith(prefix + "BAWKSES"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=cO3MttgvHUY", {audioonly: true});
		 var dispatcher = connection.playStream(stream);
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
} else if (message.content.startsWith(prefix + "BANEBLADE"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=bYHI9RXYhAg", {audioonly: true});
		 var dispatcher = connection.playStream(stream);
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
} else if (message.content.startsWith(prefix + "myboy"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=BNEJ953Z7V0", {audioonly: true});
		 var dispatcher = connection.playStream(stream);
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
} else if (message.content.startsWith(prefix + "fleshwound"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=ra_cUTmQykc", {audioonly: true});
		 var dispatcher = connection.playStream(stream);
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
} else if (message.content.startsWith(prefix + "thermaldrill"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=vsW2sYiChCo", {audioonly: true});
		 var dispatcher = connection.playStream(stream);
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
} else if (message.content.startsWith(prefix + "OJKai"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=H7_J6_6urt4", {audioonly: true});
		 var dispatcher = connection.playStream(stream);

		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
   });
} else if (message.content.startsWith(prefix + "OJSora"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=BYVy30hru6s", {audioonly: true});
		 var dispatcher = connection.playStream(stream);
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
} else if (message.content.startsWith(prefix + "OJPeat"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=gfZj2SGZWGE", {audioonly: true});
		 var dispatcher = connection.playStream(stream);
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
} else if (message.content.startsWith(prefix + "OJ"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=31w5OIA9OLQ&list=PLt5VTAP2XOT4YkmrnilFmYag-53lgYQuW", {audioonly: true});
		 var dispatcher = connection.playStream(stream);
		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
} else if (message.content.startsWith(prefix + "CHICKEN"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=hjl6nU_4ilg", {audioonly: true});
		 var dispatcher = connection.playStream(stream);

		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
} else if (message.content.startsWith(prefix + "CHRIS"))
{
	var voiceChannel = message.member.voiceChannel;
	if (!voiceChannel)
	{
		return message.reply("Please be in a voice channel first!");
	}
//Actual establishment of connection to voice channel
	voiceChannel.join()
	.then(connection =>
		{
		 var stream = yt("https://www.youtube.com/watch?v=0ca0GynQFSs", {audioonly: true});
		 var dispatcher = connection.playStream(stream);

		 dispatcher.on("end", () =>
		 {
			 voiceChannel.leave();
		 });
	 });
 } else if (message.content.startsWith(prefix + "help"))
{
	message.channel.sendMessage(" Commands with '%' prefix: CENA, BAWKSES, BANEBLADE, pylons, fleshwound, thermaldrill, OJKai, OJSora, OJPeat, OJ, CHICKEN, CHRIS");
}
});
bot.on("ready", () =>
{
  console.log("Rockin n rollin");
});
bot.on('error', e => { console.error("Keep your sandwich."); });
bot.on('warn', e => { console.warn("Uh oh."); });
bot.on('debug', e => { console.info("constructing additional pylons..."); });
//bot token goes here:
bot.login("MjI4MzY5MjAwNDAwMzAyMDgx.CsWd9A.9tq5XhPH37sd62InNunGrRZAEiA");
