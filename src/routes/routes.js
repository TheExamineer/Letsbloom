const express = require("express");
const router = express.Router();

const {getBooks,addBook,updateBook } = require("../controller/CrudController");

//route to get all users;   
router.get("/books", getBooks);
router.post("/books", addBook);
router.put("/books/:id", updateBook);

module.exports = router;