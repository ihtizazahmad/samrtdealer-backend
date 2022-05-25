import express, { json } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import payerrouter from './api-routes/payer.js';
import tablerouter from './api-routes/tables.js';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();
const port = process.env.PORT;
app.set('port', port);
import './config/config.js';
// import './models/payerdata.js';
// import './models/tabledata.js';

app.use(helmet());
app.use(morgan("common"));
app.use(json());
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
