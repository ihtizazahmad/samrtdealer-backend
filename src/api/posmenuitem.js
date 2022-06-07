import express from 'express'
import posmenuitem from '../models/posmenuitem.js'

const router = express.Router()


router.get('/PosMenuItem', async (req, res) => {
    let data = await posmenuitem.find(req.data);
    res.send(data);

})

router.post('/PosMenuItem/add', async (req, res) => {
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
router.put('/PosMenuItem/edit/:id', async (req, res) => {
    // const data= await device();
    console.log(req.params.id)
    let data = await posmenuitem.updateOne(
        req.params.id,
        {
            $set: req.body
        });
    res.status(data, 'data updated').send('data updated')
})

export default router;