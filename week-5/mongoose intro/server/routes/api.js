const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Person = require("../models/Person");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post("/person", function (req, res) {
  const person = req.body;
  if (!person || !person.firstName || !person.lastName || !person.age) {
    res.sendStatus(400).send({ msg: "Please send a person data." });
  }

  const p1 = new Person(person);
  p1.save();
  res.send({ msg: "Person added successfully." });
//   Person.find({},function(err,res){
//      console.log(res)
//   })
});
router.put("/person/:id", function (req, res) {
    const id = req.params.id
    // console.log(req.body.age);
    Person.findByIdAndUpdate( id , { age: 19 } , { new: true }, function (err, person) {
        console.log(person)
    })

  
  res.end();
});

router.delete("/person/" , function(req,res){
    Person.remove(function (err) {
        console.log(err) //usually this will be `null`, unless something went wrong
    })
    res.end()
})
module.exports = router;
