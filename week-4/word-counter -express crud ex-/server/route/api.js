const express = require('express')
const Route =  express.Router()

Route.get('/sanity' , function(req,res){
    res.send("Server up and running")
})
 

 const wordCounter = {}
 Router.get('/word/:word', function(req, res) {
         if(wordCounter[req.params.word]) {
             res.send({count: wordCounter[req.params.word]})
         } else {
             res.send({count: 0})
         }
     
 
     })











module.exports = Route