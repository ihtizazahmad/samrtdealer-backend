import express  from "express";
const routes=express.Router();

import {getTax,
    getTaxById,
    postTax,
    updateTax,
    deleteTax
} from "../api/tax.js"

routes.get('/Tax', getTax )
routes.get('/Tax/:_id', getTaxById )

routes.post('/Tax', postTax )
routes.put('/Tax/:_id', updateTax )
routes.delete('/Tax/:_id', deleteTax )


export default routes