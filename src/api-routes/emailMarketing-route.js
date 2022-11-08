import express  from "express";
const routes=express.Router();

import {postEmailMarketing,
    getemailMarketing
} from "../api/email-Marketing.js"

routes.get('/emailMarketing', getemailMarketing )
routes.post('/emailMarketing', postEmailMarketing )
export default routes