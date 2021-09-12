
// import in the initial array of contacts
let db = require("../data/contacts");

// this variable can be used to generate new ids for a new comment
let nextId = 6;

// return the list of contacts that are currently held in the db array
let list = function(req, res){
    console.log("controller.contacts.list");
    res.json(db);
}

// return the first
let show = function(req,res){
    console.log("controller.contacts.show: ", req.params);
    //code to return a single contact by id
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

// create a contact, assign it an id, and add it to out db array
// the content of the contact will be inside the request body
let create = function(req, res){
    console.log("controller.contacts.create", req.body);

    let newContact = req.body;
    newContact._id = nextId;
    nextId ++;
    db.push(newContact);
    res.sendStatus(204);

    
}

module.exports = {list,show,create};