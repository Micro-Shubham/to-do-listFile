const express = require("express");
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json())
const db = require("./file.js");
//get 
app.get("/get", function (req, res) {
    //logic
    res.json(db.read());
})
app.post("/post/:id", function (req, res) {
    const addnew = {
        title: req.body.title,
        des: req.body.des,
        id: Math.ceil(Math.random() * 1000)
    }
    const newitem = db.read();
    newitem.push(addnew);
    db.write(newitem);
    res.json({
        mesg: "new object added"
    })
})

app.listen(3000, () => {
    console.log("server is listening on port 3000 ");
})