const express = require('express');
require('dotenv').config()

let {SURVEY_PATH, DEVMTNWWW_PATH, DEVMOUNTAIN_WEBSITE_PATH} = process.env

const app = express();

app.use("/", express.static(__dirname + "/assets"));
app.use("/surveys", express.static(__dirname + SURVEY_PATH));
app.use("/devmtnwww", express.static(__dirname + DEVMTNWWW_PATH));
app.use("/Devmountainwebsite", express.static(__dirname + DEVMOUNTAIN_WEBSITE_PATH));

app.get('/surveys', (req, res) => {
    let options = { 
        root: __dirname + SURVEY_PATH
    }
    res.sendFile('index.html', options)
})

app.get('/devmtnwww', (req, res) => {
    let options = { 
        root: __dirname + DEVMTNWWW_PATH
    }
    res.sendFile('index.html', options)
})

app.get('/Devmountainwebsite', (req, res) => {
    let options = { 
        root: __dirname + DEVMOUNTAIN_WEBSITE_PATH
    }
    res.sendFile('index.html', options)
})

const port = 4898;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})