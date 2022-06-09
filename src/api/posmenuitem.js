import express from 'express'
import posmenuitem from '../models/posmenuitem.js'

const router = express.Router()


router.get('/PosMenuItem', async (req, res) => {
    let data = await posmenuitem.find(req.data);
    res.send(data);

})

router.post('/PosMenuItem', async (req, res) => {
    const { id, row , column } = req.body;
    const data = await new posmenuitem({ id, row, column  });
    await data.save().then(result => {
        console.log(result, "Product data save to database")
        res.send("Product data saved to database");
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