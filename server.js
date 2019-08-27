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


const quotes = [
    {
        id: 1,
        quote: "The best is yet to come",
        author: "Unknown",
        year: 2000
    },
    {
        id: 2,
        quote: "This is a quote",
        author: "First Last",
        year: 1930
    },
    {
        id: 3,
        quote: "This is another quote",
        author: "First2 Last2",
        year: 1910
    },
];

// Returns a list of quotes as JSON.
quotesApp.get('/quotes', function(request, response){
    console.log('Get a list of all quotes as JSON.');
//    response.json(quotes);


if(request.query.year) {
    response.send('Return a list of quotes from the year: ' + request.query.year);
}
else {
    response.json(quotes);
}

}); 

quotesApp.get('/quotes/:id', function(request, response){
    console.log('Return quote with the ID: ' + request.params.id);
    response.send('Return quote with the ID: ' + request.params.id);
});

