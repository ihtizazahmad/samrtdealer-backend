import express  from "express";
const routes=express.Router();

import {getProduct,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct,
} from "../api/product.js"

routes.get('/Product', getProduct )
routes.get('/Product/:_id', getProductById )

routes.post('/Product', postProduct )
routes.put('/Product/:_id', updateProduct )
routes.delete('/Product/:_id', deleteProduct )


export default routes