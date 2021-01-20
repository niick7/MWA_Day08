const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/BooksDB";

require("./models/books");

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", function(){
  console.log("Mongodb connected.");
})
mongoose.connection.on("disconnected", function(){
  console.log("Mongodb disconnected.");
})
mongoose.connection.on("error", function(err){
  console.log("Mongodb connection error " + err);
})

process.on("SIGINT", function() {
  mongoose.connection.close(function(){
    console.log("SIGINT: Mongo disconnected by app termination");
    process.exit(0);
  });
})
process.on("SIGTERM", function() {
  mongoose.connection.close(function(){
    console.log("SIGTERM: Mongo disconnected by app termination");
    process.exit(0);
  });
})
process.once("SIGUSR2", function() {
  mongoose.connection.close(function() {
    console.log("SIGUSR2: Mongoose disconnected by app termination");
    process.kill(process.pid, "SIGUSR2");
  });
})