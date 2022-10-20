import express  from "express";
// import uploaderObject from '../middlewares/uploader.js'
const routes=express.Router();

import {getProduct,
    getProductById,
    postProduct,
    updateProduct,
    deleteProduct,
} from "../api/product.js"

routes.get('/Product', getProduct )
routes.get('/Product/:_id', getProductById )
routes.post('/Product',postProduct)
// routes.route('/Product').post(uploaderObject.upload.fields([{name:"Product_pic",maxCount:1}])).post(postProduct)
routes.put('/Product/:_id', updateProduct )
routes.delete('/Product/:_id', deleteProduct )


export default routes