const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.port || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/stasis");

app.listen(PORT, function() {
    console.log(`API server now listening on PORT ${PORT}!`)
})