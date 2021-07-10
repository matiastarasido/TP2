const express = require("express");
const app = express();
const path = require('path');

app.listen(process.env.PORT || 3000, function(){ 
    console.log("Servidor corriendo en el puerto 3000")
});

 app.get("/", function(req, res){
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.use(express.static(path.resolve(__dirname, './public')));
app.use(express.static(path.resolve(__dirname, './views')));