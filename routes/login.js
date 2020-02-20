//whole page not defined yet


const router = require('express').Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
let passwordHash='';

const User = require('../models/User');


router.post('/',async (req,res)=>{                  //not Yet Defined
    try{
        passwordHash = await bcrypt.hash(req.body.password,saltRounds);
        console.log(passwordHash);
    }catch(err){
        res.status(500).send(err.message)
    }
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: passwordHash
    });
    try{
        const result = await user.save();
        res.json(result);
    }catch(err){
        res.status(500).send(err.message);
    }
});



module.exports = router;