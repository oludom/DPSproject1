
// add packages
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');

// create express app
const app = express();

// Setup server port
const port = process.env.PORT || 3002;

// parse requests of content-type - application/json
app.use(bodyParser.json());

// serve /public folder
app.use(express.static(path.join(__dirname, 'public')));

// Require employee routes
const cookieRoute = require('./cookie.routes');

// using as middleware
app.use('/cookie', cookieRoute);

// listen for requests
app.listen(port, () => {
    console.log(`[INFO]:  Server is listening on port ${port}`);
});
