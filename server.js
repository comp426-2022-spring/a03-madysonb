// Require Express.js
const express = require('express')
const app = express()

HTTP_PORT = 5000

// Start an app server
const server = app.listen(HTTP_PORT, () => {
    console.log('App listening on port %PORT%'.replace('%PORT%',HTTP_PORT))
});
