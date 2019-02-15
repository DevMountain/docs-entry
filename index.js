const express = require('express');

const app = express();

app.use("/", express.static(__dirname + "/assets"));
app.use("/surveys", express.static(__dirname + "/../api-documenation/surveys/build/"));
app.use("/devmtnwww", express.static(__dirname + "/../api-documenation/devmtnwww/build/"));
app.use("/Devmountainwebsite", express.static(__dirname + "/../api-documenation/Devmountainwebsite/build/"));

app.get('/surveys', (req, res) => {
    let options = { 
        root: __dirname + '/../api-documenation/surveys/build/'
    }
    res.sendFile('index.html', options)
})

app.get('/devmtnwww', (req, res) => {
    let options = { 
        root: __dirname + '/../api-documenation/devmtnwww/build/'
    }
    res.sendFile('index.html', options)
})

app.get('/Devmountainwebsite', (req, res) => {
    let options = { 
        root: __dirname + '/../api-documenation/Devmountainwebsite/build/'
    }
    res.sendFile('index.html', options)
})

const port = 4898;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})