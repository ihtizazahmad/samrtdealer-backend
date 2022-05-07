const express = require('express');
const app = express();
const mongoose = require('mongoose');
const payerrouter = require('./api/payer');
const tablerouter = require('./api/tables');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const port = process.env.PORT || 3333;
app.set('port', port);
require('./config/config');
require('./models/payerdata');
require('./models/tabledata')
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use('/', payerrouter)
app.use('/', tablerouter)

app.use(cors());

app.use(cors({
    origin: 'http://localhost:4200',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use((req, res, next) => {
    
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
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