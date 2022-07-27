import express  from "express";
const routes=express.Router();

import {getRole,
    postRole,
    updateRole,
    deleteRole
} from "../api/role.js"

routes.get('/Role', getRole )

routes.post('/Role', postRole )
routes.put('/Role/:_id', updateRole )
routes.delete('/Role/:_id', deleteRole )


export default routes