import express from "express";
const route=express.Router();
import {
    getCustomer,
    searchCustomer,
    postCustomer,
    updateCustomer,
    deleteCustomer
} from '../api/customer.js'
route.get('/customer',getCustomer)
route.get('/customer/:firstName?/:lastName?/:email?/:phone?/:address1?/:city?/:state',searchCustomer)
route.post('/customer',postCustomer)
route.put('/customer/:_id',updateCustomer)
route.delete('/customer/:_id',deleteCustomer)
export default route;