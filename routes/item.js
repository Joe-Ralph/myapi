const router = require('express').Router();
const Item = require('../models/Item'); //import Models from models folder refer Step 7:

router.get('/',async (req,res)=>{                           // for reading all db records
    try{
        const item = await Item.find();
    res.json(item);
    }catch(err){
        res.send(err);
    }
});

router.get('/:any',async (req,res)=>{                         // for   reading db records
    try{
        const item = await Item.find({name:req.params.any}); // name reference is for searching with given name
    res.json(item);
    }catch(err){
        res.send(err);
    }
});

router.post('/',async (req,res)=>{                         // for creating db records
    const item = new Item({                                // create fields as per the Model designed
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        volume: req.body.volume
    });
    try{
        const result = await item.save();
        res.json(result);
    }catch(err){
        res.send(err.message);
    }
    
});

router.delete('/:any',async (req, res) => { //for deleting values form database
    try {
        const removed = await Item.deleteOne({name:req.params.any});
        res.json(removed);
    } catch (err) {
        res.send(err);
    }
});

router.patch('/:any', async (req, res) => {  // for updating values
    try {
        const updated = await Item.updateOne({name:req.params.any},{$set: {price:req.body.price} } ); // edit any field you want
        res.json(updated);
    } catch (err) {
        res.send(err);
    }
});

module.exports=router;