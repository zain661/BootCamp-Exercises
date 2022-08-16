const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/populationDB");

const SolarSystemSchema = new Schema({
  planets: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
  starName: String,
});

const planetSchema = new Schema({
  name: String,
  system: { type: Schema.Types.ObjectId, ref: "SolarSystem" },

  visitors: [{ type: Schema.Types.ObjectId, ref: "Visitor" }],
});

const visitorSchema = new Schema({
  name: String,
  homaPlanet: { type: Schema.Types.ObjectId, ref: "Planet" },
  visitedPlanet: [{ type: Schema.Types.ObjectId, ref: "Planet" }],
});

const SolarSystem = mongoose.model("SolarSystem", SolarSystemSchema);
const Planet = mongoose.model("Planet", planetSchema);
const Visitor = mongoose.model("Visitor", visitorSchema);

let sys = new SolarSystem({
  planets: [],
  starName: "sun",
});

let pls = new Planet({
  name: "dummy",
  system: sys,
  visitors: [],
});

let vst = new Visitor({
  name: "anyName",
  homaPlanet: pls,
  visitedPlanet: [],
});

sys.planets.push(pls);
pls.visitors.push(vst);
vst.visitedPlanet.push(pls);

// sys.save()
// pls.save()
// vst.save()

Visitor.findOne({})
  .populate("visitedPlanet")
  .exec(function (err, visitor) {
    visitor.visitedPlanet.forEach((v) => {
      console.log("vitited planet name :");
      console.log(v.name);
    });
  });

Planet.find({})
  .populate("visitors")
  .exec(function (err, planet) {
    for (let i of planet) {
      for (let j of i.visitors) {
        console.log("Name :");
        console.log(j.name);
      }
    }
    //planet.visitors.forEach(v => console.log(v.name))
  });
