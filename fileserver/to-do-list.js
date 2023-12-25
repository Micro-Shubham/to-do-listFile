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

app.put("/put/:id", function (req, res) {
    const allitem = db.read();
    const oldId = req.params.id;
    // const newtitle = req.body.title;
    // const newdes = req.body.des;
    const { title: newtitle, des: newdes } = req.body;
    for (let i = 0; i < allitem.length; i++) {
        if (oldId == allitem[i].id) {
            allitem[i].title = newtitle;
            allitem[i].des = newdes;
            res.json({
                mesg: "list update",
                update: allitem[i]
            });
            return;
        }
    }
    res.json({
        mesg: "id not found to update",
        id: newId,
    })
})

app.delete("/delete/:id", function (req, res) {
    let allItem = db.read();
    const delId = req.params.id;
    let arr = [];
    for (let i = 0, index = 0; i < allItem.length; i++) {
        if (allItem[i].id != delId) {
            arr[index] = allItem[i];
            index++;
        }
    }
    allItem = arr;
    db.write(allItem)
    res.json(allItem);
})

app.listen(3000, () => {
    console.log("server is listening on port 3000 ");
})