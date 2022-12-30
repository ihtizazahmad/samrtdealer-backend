import express  from "express";
const routes=express.Router();

import {getUser,
    getSuperUser,
    login,
    deleteUser,
    updateUser,
    getUserById,
    userLogin,
    userLoginOtp,
    otpVarify
} from "../api/user.js"

routes.get('/User', getUser )
routes.get('/superadmin', getSuperUser )
routes.get('/user/:_id',getUserById)

routes.post('/otplogin', userLoginOtp )
routes.put('/otpvarify', otpVarify )
routes.post('/loginadmin', login )
routes.post('/loginuser', userLogin )
routes.put('/user/:_id',updateUser)
routes.delete('/user/:email',  deleteUser)



export default routes