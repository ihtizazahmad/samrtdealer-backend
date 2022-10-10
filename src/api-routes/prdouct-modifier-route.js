import express from 'express'
import {
    getProductModifier,
    postProductModifier,
    updateProductModifier,
    deleteModifier
} from '../api/product-modifier.js'
const router=express.Router()
router.get('/modifier',getProductModifier)
router.post('/modifier',postProductModifier)

router.put('/modifier/:_id',updateProductModifier)
router.delete('/modifier/:_id',deleteModifier)

export default router;