const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('static'));
app.listen(port, function () {
    console.log('Server is running on port 3000');
});