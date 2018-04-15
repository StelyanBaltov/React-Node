const express = require('express');
const app = express();

const path = require('path');

const index = path.join(__dirname, 'index.html')

app.get('*', (req, res) => {
    res.sendfile(index);
});

app.listen(5001, () => {
    console.log('Server lsitening on port 5001!')
})