import express from 'express'
import posMenuSize from '../models/posMenuSize.js'

const router = express.Router()


router.get('/PosMenuSize', async (req, res) => {
    let data = await posMenuSize.find(req.data);
    res.send(data);

})

router.post('/PosMenuSize', async (req, res) => {
    const { row, column } = req.body;
    const data = await new posMenuSize({ row, column });
    await data.save().then(result => {
        console.log(result, "PosMenuSize data save to database")
        res.json({
            row: result.row,
            column: result.column
        })
        
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/PosMenuSize/:_id', async (req, res) => {
    console.log(req.params)
    let data = await posMenuSize.updateOne(
        {_id: req.params._id},{
            $set:req.body
        },{new:true}
        );
    if (data) {
        res.send({ message: "posmenusize data updated successfully" });
    }
    else {
        res.send({ message: "posmenusize data cannot be updated successfully" })
    }
})
router.delete('/PosMeneSize/:_id', async (req, res) => {
    console.log(req.params)
    let data = await posMenuSize.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "posmenusize data delete successfully" });
    }
    else {
        res.send({ message: "posmenusize data cannot delete successfully" })
    }
})

export default router;