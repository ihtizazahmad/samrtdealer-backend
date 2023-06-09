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
    pictureUpload,
    updateRetailer,
    getUserByAndroid,
    updateUserByPassword,
    pinCodeCreate,
    pinCodeLogin
} from "../api/user.js"
import { awsupload, upload } from "../middlewares/aws-s3-upload.js";

routes.get('/User', getUser )
routes.get('/companies', getUserByAndroid )

routes.get('/retailer', getRetailer )
routes.get('/retailer/:_id', getRetailerbyId )

routes.get('/superadmin', getSuperUser )
routes.get('/user/:_id',getUserById)

routes.post('/retailerRegister', retailerRegister )
routes.put('/pincodeCreate', pinCodeCreate )
routes.put('/loginPin', pinCodeLogin )
routes.put('/retailerUpdate/:_id', updateRetailer )
routes.post('/otplogin', userLoginOtp )
routes.put('/otpvarify', otpVarify )
routes.post('/loginadmin', login )

routes.put('/userpasswordupdate', updateUserByPassword )
routes.post('/loginuser', userLogin )
routes.put('/user/:_id',updateUser)
routes.delete('/user/:email',  deleteUser)
routes.post('/pictureupload',awsupload.single("image"), pictureUpload)




export default routes