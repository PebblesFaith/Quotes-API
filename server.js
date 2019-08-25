// Create a HTTP module reference in the Express Module.
const express = require('express');

// Create an Express constant for quotes application object.
const quotesApp = express();

// Use the Express quotes application (quotesApp) constant to GET function in order to create
// a route path ('/') for REST API endpoint.
quotesApp.get('/', function (request, response){
    response.send('Get request received at "/"');
});


//Create a variable to store the port number, 3000 into my server that will listen for client
// or user request.
const port = 3000;



// Use the Express listening function in order to instruct the server to start listen and pass
// the port constant into the local host port 3000 homepage.
quotesApp.listen(port, function() {
    console.log('Express is listening on port ' + port);
});

