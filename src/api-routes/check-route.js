import express  from "express";
const routes=express.Router();

import {getCheck,
    postCheck,
    updateCheck,
    deleteCheck
} from "../api/check.js"

routes.get('/check', getCheck )

routes.post('/check', postCheck )
routes.put('/check/:_id', updateCheck )
routes.delete('/check/:_id', deleteCheck )


export default routes