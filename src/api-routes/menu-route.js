import express  from "express";
const routes=express.Router();

import {getMenu,
    getMenuById,
    postMenu,
    updateMenu,
    deleteMenu,
} from "../api/menu.js"

routes.get('/menu', getMenu )
routes.get('/menu/:_id', getMenuById )

routes.post('/menu', postMenu )
routes.put('/menu/:_id', updateMenu )
routes.delete('/menu/:_id', deleteMenu )


export default routes