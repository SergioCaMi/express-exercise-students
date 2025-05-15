const express = require('express');
const path = require('path');

const app = express();

app.get("/", (req, res) => {
    const indexRoute = path.join(__dirname, "server3b-files", "index.html");
    res.sendFile(indexRoute);
});

app.get('/patient/:idPatient', (req, res)=>{
const file = path.join(__dirname, "server3b-files", `${req.params.idPatient}.pdf`);
  console.log("Petición recibida");
  res.sendFile(file);

});


app.listen(3001, ()=>{
    console.log(`Escuchando peticiones en http://localhost:3001`);
});
  