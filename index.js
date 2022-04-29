const express = require('express');
const app = express();
const mongoose = require('mongoose');
const payerrouter = require('./api/payer');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const port = process.env.PORT || 3333;
app.set('port', port);
require('./config/config');
require('./models/payerdata');
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use('/', payerrouter)
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
})



app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist'
    })
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});