import express  from "express";
const routes=express.Router();

import {getMu,
    postMu,
    updateMu,
    deleteMu
} from "../api/mu.js"

routes.get('/mu', getMu )

routes.post('/mu', postMu )
routes.put('/mu/:_id', updateMu )
routes.delete('/mu/:_id', deleteMu )


export default routes