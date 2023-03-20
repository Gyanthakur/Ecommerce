const express = require('express');
// npm i --save express-validator
const { body, validationResult } = require('express-validator'); 
const User = require('../models/User')
const router = express.Router();
// npm i bcryptjs
const bcrypt = require('bcryptjs');


// npm i jsonwebtoken

const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = "GYANPRATAPSINGH";






router.post('/createuser',[
  body('name','Enter a valid name').isLength({ min: 3 }),
  body('email','Enter valid mail').isEmail(),
  body('password','password must be atleast 5 character').isLength({ min: 5 })
], async (req,res)=>{
  let success=false;

  // if there are errors, return bad request and the errors 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }
  //  check wheather the user with this email exist already 

  try {
      
 

  let user = await User.findOne({email:req.body.email});
  if(user){
      return res.status(400).json({success,error: "sorry a user with this email already exist"})
  }

  // download a bycryptjs for creating hase for secure password // npm i bcryptjs
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(req.body.password,salt);

  //create a new user
  user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: secPass,
    })

    const data = {
      user:{
          id:user.id
      }
    }
    const authtoken = jwt.sign(data,JWT_SECRET);
  //   console.log(authtoken);
    
  //   .then(user => res.json(user))
  //   .catch(err=>console.log(err))
  //   res.json({error: 'please enter a unique value for email '})
  // res.json(user)
  success=true;
  res.json({success,authtoken})
  } catch (error){
      console.error(error.message);
      res.status(500).send("Internal Server Error");
  }

})




  //ROUTE:2: authenticate a user using : post "/api/auth/login". dose not require auth  ,   no login required
    
    
  router.post('/login',[
    body('email','Enter a valid mail').isEmail(),
    body('password','Password can not be blanked').exists(),
    ],async(req,res)=>{
        let success= false;


    // if there are errors, return bad request and the errors 

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;
    try{
        let user = await User.findOne({email});
        if(!user){
            success=false;
            return res.status(400).json({error:"please try to login wit correct credentials"});
        }
        const passwordcompare = await bcrypt.compare(password,user.password)
        if(!passwordcompare){
            success= false;
            return res.status(400).json({success,error:"please try to login wit correct credentials"});
        }
        const data = {
            user:{
                id:user.id
            }
          }
          const authtoken = jwt.sign(data,JWT_SECRET);
          success = true;
          res.json({success,authtoken})
    } catch (error){
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

})

 //ROUTE:3: get logged in user details : post "/api/auth/getuser". dose not require auth , login required



//  here we set the auth-token in the headers bar 

 router.post('/getuser', fetchuser, async(req,res)=>{
    
  try {
 
    userId= req.user.id
  //   userId= req.user;
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error")
  }
})


module.exports = router