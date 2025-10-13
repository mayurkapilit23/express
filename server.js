//production level boilerpate code

//1. Import modules
const express = require('express');
const path = require('path');
const helmet = require('helmet'); //security headers
const morgan = require('morgan'); //logging


//2. Create Express app
const app = express();

// 3. Middlewares
app.use(helmet()); // add security headers
app.use(morgan('combined')); // logs requests
app.use(express.json()); // parse JSON bodies
app.use(express.urlencoded({ extended: true })); // parse URL-encoded bodies
app.use(express.static(path.join(__dirname, 'public'))); // serve static files

//4. Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

// 404 Handler
app.use((req, res) => {
    res.status(404).send('<h1>404 Not Found</h1>');
});

// 5. Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
