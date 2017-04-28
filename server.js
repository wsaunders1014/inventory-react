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
			//res.json({"code" : 100, "status" : "Error in connection database"});
			console.log('Error')
           return;
		}
		console.log('connected as id ' + connection.threadId);
	 	connection.query("select * from inventory_will WHERE session_id = 'test'",function(err,rows){
             connection.release();
             if(!err) {
                 console.log(rows);
             }           
         });
 
         connection.on('error', function(err) {      
               console.log("Error in connection database");
               return;     
         });
	});
	console.log('test');
}
var app = express();

app.use(express.static(__dirname+'/dist/assets/'));
app.get("*",function(req,res,next){
	res.sendFile('index.html',{root:__dirname+'/dist/'});
	next();
});

app.get("/", function(req,res){
	handle_database(req,res);
});

app.listen(3000, function(){
	console.log(`App listening on port 3000!`);
});