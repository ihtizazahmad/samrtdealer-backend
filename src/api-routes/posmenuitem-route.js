import express  from "express";
const routes=express.Router();

import {getPosMenuItem,
    getPosMenuItemById,
    postPosMenuItem,
    updatePosMenuItem,
    deletePosMenuItem,
} from "../api/posmenuitem.js"

routes.get('/posmenuitem', getPosMenuItem )
routes.get('/posmenuitem/:_id', getPosMenuItemById )

routes.post('/posmenuitem', postPosMenuItem )
routes.put('/posmenuitem/:_id', updatePosMenuItem )
routes.delete('/posmenuitem/:_id', deletePosMenuItem )


export default routes