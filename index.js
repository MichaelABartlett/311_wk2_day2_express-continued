const express = require("express");
//const bodyParser = require("body-parser");

const app = express();
app.use(express.json())

// connected out static content
app.use(express.static("./public"));


// we added some routes 
let commentRoutes = require("./routes/comments");
app.use(commentRoutes);

// added today
let contactsRoutes = require("./routes/contacts");
app.use(contactsRoutes);

let productsRoutes = require("./routes/products");
app.use(productsRoutes);

let vehiclesRoutes = require("./routes/vehicles");
app.use(vehiclesRoutes);

// added today


const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
