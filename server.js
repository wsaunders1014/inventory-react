var express = require('express')
var app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World!')
// })
app.use(express.static(__dirname));
app.listen(3000, function () {
})