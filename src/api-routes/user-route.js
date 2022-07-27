import express  from "express";
const routes=express.Router();

import {getUser,
    register,
    login
} from "../api/user.js"

routes.get('/User', getUser )

routes.post('/register', register )
routes.post('/login', login )



export default routes