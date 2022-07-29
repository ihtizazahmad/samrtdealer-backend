import express  from "express";
import { paginatedResults } from "../middlewares/pagination.js";
import tax from "../models/tax.js";
const routes=express.Router();

import {getTax,
    postTax,
    updateTax,
    deleteTax
} from "../api/tax.js"

routes.get('/Tax',paginatedResults(tax), getTax )

routes.post('/Tax', postTax )
routes.put('/Tax/:_id', updateTax )
routes.delete('/Tax/:_id', deleteTax )


export default routes