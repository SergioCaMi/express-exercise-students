
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const teamPage = path.join(__dirname, 'server3-files', 'team.html');
const aboutPage = path.join(__dirname, 'server3-files', 'about.html');

app.get('/team', (req, res)=>{
    res.sendFile(teamPage);
});
app.get('/about', (req, res)=>{
    res.sendFile(aboutPage);
});


app.use((req, res)=>{
    res.status(404).send(`404. Resource not found`);
});

app.listen(port,()=>{
    console.log(`Server is running at http:localhost:${port}`);
});

