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
    otpVarify,
    retailerRegister,
    getRetailer,
    getRetailerbyId,
    pictureUpload
} from "../api/user.js"
import { awsupload, upload } from "../middlewares/aws-s3-upload.js";

routes.get('/User', getUser )
routes.get('/retailer', getRetailer )
routes.get('/retailer/:_id', getRetailerbyId )

routes.get('/superadmin', getSuperUser )
routes.get('/user/:_id',getUserById)

routes.post('/retailerRegister', retailerRegister )
routes.post('/otplogin', userLoginOtp )
routes.put('/otpvarify', otpVarify )
routes.post('/loginadmin', login )
routes.post('/loginuser', userLogin )
routes.put('/user/:_id',updateUser)
routes.delete('/user/:email',  deleteUser)
routes.post('/pictureupload',upload.single("image"), pictureUpload)




export default routes