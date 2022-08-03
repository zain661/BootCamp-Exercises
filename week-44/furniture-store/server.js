const express = require ("express")
const app = express()
const path = require("path")
const port = 5000
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "./node_modules")));

app.get('/priceCheck:name', function (request, response) {
    const name = request.params.name
    let objPrice = {price : null}
    for(let i of store){
        if(i.name===name){
            objPrice = {price : i.price}
        }
    }
    response.send(objPrice)
})
app.listen(port,function(){
    console.log(`Running server on port ${port}`);
})
