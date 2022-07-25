import express from 'express'
import posMenu from '../models/posmenu.js'

const router = express.Router()


router.get('/PosMenu', async (req, res) => {
    let data = await posMenu.find(req.data);
    res.send(data);

})

router.post('/PosMenu', async (req, res) => {
    const { name, comments, firstColumnixed } = req.body;
    const data = await new posMenu({ name,  comments, firstColumnixed });
    await data.save().then(result => {
        console.log(result, "Posmenu data save to database")
        res.json({
            name: result.name,
            comments: result.comments,
            firstColumnixed: result.firstColumnixed
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/PosMenu/:_id', async (req, res) => {
    console.log(req.params.id)
    let data = await posMenu.updateOne(
        {_id: req.params._id},{
            $set:req.body
        },
        {new: true}
        );
    if (data) {
        res.send({ message: "posmenu data updated successfully" });
    }
    else {
        res.send({ message: "posmenu data cannot be updated successfully" })
    }
})
router.delete('/PosMenu/:_id', async (req, res) => {
    console.log(req.params)
    let data = await posMenu.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "posmenu data delete successfully" });
    }
    else {
        res.send({ message: "posmenu data cannot delete successfully" })
    }
})

export default router;