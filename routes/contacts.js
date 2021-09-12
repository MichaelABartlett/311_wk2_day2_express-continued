const express = require("express");

// this will hold the routes taht the application will respond to
const router = express.Router();

// this controller holds the functions / callback of how to handle the request when they come in
const contactsController = require("../controllers/contacts");



/*
/GET contacts
/GET contacts/:id
/POST contacts
 */

// start adding the routes,

// route to fatch all comments
router.get("/contacts", contactsController.list);

// route to get a specific comment by its id
router.get("/contacts/:id", contactsController.show);

// toure to create a new contact
router.post("/contacts", contactsController.create)

module.exports = router;