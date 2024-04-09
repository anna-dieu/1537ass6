const express = require("express");
const app = express();
const fs = require("fs");
const mysql = require("mysql2");

// Serve static files
app.use("/js", express.static("js"));
app.use("/css", express.static("css"));
app.use("/img", express.static("img"));

// Read index.html asynchronously
app.get("/", function (req, res) {
    fs.readFile("index.html", "utf8", (err, doc) => {
        if (err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
            return;
        }
        res.send(doc);
    });
});

// Fetch data asynchronously from the database and send it as a table
app.get("/table-async", function (req, res) {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "assignment6",
    });
    
    connection.query("SELECT a01275485_user.user_name, a01275485_user.email_address, a01275485_user_timeline.post_text, a01275485_user_timeline.views FROM a01275485_user_timeline INNER JOIN a01275485_user ON a01275485_user_timeline.user_id = a01275485_user.ID;", function(err, results, fields){
        if(err) {
            console.error(err);
            res.status(500).send("Internal Server Error");
            return;
        }
        let table = "<table><tr><th>User Name</th><th>Email</th><th>Text</th><th>Views</th></tr>";
        for (let i = 0; i < results.length; i++) {
            table += "<tr><td>" + results[i].user_name + "</td><td>" + results[i].email_address + "</td><td>"
                + results[i].post_text + "</td><td>" + results[i].views + "</td></tr>";
        }
        table += "</table>";
        res.send(table); // Sending the table back to the client
    });

    connection.end(); // Close the MySQL connection after querying
});

const port = process.env.PORT || 8000; // Make the port configurable
app.listen(port, function () {
    console.log("Listening on port " + port + "!");
});



