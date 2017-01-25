var $ = require('jquery');
var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();
app.set('port', process.env.PORT || 8000);
app.set('host', process.env.HOST || '127.0.0.1');
// var http = require('http').Server(app);
// var io = require('socket.io')(http);




// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('hello world');
});

// io.on('connection', (socket) => {
//   socket.on('test message', (msg) => {
//     console.log(msg);
//   });
// });
//
// http.listen(8000, () => {
//   console.log('listening on *:8000');
// });



// app.use(express.static('./'));
// app.get('/', function(req, res){
//   res.send('hello world');
// });
//

app.get('/createPost', (req, res) => {

  res.send('got it');
});

app.post('/createPost', (req, res) => {
  //add post to database
  console.log(req);
  res.send(req.toJSON());

//   MongoClient.connect('mongodb://127.0.0.1:27017/test', (err, db) => {
//     if(err) throw err;
//
//     var collection = db.collection('test');
//     collection.insert({a:2},(err, docs) => {
//         collection.count( (err, count) => {
//             console.log(format("count = %s", count));
//             db.close();
//         });
//     });
// });

});
//
// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('test message', (msg) => {
//     console.log(msg);
//   });
// });
//
app.listen(app.get('port'),app.get('host'), ()=>{
  console.log('express listening on port ' + app.get('port'));
});
