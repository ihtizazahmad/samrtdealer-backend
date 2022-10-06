import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import Auth from './api-routes/user-route.js';
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
import product from './api-routes/product-route.js'
import role from './api-routes/role-route.js'
import tax from './api-routes/tax-route.js'
import tables from './api-routes/table-route.js'
import parentcategory from './api-routes/parentcategory-route.js';
import customer from './api-routes/customer-route.js'
import passwordreset from './api/reset-password.js'
import  Checkout  from './api-routes/checkout-route.js';
import userRegisterWithEmailVerification from './api/emailVerification.js'
import postTables from './api/posTable.js';
import './config/config.js';


const app = express();
dotenv.config();
//middelwares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());
app.use(bodyParser.json())
app.use(cors({
    origin: true,
    credentials: true,
    defaultErrorHandler: false,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(helmet());
app.use(morgan("dev"));
//Routes
app.use('/api/v1/postable',postTables)
//uset Email Verification Endpoints
app.use('/api/v1/activate-account',userRegisterWithEmailVerification)
//user forgot and reset-password Endpoints
app.use('/api/v1/reset-password',passwordreset)
//All APi's Endponits
app.use('/api/v1', Auth,category, check, device, display, employee, menu, mu, order, orderitem, paymentlist, product, role, tax, tables,parentcategory,customer,Checkout)


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
