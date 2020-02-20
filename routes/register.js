const router = require('express').Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
let passwordHash='';

const User = require('../models/User');

router.get('/',async (req,res)=>{
    try{
        const allUsers = await User.find();
        res.json(allUsers);
    }catch(err){
        res.send(500,err.message);
    }
});

router.get('/:name',async (req,res)=>{
    try{
        const user = await User.findOne({name:req.params.name});
        res.json(user);
    }catch(err){
        res.send(500,err.message);
    }
})

router.post('/',async (req,res)=>{
    try{
        passwordHash = await bcrypt.hash(req.body.password,saltRounds);
        console.log(passwordHash);
    }catch(err){
        res.send(500,err.message)
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
        res.send(500,err.message);
    }
});

router.delete('/:email',async (req, res) => {
    try {
        const removed = await User.deleteOne({email:req.params.email});
        res.json("removed");
    } catch (err) {
        res.send(err);
    }
});



module.exports = router;