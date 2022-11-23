import express  from "express";
const routes=express.Router();

import {getOrder,
    postOrder,
    updateOrder,
    deleteOrder,
    updateOrderItemByOrderId,
    deleteOrderItemByOrderId
} from "../api/order.js"

routes.get('/order', getOrder )

routes.post('/order', postOrder )
routes.put('/order/:_id', updateOrder )
routes.put('/orderitem',updateOrderItemByOrderId)
routes.delete('/orderitem',deleteOrderItemByOrderId)
routes.delete('/order/:_id', deleteOrder )


export default routes

