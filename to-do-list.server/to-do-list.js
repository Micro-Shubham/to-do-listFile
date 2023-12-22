//import express
const express = require('express')
const bodyParser = require("body-parser")
const app = express();
app.use(bodyParser.json());
//create an empty array that will store 
let tasks = [
    {
        title: "market",
        des: "vegetable",
        id: 123,
    },
    {
        title: "garments",
        des: "pants",
        id: 124
    },
    {
        title: "shop",
        des: "pen",
        id: 125
    }

];

//get
app.get("/get", function (req, res) {
    //logic

    res.json(tasks);

});

//post 
app.post("/add", function (req, res) {

    const task = {
        title: req.body.title,
        des: req.body.des,
        id: Math.ceil(Math.random() * 10000),
    }
    tasks.push(task);
    res.json({
        msg: "task added successfully"
    })
});

//put
app.put("/put/:id", function (req, res) {
    const updated_id = req.params.id;
    const updated_title = req.body.title;
    const updated_des = req.body.des;
    for (let i = 0; i < tasks.length; i++) {

        if (tasks[i].id == updated_id) {
            tasks[i].title = updated_title;
            tasks[i].des = updated_des;
            res.json(tasks[i]);
            return;
        }
    }
    res.json({
        mesg: "not found",
        id: updated_id
    })

});

//delete 
app.delete("/delete/:id", function (req, res) {
    const dele_id = req.params.id;
    let tasks2 = []
    for (let i = 0, index = 0; i < tasks.length; i++) {

        if (tasks[i].id != dele_id) {
            tasks2[index] = tasks[i]
            index++;
        }

    }
    tasks = tasks2
    res.json(tasks);


})

app.listen(3000, () => {
    console.log("server is listening on port  3000")
}

);