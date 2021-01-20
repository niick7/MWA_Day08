const express = require("express");
const router = express.Router();
const booksController = require("../controllers/books-controller");

router.route("/books").get(booksController.getBooks);
router.route("/books/:bookId").get(booksController.getBook);

module.exports = router;