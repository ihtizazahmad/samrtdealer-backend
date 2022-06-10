import express from 'express'
import Auth from '../api/user.js'

const router = express.Router()

router.post('/register',(req,res)=>{
    Auth.register
})

router.post('/login', (req,res)=>{
    Auth.login
})

router.post('/refresh-token', (req,res)=>{
    Auth.refreshToken
})

router.delete('/logout', (req,res)=>{
    Auth.logout
})

export default router;