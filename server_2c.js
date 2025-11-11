const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/2c.html');
});

app.use(express.static(__dirname));

app.listen(8851, '0.0.0.0', () => {
    console.log('Server for 2c.html running on port 8851');
});
