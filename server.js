var mysql = require("mysql");
var express = require("express");
var bcrypt = require("bcryptjs");
var app = express();

var session = require("express-session");
var cookieParser = require("cookie-parser");

app.use(session({ secret: "app", cookie: { maxAge: 1*1000*60*60*24*365 }}));
app.use(cookieParser());

// Initializes the connection variable to sync with conventions_db
var connection = mysql.createConnection({
	host: "localhost",
	port: 3000,
	user: "root",
	password: "password",
	database: "conventions_db"
});

connection.connect();

app.get('/attendees',function(req,res){
    connection.query('SELECT * FROM animals',function(error,results,fields){
        if (error) res.send(error)
        else res.json(results)
    })
});

app.post('/attendees',function (req,res){
    connection.query('INSERT INTO attendees (name,email,company,DEFAULT(picked_up_swag),DEFAULT(picked_up_lunch),user_id,DEFAULT(ts)) VALUES (?)',[req.body.name],function(error,results,fields){
        if (error) res.send(error)
        else res.redirect('/')
    })
});


app.get("/", function(req, res) {
	res.render();
	// render landing page
});

app.get("/signup/:email/:password/:admin", function(req, res){
	if (req.params.admin == "true") {
		var is_admin = true;
	} else {
		var is_admin = false;
	}
	bcrypt.genSalt(10, function(err, salt) {
		
		bcrypt.hash(req.params.password, salt, function(err, p_hash) {
			connection.query("INSERT INTO users (email, password_hash, admin) VALUES (?, ?)", [req.params.email, p_hash, is_admin], function (error, results, fields) {
				if (error) throw error;

				if(results.length == 0) {
					res.send("Please enter a valid email address");
				} else {
					bcrypt.compare(req.params.password, results[0].password_hash, function(err, result) {
						if (result == true) {
							req.session.user_id = results[0].id;
							req.session.email = results[0].email;

							res.send("you are logged in");
						} else {
							res.redirect("/");
						}
					});
				}
			});			
		});
	});
});

app.get("/logout", function(req, res) {
	req.session.destroy(function(err) {
		res.send("You are logged out");
	});
});

app.listen(3000, function(){
	console.log("listening on 3000");
});