const express = require('express')
const app = express()
const path = require("path");
const api = require('./server/routes/api')
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))


// app.use(express.static(path.join(__dirname, "dist")));
// app.use(express.static(path.join(__dirname, "node_modules")));
const port = 1129
// app.get('/', function(req,res){
//     res.send("empty page")
// })

app.use('/' , api)
const wordCounter = {zain: 4}
 app.get('/word/:word', function(req, res) {
         if(wordCounter[req.params.word]) {
            console.log(wordCounter[req.params.word])
             res.send({count: wordCounter[req.params.word]})
         } else {
             res.send({count: 0})
         }
     
 
     })
app.listen(port,function(req,res){
    console.log(port)
})
