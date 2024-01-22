// index.js
// This is the entry file of the application

const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const port = 3000; 

// Serve static files from the public folder
app.use(express.static('public'));

app.set('view engine', 'ejs'); // Set EJS as the view engine

app.get('/', (req, res) => {
  res.render('index');
});



// ... (existing code)

app.listen(port, () => {
  console.log(`Sparks Server is running at http://localhost:${port}`);
});
