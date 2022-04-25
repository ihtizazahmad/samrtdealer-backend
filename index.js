const express = require('express');
const app = express();
const mongoose = require('mongoose');
const payerrouter = require('./api/payer');

const port = process.env.PORT || 33333;
app.set('port', port);
require('./config/config');
require('./models/payerdata');

app.use(express.json());
app.use('/', payerrouter)



app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist'
    })
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});