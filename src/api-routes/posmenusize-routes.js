import express  from "express";
import { paginatedResults } from "../middlewares/pagination.js";
import posMenuSize from "../models/posmenusize.js";
const routes=express.Router();

import {getPosMenuSize,
    postPosMenuSize,
    updatePosMenuSize,
    deletePosMenuSize,
} from "../api/posMenuSize.js"

routes.get('/PosMenuSize',paginatedResults(posMenuSize), getPosMenuSize )


routes.post('/PosMenuSize', postPosMenuSize )
routes.put('/PosMenuSize/:_id', updatePosMenuSize )
routes.delete('/PosMenuSize/:_id', deletePosMenuSize )


export default routes