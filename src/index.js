import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import Auth from './api-routes/user-route.js';
import payer from './api-routes/payerdata-route.js';
import tabledata from './api-routes/tabledata-route.js';
import category from './api-routes/category-route.js'
import check from './api-routes/check-route.js'
import device from './api-routes/device-route.js'
import display from './api-routes/display-route.js'
import employee from './api-routes/employee-route.js'
import menu from './api-routes/menu-route.js'
import mu from './api-routes/mu-route.js'
import order from './api-routes/order-route.js'
import orderitem from './api-routes/orderitem-route.js'
import paymentlist from './api-routes/paymentlist-route.js'
import posmenuitem from './api-routes/posmenuitem-route.js'
import posmenusize from './api-routes/posmenusize-routes.js'
import posmenu from './api-routes/posmenu-route.js'
import product from './api-routes/product-route.js'
import role from './api-routes/role-route.js'
import tax from './api-routes/tax-route.js'
import tables from './api-routes/table-route.js'
import parentcategory from './api-routes/parentcategory-route.js';
import './config/config.js';

const app = express();
dotenv.config();
//middelwares
app.use(cors({
    origin: true,
    credentials: true,
    defaultErrorHandler: false,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet());
app.use(morgan("dev"));
//Routes
app.use('/api/v1', Auth, payer, tabledata, category, check, device, display, employee, menu, mu, order, orderitem, paymentlist, posmenuitem, posmenu,posmenusize, product, role, tax, tables,parentcategory)


app.use('*', (req, res) => {
    return res.status(404).json({
        success: false,
        message: 'API endpoint doesnt exist please put Api routes..'
    })
});

//Port
const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
