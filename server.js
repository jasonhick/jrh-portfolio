const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, './dist/apps/frontend/browser')));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist/apps/frontend/browser/index.html'));
});

// Default Heroku port
app.listen(process.env.PORT || 8080);

