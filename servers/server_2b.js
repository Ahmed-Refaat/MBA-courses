const express = require('express');
const app = express();
const path = require('path');

// Serve the specific HTML file first
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Serve static files from both public and assets directories (after specific routes)
app.use(express.static(path.join(__dirname, '../public')));
app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.listen(8850, '0.0.0.0', () => {
    console.log('Server for index.html running on port 8850');
});
