const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

//require('./routes/index')(app);

//app.use(express.static('static'));

app.use(
    function(req, res, next){
        res.locals.fruits = [
            {name: 'apple', color: 'red'},
            {name: 'banana', color: 'yellow'},
            {name: 'kiwi', color: 'green'}
        ];
        return next();
    },
    function(req, res, next){
        res.render('valami', res.locals);
    }
);

app.listen(port, function () {
    console.log('Server is running on port 3000');
});