import express from 'express';
import category from '../models/category.js'
const router = express.Router();



router.get('/category', async (req, res) => {
    let data = await category.find(req.params)
        .populate('displayManagerId')
        .select('_id').populate('displayManagerName')
        .select('name')
    res.send(data);
})
router.get('/category/_id', async (req, res) => {
    let data = await category.find(req.params)
        .populate('displayManagerId')
        .select('_id').populate('displayManagerName')
        .select('name')
    res.send(data);
})
router.post('/category', async (req, res) => {
    const {name, parent, extraData, categoryType, displayManagerName, order, hasPicture, active, displayManagerId, parentId, lampixIcon, translation, product, showPictures } = req.body;
    let data = await new category({ name, parent, extraData, categoryType, displayManagerName, order, hasPicture, active, displayManagerId, parentId, lampixIcon, translation, product, showPictures });
    await data.save().then(result => {
        console.log(result);
        res.send("Category data saved to database");
        res.json(req.body)


    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });

})
router.put('/category/:_id', async (req, res) => {
    console.log(req.params)
    let data = await category.findByIdAndUpdate(
        { _id: req.params._id }, {
        $push: { displayManagerId: req.body.displayManagerId,displayMangerName:req.body.displayManagerName },
    }
    , { new: true }
    );
    
    if (data) {
        res.send({ message: "category data updated successfully" });
    } else {
        res.send({ message: "category data cannot be updated successfully" })
    }
})

router.delete('/category/:_id', async (req, res) => {
    console.log(req.params)
    let data = await category.deleteOne(req.params)
    if (data) {
        res.send({ message: "category data delete successfully" });
    } else {
        res.send({ message: "category data cannot delete successfully" })
    }
})

export default router;