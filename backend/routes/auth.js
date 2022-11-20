const express = require('express');
const User=require('../models/Formentry');
const router = express.Router();
const {body,validationResult}=require('express-validator')
//Create User Entry using: POST "/api/auth/createuser"
router.post('/createuser',[
    body('fullName','Enter a valid Name').isLength({min:3,max:32}),
    body('regNumber','Invalid Registration Number').isNumeric().isLength({min:9},{max:9}),
    body('mobileNumber','Invalid Mobile Number').isNumeric().isLength({min:10},{max:10}),
    body('email','Invalid Email').isEmail()
], async (req,res)=>{
    //If there are errors return BAD request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({error:errors.array()});
    }
    //Check whether the registration number is already registered
    try{
    let user = await User.findOne({regNumber:req.body.regNumber});
    if(user){
        return res.status(400).json({error:"Sorry a user with this Registration Number already exists"})
    }
    //Create a new User
    user= await User.create({
        fullName: req.body.fullName,
        regNumber: req.body.regNumber,
        mobileNumber: req.body.mobileNumber,
        email:req.body.email,
      })
      res.json(user);
    } catch(error){
        console.error(error.message);
        res.status(500).send("Some error occurred")
    }

} )

module.exports = router