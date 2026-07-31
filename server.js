const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS) from the current directory
app.use(express.static(__dirname));

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the local web server
app.listen(PORT, () => {
    console.log(`🚀 Server running successfully at http://localhost:${PORT} - server.js:17`);
});