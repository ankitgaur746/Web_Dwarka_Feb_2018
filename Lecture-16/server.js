/**
 * Created by aayusharora on 4/21/18.
 */

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const userconfig = require('./userconfig.json');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'login'
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'dog is here'}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

app.post('/login', passport.authenticate('local', {
    successRedirect: '/success',
    failureRedirect: '/' }));

passport.use(new passportLocal(function(username, password, done){
    getHash(username, function(hash){
        compare(password,hash[0]['password'],function(data,cb){
                if(!data){
                    cb(done(null, false, {message: "Incorrect Password"}));
                }
                else {
                    cb(done(null, username));
                }

            })
    })
}));

function compare(password, hash, callback) {
    bcrypt.compare(password, hash, function(err, res) {
        callback(res, function(x){
            return x;

        });
    });

}

function getHash(username, callback){
    if(username) {
        connection.query('select * from auth where username=?', [username], function(err, result){
            if(err) throw err;
            callback(result);

        });
    }


}
function connectDB() {
    connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        }

        console.log('connected as id ' + connection.threadId);
    });
}

passport.serializeUser(function(user, done) {
    return  done(null, userconfig.id);
});

passport.deserializeUser(function(id, done) {
    if(id === userconfig.id) {
        return done(null, userconfig.username);
    }
});


app.post('/signup', function(req,res){
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.signup_password, salt, function(err, hash) {
            connection.query('INSERT INTO auth (username, password) VALUES(?,?)', [req.body.signup_username, hash], function(err, results){
                if(err) throw err;
                res.send("Success");

            })
        });
    });

});

app.get('/student', function(req,res){
    console.log(req.user);
   if(req.user) {
       res.send("Student");

   }
   else {
       res.redirect('/');
   }

});

app.get('/success', function(req,res){
    res.send("Success");
});

app.listen(5000, function(){

    console.log("App running on port 5000");
    connectDB();

});

