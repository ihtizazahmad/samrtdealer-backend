import express  from "express";
const routes=express.Router();

import {
    getOrderItemById,
    postOrderItem,
    updateOrderItem,
    deleteOrderItem,
    getOrderItemByUserId,
    getOrderItemByProductId
} from "../api/orderitem.js"

routes.get('/orderitems', getOrderItemByUserId )
routes.get('/orderitem', getOrderItemByProductId)
routes.get('/orderitem/:_id', getOrderItemById )

routes.post('/orderitem', postOrderItem )
routes.put('/orderitem/:_id', updateOrderItem )
routes.delete('/orderitem/:_id', deleteOrderItem )


export default routes