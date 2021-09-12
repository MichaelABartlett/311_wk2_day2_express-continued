
// import in the initial array of products
let db = require("../data/products");

// this variable can be used to generate new ids for new comments
let nextId = 11;

// return the list of products that are currently held in the db array
let list = function(req, res){
    console.log("controller.products.list");
    // code to return all the comments on the response
    res.json(db);
}

// return the first product with the id that matches the request
let show = function(req, res){
    console.log("controller.products.show", req.params);
    // code to return a single product by id
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

// create a product, assign it an id, and add it to the db array
// the content of the product will be inside the request body
let create = function(req, res){
    console.log("controller.products.create", req.body);

    let newProduct = req.body;
    newProduct._id = nextId;
    nextId ++;
    db.push(newProduct);
    res.sendStatus(204);
}

module.exports = {list, show, create};