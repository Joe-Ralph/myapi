const router = require('express').Router();
const Item = require('../models/Item');

router.get('/',async (req,res)=>{
    try{
        const item = await Item.find();
    res.json(item);
    }catch(err){
        res.send(err);
    }
});

router.get('/:name',async (req,res)=>{
    try{
        const item = await Item.find({name:req.params.name});
    res.json(item);
    }catch(err){
        res.send(err);
    }
});

router.post('/',(req,res)=>{
    const item = new Item({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        volume: req.body.volume
    });
    item.save().then(()=>{
        res.json({
            message:"Item Created"
        });
    }).catch(err=>res.send(err));
});

router.delete('/:name',async (req, res) => {
    try {
        const removed = await Item.deleteOne({name:req.params.name});
        res.json(removed);
    } catch (err) {
        res.send(err);
    }
});

router.patch('/:name', async (req, res) => {
    try {
        const updated = await Item.updateOne({name:req.params.name},{$set: {price:req.body.price} } );
        res.json(updated);
    } catch (err) {
        res.send(err);
    }
});




module.exports=router;