import express  from "express";
const routes=express.Router();

import {getPayer,
    postPayer,
    updatePayer,
    deletePayer
} from "../api/payer.js"

routes.get('/payer', getPayer )

routes.post('/payer', postPayer )
routes.put('/payer/:_id', updatePayer )
routes.delete('/payer/:_id', deletePayer )


export default routes