const fs = require("fs")
function read() {
    const result = fs.readFileSync("./object.json", "utf-8");
    const data = JSON.parse(result)
    return data;
}
function write(data) {
    const rewrite = JSON.stringify(data);
    fs.writeFileSync("./object.json", rewrite);
    return;
}
module.exports ={
    read,
    write
}
