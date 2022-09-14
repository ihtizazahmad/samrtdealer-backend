import express  from "express";
const routes=express.Router();

import {getMenuChild,
    postMenuChild,
    updateMenuChild,
    deleteMenuChild,
} from "../api/menuChid.js"

routes.get('/menuchild', getMenuChild )

routes.post('/menuchild', postMenuChild )
routes.put('/menuchild/:_id', updateMenuChild )
routes.delete('/menuchild/:_id', deleteMenuChild )


export default routes