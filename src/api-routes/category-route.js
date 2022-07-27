import express  from "express";
const routes=express.Router();

import {getCategories,
    getCategoriesById,
    postCategories,
    updateCategories,
    deleteCategories,
} from "../api/category.js"

routes.get('/category', getCategories )
routes.get('/category/:_id', getCategoriesById )

routes.post('/category', postCategories )
routes.put('/category/:_id', updateCategories )
routes.delete('/category/:_id', deleteCategories )


export default routes