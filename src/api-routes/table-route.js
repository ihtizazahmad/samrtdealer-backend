import express  from "express";
import { upload } from "../middlewares/uploader.js";
const routes=express.Router();

import {getTables,
    postTables,
    updateTables,
    deleteTables,
    getTableById,
    SearchUpdateTables
} from "../api/tables.js"

routes.get('/Tables', getTables )
routes.get('/Tables/:_id', getTableById )

routes.post('/Tables',upload.single('tableimg'), postTables )
routes.put('/Tables/:_id', updateTables )
routes.put('/posTable',SearchUpdateTables)
routes.delete('/Tables/:_id', deleteTables )


export default routes