import express  from "express";
const routes=express.Router();

import {getLoyalty,
    postLoyalty,
    updateLoyalty,
    deleteLoyalty
} from "../api/loyality-offers.js"

routes.get('/loyalty', getLoyalty )

routes.post('/loyalty', postLoyalty )

routes.put('/loyalty/:_id', updateLoyalty )
routes.delete('/loyalty/:_id', deleteLoyalty )


export default routes