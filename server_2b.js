const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8850, '0.0.0.0', () => {
    console.log('Server for index.html running on port 8850');
});
