import express from 'express';
import display from '../models/display.js';

const router = express.Router();

router.get('/display', async (req, res) => {
    let data = await display.find(req.params).populate('order');
    res.send(data);
})

router.post('/display', async (req, res) => {
    const {  name, order, systemDisplay, displayKey } = req.body;
    const data = await new display({  name, order, systemDisplay, displayKey });
    await data.save().then(result => {
        console.log(result, "Display data save to database")
        res.json({
            name: result.name,
            order: result.order,
            systemDisplay: result.systemDisplay,
            displayKey: result.displayKey
        })
    }
    ).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    }
    )
})
router.put('/display/:_id', async (req, res) => {
    let data = await display.findByIdAndUpdate(
       {_id:req.params._id},{
        $push:{order:req.body.order}
       },
       {new:true}
    )
    if (data) {
        res.send({ message: "display data updated successfully" });
    }
    else {
        res.send({ message: "display data cannot be updated successfully" })
    }
}
)
router.delete('/display/:_id', async (req, res) => {
    console.log(req.params)
    const displayId=req.params
    let data = await display.deleteOne(displayId)
    if (data) {
        res.send({ message: "display data delete successfully" });
    }
    else {
        res.send({ message: "display data cannot delete successfully" })
    }
})
export default router;