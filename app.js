let express = require("express");
let app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, "0.0.0.0", () => console.log('App listening on port 3000!'));