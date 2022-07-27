import express  from "express";
const routes=express.Router();

import {getTables,
    postTables,
    updateTables,
    deleteTables
} from "../api/tables.js"

routes.get('/Tables', getTables )

routes.post('/Tables', postTables )
routes.put('/Tables/:_id', updateTables )
routes.delete('/Tables/:_id', deleteTables )


export default routes