const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// const bodyParser= require('body-parser');
const payerrouter = require('./api/payer');
const tablerouter = require('./api/tables');
const helmet = require('helmet');
const morgan = require('morgan');
const port = process.env.PORT || 3333;
app.set('port', port);
require('./config/config');
require('./models/payerdata');
require('./models/tabledata')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:18010', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));
// app.options('*', cors());

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
