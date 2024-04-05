//AKA- backend-server side file
const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

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

// Call the server, mark as running
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

