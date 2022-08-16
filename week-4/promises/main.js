const express = require("express");
const app = express();
const axios = require("axios");

$.get('/randomWord').then (function(word){
    let randomBook = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
    let randomGif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`)
    Promise.all([randomBook, randomGif]).then(function(res){
        console.log(res[0],re[1])
    })
})

  
$.get('/randomWord').then(function(word) {
        return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
    })
  .then(function(res) {
        console.log(res);
    })




const port = 2911
app.listen(port,function(req,res){
    console.log(`the server running on port ${port}`)
}
)






