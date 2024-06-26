const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "College"
}
);

con.connect(function (error) {
    if (error) throw error;

    con.query('select * from Colleges', function (error, result) {
        if (error) throw error;
        console.log(result[0]);
    })
});

module.exports = con; 
