import express  from "express";
const routes=express.Router();

import {getDisplays,
    getDisplay,
    postDisplay,
    updateDisplay,
    deleteDisplay
} from "../api/display.js"

routes.get('/display', getDisplays )
routes.get('/display/:_id', getDisplay )

routes.post('/display', postDisplay )
routes.put('/display/:_id', updateDisplay )
routes.delete('/display/:_id', deleteDisplay )


export default routes