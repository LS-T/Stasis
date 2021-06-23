const express = require("express");
const session = require('express-session');
const Mongoose = require("mongoose");
const MongoStore = require('connect-mongo');
const routes = require("./routes");


const PORT = process.env.port || 3001;

const app = express();

const sessionStore = MongoStore.create({
    mongoUrl: process.env.MONGODB_URI || 'mongodb://localhost/stasis',
    collection: "users"
})

app.use(
    session({
        secret:'super duper secret',
        saveUninitialized: true,
        resave: false,
        store: sessionStore,
        cookie: {
            maxAge:3600000,
        },
    })
);



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('client/public'))





if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use(routes);



Mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stasis", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });



