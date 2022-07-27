import express  from "express";
const routes=express.Router();

import {getPosMenu,
    postPosMenu,
    updatePosMenu,
    deletePosMenu
} from "../api/posmenu.js"

routes.get('/PosMenu', getPosMenu )

routes.post('/PosMenu', postPosMenu )
routes.put('/PosMenu/:_id', updatePosMenu )
routes.delete('/PosMenu/:_id', deletePosMenu )


export default routes