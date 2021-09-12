
// inport the initial array of vehicles
let db = require("../data/vehicles");

// this variable can be used to generate new id for new vehicles
let nextId = 21;

// return the list of the vehicles that are currently held in teh db array
let list = function(req, res){
    console.log("controller.vehicles.list");
    console.log(db)
    // code to return all the vehicles in the response
    res.json(db);
}

// return the first item with the id that matches the request
let show = function(req, res){
    console.log("controller.vehicles.show", req.params);
    // code to return a single vehicle by id
    // the id is going to be a path param
    let id = req.params.id;

    let found = db.find(function(element, index){
        if(element._id == id){
            return true;
        } else {
            return false;
        }
    })

    res.json(found);
}

// we will create a vehicle, assign it an id, and add it to the db array
// the content of the vehicle will be inside the request body
let create = function(req, res){
    console.log("controller.vehicles.create", req.body);

    let newVehicle = req.body;
    newVehicle._id = nextId;
    nextId ++;
    db.push(newVehicle);
    res.sendStatus(204);
}

module.exports = {list,show,create};