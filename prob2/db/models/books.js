const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  rate: {
    type: Number,
    min: 1,
    max: 5,
    "default": 4
  },
  year: {
    type: Number,
    "default": 1958
  }
})

mongoose.model("Book", bookSchema, "books")