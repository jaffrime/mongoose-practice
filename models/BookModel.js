var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: String,
  author: String,
  pages: Number,
  genres: [String],
  rating: Number
});

// New Code...
var Book = mongoose.model("BookModel", bookSchema);
module.exports = Book;
