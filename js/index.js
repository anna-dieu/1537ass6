const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

// we are mapping file system paths to the app's virtual paths
app.use("/js", express.static("/js"));
app.use("/css", express.static("/css"));
app.use("/img", express.static("/img"));


app.get("/", function (req, res) {
    let doc = fs.readFileSync("/index.html", "utf8");

    res.send(doc);
});

app.get("/table-async", function (req, res) {
    const mysql = require("mysql2");
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "assignment6",
    });
    // let usr = "nana";
    // let pwd = "ilikepython123";
    connection.connect();
    let sql = "select a01275485_user.user_name, a01275485_user.email_address, a01275485_user_timeline.post_text, a01275485_user_timeline.views FROM a01275485_user_timeline INNER JOIN a01275485_user ON a01275485_user_timeline.user_id = a01275485_user.ID;"
        connection.query(sql, function(err, results, fields){
            if(err) throw err;
            console.log(results);
            let table = "<table><tr><th>ID</th><th>User Name</th><th>Email</th><th>Text</th><th>Views</th></tr>";
                        for (let i = 0; i < results.length; i++) {
                            table += "<tr><td>" + results[i].user_name + "</td><td>" + results[i].email_address + "</td><td>"
                                + results[i].post_text + "</td><td>" + results[i].views + "</td></tr>";
                        }
                        table += "</table>";
                        res.send(table);
        });
});
//         [usr, pwd],
//         function (error, results, fields) {
//             console.log("results:", results);
//             if (error) {
//                 console.log(error);
//             }
//             let table = "<table><tr><th>ID</th><th>User Name</th><th>First Name</th><th>Last Name</th><th>Email Address</th><th>Password</th></tr>";
//             for (let i = 0; i < results.length; i++) {
//                 table += "<tr><td>" + results[i].ID + "</td><td>" + results[i].user_name + "</td><td>"
//                     + results[i].first_name + "</td><td>" + results[i].last_name + "</td><td>" 
//                     + results[i].email_address + "</td><td>" + results[i].password + "</td></tr>";
//             }
//             table += "</table>";
//             res.send(table);
//             connection.end();
//         }
//     );
// });

// app.get("/table-join", function (req, res) {
//     const mysql = require("mysql2");
//     const connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "assignment6",
//     });
//     let myResults = null;
//     connection.connect();
//     let usr = "nana";
//     connection.execute(
//         "select * FROM a01275485_user_timeline INNER JOIN a01275485_user ON a01275485_user_timeline.user_i
//         d = a01275485_user.ID;"
//         function (error, results, fields) {
//             console.log("results:", results);
//             if (error) {
//                 console.log(error);
//             }
//             let table = "<table><tr><th>First Name</th><th>Date Post</th><th>Post Text</th></tr>";
//             for (let i = 0; i < results.length; i++) {
//                 table += "<tr><td>" + results[i].first_name + "</td><td>" + results[i].date_post + "</td><td>"
//                     + results[i].post_text + "</td></tr>";
//             }
//             table += "</table>";
//             res.send(table);
//             connection.end();
//         }
//     );
// });

// app.get("/table-sync", function (req, res) {
//     connectToMySQL(res);
// });

// async function connectToMySQL(res) {
//     const mysql = require('mysql2/promise');
//     const connection = await mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "assignment6",
//         multipleStatements: true
//     });
//     connection.connect();
//     let usr = "nana";
//     let pwd = "ilikepython123";
//     connection.execute("SELECT * FROM A01275485_user WHERE user_name = ? AND password = ?", [usr, pwd], function (error, rows, fields) {
//         if (error) {
//             console.log(error);
//             res.status(500).send("Error retrieving data from database");
//             return;
//         }
//         let table = "<table><tr><th>ID</th><th>User Name</th><th>First Name</th><th>Last Name</th><th>Email Address</th><th>Password</th></tr>";
//         for (let i = 0; i < rows.length; i++) {
//             table += "<tr><td>" + rows[i].ID + "</td><td>" + rows[i].user_name + "</td><td>"
//                 + rows[i].first_name + "</td><td>" + rows[i].last_name + "</td><td>" 
//                 + rows[i].email_address + "</td><td>" + rows[i].password + "</td></tr>";
//         }
//         table += "</table>";
//         res.send(table);
//         connection.end();
//     });
// }

let port = 8000;
app.listen(port, function () {
    console.log("Listening on port " + port + "!");
});







