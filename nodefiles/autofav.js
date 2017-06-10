var twitter = require('twitter');
const CONSUMER_KEY        = process.env.CONSUMER_KEY;
const CONSUMER_SECRET     = process.env.CONSUMER_SECRET;
const ACCESS_TOKEN_KEY    = process.env.ACCESS_TOKEN_KEY;
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const MY_ID               = process.env.MY_ID;
const TARGET_ID           = process.env.TARGET_ID;
let client;

if(CONSUMER_KEY    == undefined || CONSUMER_SECRET    == undefined || ACCESS_TOKEN_KEY   == undefined || ACCESS_TOKEN_SECRET== undefined) {
	console.log('environment variable is not set')
	return;
} else {
	client = new twitter({
			consumer_key       : CONSUMER_KEY       ,
			consumer_secret    : CONSUMER_SECRET    ,
			access_token_key   : ACCESS_TOKEN_KEY   ,
			access_token_secret: ACCESS_TOKEN_SECRET,
	});
}

function run(){
		client.stream('user' , function(stream){
				stream.on('data', function(tweet){
						if(tweet.text && !tweet.retweeted_status) {
								if( TARGET_ID == undefined ? tweet.user.screen_name != MY_ID && !tweet.retweeted_status : tweet.user.screen_name == TARGET_ID && !tweet.retweeted_status) {
										 createFav(tweet.id_str)
								 }
								console.log("------------------------------ TWEEEEEEEEEEEEEET ------------------------------")
								console.log(tweet.id);
								console.log(tweet.user.name + " / " + tweet.user.screen_name);
								console.log(tweet.text+"\r\n");
						}
						if(tweet.retweeted_status) {
								console.log(" ------------------- RT ------------------- ")
								console.log(tweet.id)
								console.log(tweet.user.name + "@ / " + tweet.user.screen_name);
								console.log(tweet.text+"\r\n")
						}
				})
				stream.on('delete' , function(deleteData){
						console.log(" ------------------- DELETE TWEET ------------------- \r\n" + JSON.stringify(deleteData))
				})

				stream.on('error', function(e){
						console.log(e);
						setTimeout( function(){
								stream.destroy();
								run();
						}, 1000 * 20);
				})

				stream.on('end', function(e){
						console.log(e);
						setTimeout( function(){
								stream.destroy();
								run();
						}, 1000 * 20);
				})

				stream.on('disconnect', function(e){
						 console.log(e);
						 setTimeout( function(){
								 stream.destroy();
								 run();
						 }, 1000 * 20);
				 })
		})
}
run();

function createFav(favId){
		client.post('favorites/create',{id : favId},function(){
				console.log("<3 <3 <3 <3\r\n<3 fav it! <3\r\n<3 <3 <3 <3");
		})
}