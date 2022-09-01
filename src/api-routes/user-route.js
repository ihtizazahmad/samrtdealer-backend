import express  from "express";
const routes=express.Router();

import {getUser,
    register,
    login,
    deleteUser
} from "../api/user.js"

routes.get('/User', getUser )

routes.post('/register', register )
routes.post('/login', login )
routes.delete('/user/:email',  deleteUser)



export default routes