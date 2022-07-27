import express  from "express";
const routes=express.Router();

import {getFtTable,
    postFtTable,
    updateFtTable,
    deleteFtTable
} from "../api/tablesdata.js"

routes.get('/FtTable', getFtTable )

routes.post('/FtTable', postFtTable )
routes.put('/FtTable/:_id', updateFtTable )
routes.delete('/FtTable/:_id', deleteFtTable )


export default routes