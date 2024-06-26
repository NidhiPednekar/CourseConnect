
var express = require('express')
var app = express()

const PORT = process.env.PORT || 3003;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/register.html')
});

app.listen(PORT, () => {
    //console.log(`Server is running at http://localhost:${PORT}`);
});
