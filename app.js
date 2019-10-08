const express = require("express");
const cors = require("cors");
const multer = require("multer");


var app = module.exports = express();
var upload = multer({dest: "uploads/"});

app.use(express.json());
app.use(cors());

//app.get('', function(req, res, next){
//    res.sendFile(__dirname + "/index.html");
//})
app.use(express.static(__dirname + "/public"));
app.post("/upload",upload.single("file"), function(req,res, next){

return res.json(req.file);
});

app.listen(process.env.PORT || 3000, function(){
    console.log("All is working");
} )