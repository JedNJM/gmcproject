import express from 'express'
const router = express.Router()
//  import the user controller
import {signup,signin} from '../controllers/user.js'
//  router post
router.post('/signup', signup);
router.post('/signin', signin);
export default router 