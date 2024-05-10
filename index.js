const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
  }));

//app.use(express.static('static'));

require('./routes/index')(app);


app.listen(port, function () {
    console.log('Server is running on port 3000');
});