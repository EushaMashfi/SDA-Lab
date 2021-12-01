const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Welcome Azure lab b')
});

app.listen(8080, ()=> {
    console.log('Server is running on 8080')
});