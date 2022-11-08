import express  from "express";
const routes=express.Router();

import {postEmailMarketing
} from "../api/email-Marketing.js"

routes.post('/emailMarketing', postEmailMarketing )
export default routes