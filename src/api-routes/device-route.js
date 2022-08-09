import express  from "express";
const routes=express.Router();

import {getDevices,
    getDevice,
    postDevice,
    updateDevice,
    deleteDevice
} from "../api/device.js"

routes.get('/device', getDevices )
routes.get('/device/:_id', getDevice )

routes.post('/device', postDevice )
routes.put('/device/:_id', updateDevice )
routes.delete('/device/:_id', deleteDevice )


export default routes