import express from 'express';
import display from '../models/display.js';

const router = express.Router();

router.get('/display', async (req, res) => {
    let data = await display.find(req.data);
    res.send(data);
})

router.post('/display', async (req, res) => {
    const { id, name, order, systemDisplay, displayKey } = req.body;
    const data = await new display({ id, name, order, systemDisplay, displayKey });
    await data.save().then(result => {
        console.log(result, "Display data save to database")
        res.send("Display data saved to database");
    }
    ).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    }
    )
})
router.put('/display/:_id', async (req, res) => {
    // const data= await device();
    console.log(req.params)
    let data = await display.updateOne(
        req.params,
        {
            $set: req.body
        });
    res.status(data,'data updated').send('data updated')
}
)
export default router;