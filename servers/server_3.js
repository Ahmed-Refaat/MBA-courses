const express = require('express');
const app = express();
const path = require('path');

// Serve static files from both public and assets directories
app.use(express.static(path.join(__dirname, '../public')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/Module3.html'));
});

app.listen(8852, '0.0.0.0', () => {
    console.log('Server for Module3.html running on port 8852');
});
