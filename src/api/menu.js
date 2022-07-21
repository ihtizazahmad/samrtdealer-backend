import express from 'express';
import menu from '../models/menu.js';

const router = express.Router();

router.get('/user/menus', async (req, res) => {
    let data = await menu.find(req.params).populate('order')
    if(!data){
        res.send({message:"no data found"})
    }
    res.send(data);
})

router.get('/user/menus/_id', async (req, res) => {
    let data = await menu.find(req.params).populate('order')
    if(!data){
        res.send({message:"no data found"})
    }
    res.send(data);
})

router.post('/user/menus', async (req, res) => {
    const { header, icon, links,order, titles, sublinks, target, external, description, translationKey, color } = req.body;
    let data = await new menu({ header, order,icon, links, titles, sublinks, target, external, description, translationKey, color });
    await data.save().then(result => {
        console.log(result, "Menu data save to database")
        res.send("Menu data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/user/menus:_id', async (req, res) => {
    let data = await menu.findByIdAndUpdate(
        {_id:req.params._id},{
            $push:{order:req.body.order}
        },
        {new:true}
        );
    if (data) {
        res.send({ message: "menu data updated successfully" });
    }
    else {
        res.send({ message: "menu data cannot be updated successfully" })
    }
})

router.delete('user/menu/:_id', async (req, res) => {
    console.log(req.params)
    let data = await menu.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "menu data delete successfully" });
    }
    else {
        res.send({ message: "menu data cannot delete successfully" })
    }
})
export default router;