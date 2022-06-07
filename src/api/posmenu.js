import express from 'express'
import posMenu from '../models/posmenu.js'

const router = express.Router()


router.get('/PosMenu', async (req, res) => {
    let data = await posMenu.find(req.data);
    res.send(data);

})

router.post('/PosMenu', async (req, res) => {
    const { id, row, column } = req.body;
    const data = await new posMenu({ id, row, column });
    await data.save().then(result => {
        console.log(result, "Posmenu data save to database")
        res.send("Posmenu data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/PosMenu/:_id', async (req, res) => {
    // const data= await device();
    console.log(req.params)
    let data = await posMenu.updateOne(
        req.params,
        {
            $set: req.body
        });
    res.status(data, 'data updated').send('data updated')
})

export default router;