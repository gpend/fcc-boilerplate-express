let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res)=>{
        // res.send("Hello Express")
        const absolutePath = __dirname +               
          '/views/index.html'
        res.sendFile(absolutePath)
})

app.get('json', res.json({"message": "Hello json"}))






































 module.exports = app;
