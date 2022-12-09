import express  from "express";
import {upload} from '../middlewares/uploader.js'
const routes=express.Router();

import {getProduct,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct,
} from "../api/product.js"

routes.get('/Product', getProduct )
routes.get('/Product/:_id', getProductById )
routes.post('/Product',upload.single('Product_pic'), postProduct)
routes.put('/Product/:_id',upload.single('Product_pic'), updateProduct )
routes.delete('/Product/:_id', deleteProduct )


export default routes