var express = require('express')
var fs = require('fs')
var app = express()
var fileName = process.argv[3]

app.get('/books', function (req, res) {
    fs.readFile(fileName, function (err, data) {
        if (err) {
            res.end('Err:' + err)
        } else {
            res.json(JSON.parse(data))
        }
    })
})

app.listen(process.argv[2])