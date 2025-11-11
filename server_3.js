const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Module3.html');
});

app.use(express.static(__dirname));

app.listen(8852, '0.0.0.0', () => {
    console.log('Server for Module3.html running on port 8852');
});
