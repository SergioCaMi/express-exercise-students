const express = require("express");
const path = require("path");
const { palindrome } = require('./utils/palindrome/index.js');
const app = express();
const port = 3000;


app.get("/check/:check", (req, res) => {
    console.log("Petición recibida");
    res.send(`La palabra ${req.params.check} ${palindrome(req.params.check) ? "SI" : "NO"} es un palíndromo`);
});

app.use((req, res)=>{
    res.status(404).send(`404. Resource not found`);
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en http://localhost:${port}`);
});
