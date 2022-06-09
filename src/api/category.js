import express from 'express';
import category from '../models/category.js'
const router = express.Router();

router.get('/category', async(req, res) => {
    let data = await category.find(req.data);
    res.send(data);
})

router.post('/category', async (req, res) => {
    const { id, name, parent, extraData, categoryType, displayMangerName, order, hasPicture, active, displayManagerId, parentId, lampixIcon, translation, productTitleNo, showPictures } = req.body;
    let data = await new category({id, name, parent, extraData, categoryType, displayMangerName, order, hasPicture, active, displayManagerId, parentId, lampixIcon, translation, productTitleNo, showPictures });
    await data.save().then(result => {
        console.log(result, "Category data save to database")
        res.send("Category data saved to database");

    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });

})
router.put('/category/:_id', async (req, res) => {
    // const data= await device();
    console.log(req.params)
    let data = await device.updateOne(
        req.params,
        {
            $set: req.body
        });
    if (data) {
        res.send({ message: "category data updated successfully" });
    }
    else {
        res.send({ message: "category data cannot be updated successfully" })
    }
})

router.delete('/category/:_id', async (req, res) => {
    console.log(req.params)
    let data = await category.deleteOne(req.params)
    if (data) {
        res.send({ message: "category data delete successfully" });
    }
    else {
        res.send({ message: "category data cannot delete successfully" })
    }
})

export default router