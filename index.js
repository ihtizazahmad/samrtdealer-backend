const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const payerrouter = require('./api/payer');
const tablerouter = require('./api/tables');
const helmet = require('helmet');
const morgan = require('morgan');
const port = process.env.PORT || 3333;
app.set('port', port);
require('./config/config');
require('./models/payerdata');
require('./models/tabledata')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());


app.use(cors());
app.options('*', cors());
// app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:18010',
//     method: ['GET', 'POST', 'PUT', 'DELETE'],
// }))

// app.use((req, res, next) => {
    
//     res.append('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader("Access-Control-Allow-Origin", "http://localhost:18010")
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS");
//     next();
// })

app.use('/', payerrouter)
app.use('/', tablerouter)


app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist'
    })
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
