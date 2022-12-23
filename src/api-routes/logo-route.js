import express from "express";
import { awsupload } from "../middlewares/aws-s3-upload.js";
const routes = express.Router();

import {
    getLogo,
    postLogo,
    updateLogo,
    deleteLogo
} from "../api/logo.js"

routes.get('/logo', getLogo)

routes.post('/logo',awsupload.single("myFile"), postLogo)

routes.put('/logo/:_id',awsupload.single('myFile'), updateLogo)
routes.delete('/logo/:_id', deleteLogo)


export default routes