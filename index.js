import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import middleware from './src/middlewares/middleware.js';
import payer from './src/api/payer.js';
import table from './src/api/tables.js';
import user from './src/api/user.js';



dotenv.config();
import './src/config/config.js';
const app = express();
const port = process.env.PORT;


// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
const corsOptions ={
    origin:'http://localhost:18010', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



// app.get("/", (req, res) => {
    //     res.json({
        //       message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
        //     });
        //   });
        app.use('/api/v2',payer)
        app.use('/api/v2',table)
        app.use('/api/v1',user)
        
       
        app.use('*', (req, res) => {
            return res.status(404).json({
                success: false,
                message: 'API endpoint doesnt exist'
            })
        });

app.use(middleware.notFound);
app.use(middleware.errorHandler);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
