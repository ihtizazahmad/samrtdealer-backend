import express  from "express";
const routes=express.Router();

import {getUser,
    login,
    deleteUser,
    updateUser
} from "../api/user.js"

routes.get('/User', getUser )

routes.post('/login', login )
routes.put('/user/:_id',updateUser)
routes.delete('/user/:email',  deleteUser)



export default routes