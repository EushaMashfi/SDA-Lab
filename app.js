const express = require('express');
const app = express();

app.get('/',(req, res) => {
    res.send('Welcome Azure')
});

app.listen(3000, ()=> {
    console.log('Server is running on 3000')
});np