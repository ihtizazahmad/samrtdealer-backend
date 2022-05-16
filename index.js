const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use('/', payerrouter)
app.use('/', tablerouter)

const corsOptions ={
    origin:'https://localhost:18010', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


app.use((req, res, next) => {
    
    
    res.header("Access-Control-Allow-Origin", "https://localhost:18010")
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
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