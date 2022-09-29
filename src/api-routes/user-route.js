import express  from "express";
const routes=express.Router();

import {getUser,
    register,
    login,
    deleteUser,
    activateAccount
} from "../api/user.js"

routes.get('/User', getUser )

routes.post('/register', register )
routes.post('/activate-account',activateAccount)
routes.post('/login', login )
routes.delete('/user/:email',  deleteUser)



export default routes