import express from "express";
import db from "../database"
import {register,login} from "../controllers/AuthenticationController";

const router = express.Router();
router.get('/status',(req,res)=>{
    res.send({
        message:'STATUS RESPONS'
    })
})

router.post('/register',register)
router.post('/login',login)

export = router