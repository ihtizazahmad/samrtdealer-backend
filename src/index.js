import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// import middleware from './src/middlewares/middleware.js';
import user from './api/user.js';
import payer from './api/payer.js';
import table from './api/tables.js';
import category from './api/category.js'
import check from './api/check.js'
import device from './api/device.js'
import display from './api/display.js'
import employee from './api/employee.js'
import language from './api/language.js'
import menu from './api/menu.js'
import mu from './api/mu.js'
import order from './api/order.js'
import orderitem from './api/orderitem.js'
import paymentlist from './api/paymentList.js'
import posmenuitem from './api/posmenuitem.js'
import posmenu from './api/posmenu.js'
import product from './api/product.js'
import role from './api/role.js'
import tax from './api/tax.js'
import translate from './api/languagetranslation.js'
// import posMenu from './src/api/posmenu-api.js';
import './config/config.js';



const app = express();
dotenv.config();
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


    
        app.use('/api/v1',user,payer, table, category, check, device, display, employee, language, menu, mu, order, orderitem, paymentlist, posmenuitem, posmenu, product, role, tax, translate)
     
        
       
        app.use('*', (req, res) => {
            return res.status(404).json({
                success: false,
                message: 'API endpoint doesnt exist'
            })
        });


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
