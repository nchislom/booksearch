const express = require("express");
const mongoose = require('mongoose');
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Mongo connect method
mongoose.connect('mongodb://localhost/googlebooks', { useNewUrlParser: true });

// Model/Schema definition
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const Book = new Schema({
    title: String,
    authors: String,
    description: String,
    image: String,
    link: String
});

// Define API routes here

//Should return all saved books as JSON.
app.get("/api/books", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Will be used to save a new book to the database.
app.post("/api/books", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Will be used to delete a book from the database by Mongo _id.
app.delete("/api/books/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Send every other request to the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
