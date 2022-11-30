import express from "express";
const routes = express.Router();

import {
    getCustomization,
    postCustomization,
    updateCustomization,
    deleteCustomization,
    getCustomizationById
} from "../api/customization.js"

routes.get('/customization', getCustomization)
routes.get('/customization/:_id', getCustomizationById)

routes.post('/customization', postCustomization)

routes.put('/customization/:_id', updateCustomization)
routes.delete('/customization/:_id', deleteCustomization)


export default routes