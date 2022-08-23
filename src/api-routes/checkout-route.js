import express  from "express";
const routes=express.Router();

import {Checkout
} from "../api/checkout.js"

routes.post('/credit', Checkout )


export default routes