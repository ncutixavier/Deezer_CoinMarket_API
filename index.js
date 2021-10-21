const express = require('express');
const port = process.env.port || 8000;
const app = express();

app.get('/', (req, res) => {
    res.send('welcome you!')
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});

module.exports = app;
