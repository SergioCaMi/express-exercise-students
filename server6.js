const express = require('express')
const fs = require('fs');
const app = express();
const path = require('path');
const port = 3000;


app.use(express.static("server-6-static-files"));
app.use(express.urlencoded({ extended: true })); 

app.get('/formulario', (req, res) => {
  res.status(200).send(`
    <html>
    <head>
    <link rel="stylesheet" href="/estilos.css">
    </head>
    <body>
    <form class="form" method="POST" action="/formulario">
    <label for="name" class="label-name">Name</label>
    <input type="text" id="name" name="name" maxlength="40" class="field field-name" />
  
    <label for="email" class="label-email">Email Address</label>
    <input type="email" id="email" name="email" maxlength="40" class="field field-email" />
  
    <label for="message" class="label-message">Message</label>
    <textarea id="message" name="message" cols="30" rows="5" maxlength="400" class="field field-message"></textarea>
  
    <input type="submit" value="Send Message" class="button" />
  </form>
  </body>
    </html>
  `)
});

app.post('/formulario', (req, res) => {
  const { name, email, message } = req.body;
  const row = `\n"${name}","${email}","${message}"`;
  const routeCSV = path.join(__dirname, 'inscritos.csv');

  fs.appendFileSync(routeCSV, row);
  res.send("Usuario inscrito correctamente");
});

app.use((req, res)=>{
    res.status(404).send(`404. Resource not found`);
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en http://localhost:${port}`);
});
