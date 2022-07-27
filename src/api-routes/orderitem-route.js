import express  from "express";
const routes=express.Router();

import {getOrderItem,
    getOrderItemById,
    postOrderItem,
    updateOrderItem,
    deleteOrderItem
} from "../api/orderitem.js"

routes.get('/orderitem', getOrderItem )
routes.get('/orderitem/:_id', getOrderItemById )

routes.post('/orderitem', postOrderItem )
routes.put('/orderitem/:_id', updateOrderItem )
routes.delete('/orderitem/:_id', deleteOrderItem )


export default routes