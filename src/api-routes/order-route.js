import express  from "express";
const routes=express.Router();

import {getOrder,
    postOrder,
    updateOrder,
    deleteOrder
} from "../api/order.js"

routes.get('/order', getOrder )

routes.post('/order', postOrder )
routes.put('/order/:_id', updateOrder )
routes.delete('/order/:_id', deleteOrder )


export default routes