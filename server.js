const express = require('express');
const logger = require('morgan');
const path = require('path');
const server = express();

// Middleware
server.use(express.urlencoded({ extended: true }));
server.use(logger('dev'));

// Routes
server.get('/do_a_random', (req, res) => {
    res.send(`Your number is: ${Math.floor(Math.random() * 100) + 1}`);
});

// Serve the form page
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
server.post('/submit', (req, res) => {
    // Retrieve form data from request body
    const { noun1, verb1, adjective1, noun2, verb2, adjective2 } = req.body;

    // Create the mad lib using the form data
    const madLib = `Once upon a time, there was a ${adjective1} ${noun1} who loved to ${verb1}. 
    One day, the ${noun1} met a ${adjective2} ${noun2} and they decided to ${verb2} together.`;

    // Send the filled-in mad lib back as the response
    res.send(`<h1>Submission Successful</h1> <p>${madLib}</p><a href="/">Go Back to Form</a>`);
});

// Setup static page serving for all the pages in "public"
const publicServedFilesPath = path.join(__dirname, 'public');
server.use(express.static(publicServedFilesPath));

// The server uses port 80 by default unless you start it with the extra
// command line argument 'local' like this:
//       node server.js local
let port = 80;
if (process.argv[2] === 'local') {
    port = 8080;
}
server.listen(port, () => console.log('Ready on localhost!'));
