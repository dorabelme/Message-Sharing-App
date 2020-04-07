const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');

const PORT = process.env.PORT || 5000;

// Serve the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, +'public/index.html'));
});

http.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});