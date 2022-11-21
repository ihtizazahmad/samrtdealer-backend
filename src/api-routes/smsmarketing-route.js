import express  from "express";
const routes=express.Router();

import {postSmsMarketing,
    getsmsMarketing
} from "../api/sms-marketing.js"

routes.get('/smsMarketing', getsmsMarketing )
routes.post('/smsMarketing', postSmsMarketing )
export default routes