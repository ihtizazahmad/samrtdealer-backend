import express from 'express';
import category from '../models/category.js'
const router = express.Router();



router.get('/category', async (req, res) => {
    let data = await category.find(req.params).populate('displayManagerId').populate('displayManagerName')
    
    res.send(data);
})
router.get('/category/:_id', async (req, res) => {
    let data = await category.find(req.params).populate('displayManagerName').populate('displayManagerId')
    res.send(data);
})
router.post('/category', async (req, res) => {
    const {name, parent, extraData, categoryType, displayManagerName, order, hasPicture, active, displayManagerId, parentId, lampixIcon, translation, product, showPictures } = req.body;
    let data = await new category({ name, parent, extraData, categoryType, displayManagerName, order, hasPicture, active, displayManagerId, parentId, lampixIcon, translation, product, showPictures });
    await data.save().then(result => {
        console.log("Category data saved to database");
        res.json({name:req.body.name,
            parent:req.body.parent,
            extraData:req.body.extraData,
            categoryType:req.body.categoryType,
            displayManagerName:req.body.displayManagerName,
            order:req.body.order,
            hasPicture:req.body.hasPicture,
            active:req.body.active,
            displayManagerId:req.body.displayManagerId,
            parentId:req.body.parentId,
            lampixIcon:req.body.lampixIcon,
            translation:req.body.translation,
            product:req.body.product,
            showPictures:req.body.showPictures
        })


    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });

})
router.put('/category/:_id', async (req, res) => {
    console.log(req.params)
    let data = await category.findByIdAndUpdate(
        { _id: req.params._id }, {
        $push: { displayManagerId: req.body.displayManagerId,displayManagerName:req.body.displayManagerName },
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