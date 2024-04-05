const express = require('express');
const app = express();
const path = require('path');

// call the route of the JSON file.
app.get('/mandarinDays', (req, res) => {
    const filePath = path.join(__dirname, 'mandarinDays.json');
    res.sendFile(filePath);
});

// Call the route of the HTML file.
app.get('/index', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    res.sendFile(filePath);
});

app.use(function (req, res, next) {
    //in case the page doesn't run.
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});
//define the port as 8000.
let port = 8000;
app.listen(port, function(){
    console.log("App is on the port " + port + "!");
});



