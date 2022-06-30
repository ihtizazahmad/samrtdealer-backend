import express from 'express'
import posmenuitem from '../models/posmenuitem.js'

const router = express.Router()

router.get('/PosMenuItem', async (req, res) => {
    let data = await posmenuitem.find(req.data).populate('category')
    res.send(data);

})
router.put('/PosMenuItems/:_id', async (req, res) => {

    console.log(req.params.id)
    let data = await posmenuitem.findByIdAndUpdate(
        { _id: req.params._id }, {
        $push: { category: req.body.category },
    })
    //         $push: { product: req.body.productId }}
    // , { new: true });
    if (data) {
        res.send({message:"product and category data updated successfully"});
    }
    else {
        res.send({message:"product data cannot be updated successfully"})
    }
})

router.post('/PosMenuItem', async (req, res) => {
    const { id,  level, colomn , category, row } = req.body;
    console.log(req.body)

    const data = await new posmenuitem({ id, level, colomn, category, row })
    await data.save().then(result => {
        console.log(result, "posmenuitem data save to database")
        res.send("Posmenuitem data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/PosMenuItem/:_id', async (req, res) => {
    console.log(req.params.id)
    let data = await posmenuitem.updateOne(
        req.params,
        {
            $set: req.body
        });
    // res.status(data, 'data updated').send('data updated')
    if (data) {
        res.send({ message: "posmenuitem data updated successfully" });
    }
    else {
        res.send({ message: "posmenuitem data cannot be updated successfully" })
    }
})
router.delete('/PosMenuItem/:_id', async (req, res) => {
    console.log(req.params)
    let data = await posmenuitem.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "posmenuitem data delete successfully" });
    }
    else {
        res.send({ message: "posmenuitem data cannot delete successfully" })
    }
})

export default router;