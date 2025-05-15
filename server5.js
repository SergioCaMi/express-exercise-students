const express = require("express");
const path = require("path");
const isPalindrome = require('is-palindrome');
const app = express();
const port = 3000;


app.get("/check/", (req, res) => {
    console.log(req.query.palabra);
    res.send(`La palabra ${req.query.palabra} ${(isPalindrome(req.query.palabra)) ? "SI" : "NO"} es un palíndromo`);
});

app.use((req, res)=>{
    res.status(404).send(`404. Resource not found`);
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en http://localhost:${port}`);
});
