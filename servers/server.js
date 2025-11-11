const express = require('express');
const app = express();

app.use(express.static('.'));

app.listen(8050, () => {
    console.log('Server running on port 8050');
});
