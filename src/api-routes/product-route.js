import express  from "express";
import {awsupload} from "../middlewares/aws-s3-upload.js";
const routes=express.Router();

import {getProduct,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct,
    getFilteredProduct
} from "../api/product.js"

routes.get('/Product', getProduct )
routes.get('/filteredProduct',getFilteredProduct)
routes.get('/Product/:_id', getProductById )
routes.post('/Product',awsupload.single('Product_pic'), postProduct)
routes.put('/Product/:_id',awsupload.single('Product_pic'), updateProduct )
routes.delete('/Product/:_id', deleteProduct )


export default routes