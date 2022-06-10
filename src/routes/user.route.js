import express from 'express'
import {register} from '../api/user.js'
import {login} from '../api/user.js'
import {refreshToken} from '../api/user.js'
import {logout} from '../api/user.js'
// login, refreshToken, logout

const router = express.Router()

router.post('/register', register)

router.post('/login', login)

router.post('/refresh-token', refreshToken)

router.delete('/logout', logout)

export default router;