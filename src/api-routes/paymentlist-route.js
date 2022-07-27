import express  from "express";
const routes=express.Router();

import {getPayment,
    postPayment,
    updatePayment,
    deletePayment
} from "../api/paymentList.js"

routes.get('/Payment', getPayment )

routes.post('/Payment', postPayment )
routes.put('/Payment/:_id', updatePayment )
routes.delete('/Payment/:_id', deletePayment )


export default routes