import express from 'express'
import posmenuitem from '../models/posmenuitem.js'

const router = express.Router()

router.get('/PosMenuItem', async (req, res) => {
    let data = await posmenuitem.find(req.params).populate('category').populate('product')
    res.send(data);

})
router.get('/PosMenuItem/:_id', async(req, res) => {
    let data = await posmenuitem.find(req.params).populate('product').populate('category') 
    res.send(data);
})

router.post('/PosMenuItem', async (req, res) => {
    const { level, column , category,product, row } = req.body;
    console.log(req.body)

    const data = await new posmenuitem({level, column, category,product, row })
    await data.save().then(result => {
        console.log(result, "posmenuitem data save to database")
        res.send("Posmenuitem data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/PosMenuItem/:_id', async (req, res) => {

    console.log(req.params._id)
    let data = await posmenuitem.findByIdAndUpdate(
        { _id: req.params._id}, {
        $push: { product: req.body.product, category: req.body.category },
    }
    , { new: true }
    );

    if (data) {
        res.send({message:"product and category data updated successfully"});
    }
    else {
        res.send({message:"product data cannot be updated successfully"})
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