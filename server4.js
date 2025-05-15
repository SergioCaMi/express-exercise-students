const express = require("express");
const path = require("path");
const { palindrome } = require('./utils/palindrome/index.js');
const app = express();

app.get("/check/:check", (req, res) => {
    console.log("Petición recibida");
    res.send(`La palabra ${req.params.check} ${palindrome(req.params.check) ? "SI" : "NO"} es un palíndromo`);
});

app.use((req, res)=>{
    res.status(404).send(`404. Resource not found`);
});


app.listen(3000, () => {
    console.log(`Escuchando peticiones en http://localhost:3000`);
});
