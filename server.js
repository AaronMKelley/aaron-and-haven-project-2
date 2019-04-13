var mysql = require("mysql");
var express = require("express");
var bcrypt = require("bcryptjs");
var app = express();
var methodOverride = require('method-override')
var bodyParser = require('body-parser');
var session = require("express-session");
var cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(methodOverride('_method'))
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: "app", cookie: { maxAge: 1*1000*60*60*24*365 }}));
// Initializes the connection variable to sync with conventions_db
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "conventions_db"
});

connection.connect(function(){
	console.log(connection.threadId)
})

app.get('/attendees',function(req,res){
    connection.query('SELECT * FROM attendees',function(error,results,fields){
        if(error) res.send(error)
        else res.json(results)
    })
});

app.get('/speakers',function(req,res){
    connection.query('SELECT * FROM speakers',function(error,results,fields){
        if(error) res.send(error)
        else res.json(results)
    })
});

app.post('/add_event',function (req,res){
    connection.query('INSERT INTO attendees SET ?',[req.body],function(error,results,fields){
        if (error) res.send(error)
        else res.redirect('/')
    })
});

app.post('/speaker_sign_up',function(req,res){
	console.log(req.body)
	/*
	{ speaker_name: 'Aaron',
  speaker_topic: 'Vampires',
  speaker_title: 'Vampires After Dark',
  speaker_code: '12345' }
	*/
    var query = connection.query('INSERT INTO speakers SET ?',
    [req.body],
    function(error,results,fields){
		console.log(query.sql)
        if (error) {
			res.send(error)
			console.log(error)
		}
        else res.send('worked')
	})
	//res.send('ok')
});







// app.get('*', function(req, res){
// 	res.redirect('/')
// });


// app.get("/", function(req, res) {
// 	res.render();
// 	// render landing page
// });

app.post("/signup", function(req, res){
	if(req.body.user_admin == "true") {
		admin_status = 1;
	} else {
		admin_status = 0;
	}

	bcrypt.genSalt(10, function(err, salt) {
		
		bcrypt.hash(req.body.user_password, salt, function(err, p_hash) {
			var query = connection.query("INSERT INTO users (email, password_hash, admin) VALUES (?, ?, ?)", [req.body.user_email, p_hash, admin_status], function (error, results, fields) {
				// console.log(query.sql)
				if (error) throw error;
				res.redirect("/add_event.html");
			});			
		});
	});
});

app.get("/signin", function(req, res) {
	// res.send('hi')
	connection.query('SELECT * FROM users WHERE email = ?', [req.query.user_email],function (error, results, fields) {
		// res.json(results);
	  if (error) throw error;

	  console.log("hello");
	  
	  if (results.length == 0){
	  	res.send('try again');
	  }else {
	  	bcrypt.compare(req.body.user_password, results[0].password_hash, function(err, result) {
	  	    
	  	    if (result == true){

	  	      req.session.user_id = results[0].id;
	  	      req.session.email = results[0].email;

	  	      res.send('you are logged in');

	  	    }else{
	  	      res.redirect('/add_event.html');
	  	    }
	  	});
	  }
	});
})

app.get("/logout", function(req, res) {
	req.session.destroy(function(err) {
		res.send("You are logged out");
	});
});

app.listen(3000, function(){
	console.log("listening on 3000");
});