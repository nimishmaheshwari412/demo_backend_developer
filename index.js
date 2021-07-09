const path = require("path");
const express = require("express");
const app = express();


//console.log(__dirname);



const staticPath = path.join(__dirname, "../public");
//built in middle ware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(8000, () => {
    console.log("listing to the port 8000");
});