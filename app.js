const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/home.html'));
});

app.use(express.static(path.join(__dirname, './public')));



app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
  });
app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
  });





app.listen(process.env.PORT || 3001, function () {
    console.log("Servidor corriendo en el puerto 3001");
});