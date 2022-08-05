import express  from "express";
const routes=express.Router();

import {
    getPayment,
    getPayments,
    postPayment,
    updatePayment,
    deletePayment
} from "../api/paymentList.js"

routes.get('/payment', getPayments )
routes.get('/payment/:_id', getPayment)

routes.post('/payment', postPayment )
routes.put('/payment/:_id', updatePayment )
routes.delete('/payment/:_id', deletePayment )


export default routes