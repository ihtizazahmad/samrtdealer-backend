import express from "express";
const route=express.Router();
import {
    getLoyalty,
    postLoyalty,
    updateLoyalty,
    deleteLoyalty
} from '../api/loyality.js'
route.get('/Loyalty',getLoyalty)

route.post('/Loyalty',postLoyalty)
route.put('/Loyalty/:_id',updateLoyalty)
route.delete('/Loyalty/:_id',deleteLoyalty)
export default route;