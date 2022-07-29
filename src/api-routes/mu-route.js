import express  from "express";
import { paginatedResults } from "../middlewares/pagination.js";
import mu from "../models/mu.js";
const routes=express.Router();

import {getMu,
    postMu,
    updateMu,
    deleteMu
} from "../api/mu.js"

routes.get('/mu',paginatedResults(mu), getMu )

routes.post('/mu', postMu )
routes.put('/mu/:_id', updateMu )
routes.delete('/mu/:_id', deleteMu )


export default routes