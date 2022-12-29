import express  from "express";
const routes=express.Router();

import {getUser,
    getSuperUser,
    login,
    deleteUser,
    updateUser,
    getUserById
} from "../api/user.js"

routes.get('/User', getUser )
routes.get('/superadmin', getSuperUser )
routes.get('/user/:_id',getUserById)

routes.post('/loginadmin', login )
routes.put('/user/:_id',updateUser)
routes.delete('/user/:email',  deleteUser)



export default routes