const express = require('express');

const app = express();

// app.use(express.static('assets'))
app.use("/", express.static(__dirname + "/assets"));
// app.use("/surveys", express.static(__dirname + "/build"));
app.use("/surveys", express.static(__dirname + "/../api-documenation/surveys/build/"));

app.get('/surveys', (req, res) => {
    let options = { 
        root: __dirname + '/../api-documenation/surveys/build/'
    }
    res.sendFile('index.html', options)
})

const port = 4898;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})