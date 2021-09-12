
// import in the initial array of comments
let db = require("../data/comments");

// this variabel can be used to generate new ids for new comments
let nextId = 5;

// return the list of comments that are currently held in the db array
let list = function(req, res){
    console.log("controller.comments.list");
    // code to return all the comments on the response
    res.json(db);
}

// return the first item with the id that matches the request
let show = function(req, res){
    console.log("controller.comments.show", req.params);
    // code to return a single comment by id
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



// we will create a comment, assign it an id, and add it to out db array
// the content of the comment will be inside the request body
let create = function(req,res){
    console.log("controller.comments.create", req.body);

    let newComment = req.body;
    newComment._id = nextId;
    nextId ++;
    db.push(newComment);
    res.sendStatus(204);


    // code to create a new comment
    // add 
}

module.exports = {list,show,create};