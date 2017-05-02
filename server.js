var express = require('express');
var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit: 100,
	host     : 'localhost',
   	user     : 'root',
   	password : 'root',
   	database : 'gm',
   	debug: false
});
function handle_database(req,res){
	pool.getConnection(function(err,connection){
		if(err){
			connection.release();
			 res.json({"code" : 100, "status" : "Error in connection database"});
           return;
		}
		console.log('connected as id ' + connection.threadId);
	 	connection.query("select * from inventory_will WHERE session_id = '"+req.params.session_id+"'",function(err,rows){
             connection.release();
             if(!err) {
                res.json(rows);
             }           
         });
 
         connection.on('error', function(err) {      
               res.json({"code" : 100, "status" : "Error in connection database"});
               return;     
         });
	});
}
var app = express();

app.use(express.static(__dirname+'/dist/'));
// app.get("/inv/:session_id", function(req,res,next){
// 	handle_database(req,res);
// 	next()
// });
app.get("/inv/:session_id", function(req,res){
	handle_database(req,res);
});
app.get("*",function(req,res){
	res.sendFile('index.html',{root:__dirname+'/dist/'});
	//next();
});



app.listen(3000, function(){
	console.log(`App listening on port 3000!`);
});