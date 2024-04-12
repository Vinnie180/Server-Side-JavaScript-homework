const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('static'));

require('./routes/route')(app);


app.listen(port, function () {
    console.log('Server is running on port 3000');
});