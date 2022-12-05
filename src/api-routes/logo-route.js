import express from "express";
import { upload } from "../middlewares/uploader.js";
const routes = express.Router();

import {
    getLogo,
    postLogo,
    updateLogo,
    deleteLogo
} from "../api/logo.js"

routes.get('/logo', getLogo)

routes.post('/logo',upload.single("myFile"), postLogo)

routes.put('/logo/:_id', updateLogo)
routes.delete('/logo/:_id', deleteLogo)


export default routes