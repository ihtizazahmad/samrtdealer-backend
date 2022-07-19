


import express from 'express'
import role from '../models/role.js'

const router = express.Router()


router.get('/role', async (req, res) => {
    let data = await role.find(req.data);
    res.send(data);

})

router.post('/role', async (req, res) => {
    const { id, name } = req.body;
    const data = await new role({ id, name });
    await data.save().then(result => {
        console.log(result, "Role data save to database")
        res.send("Role data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/role/:_id', async (req, res) => {
    // const data= await device();
    console.log(req.params)
    let data = await role.updateOne(
        req.params,
        {
            $set: req.body
        });
    // res.status(data, 'data updated').send('data updated')
    if (data) {
        res.send({ message: "role data updated successfully" });
    }
    else {
        res.send({ message: "role data cannot be updated successfully" })
    }
})
router.delete('/role/:_id', async (req, res) => {
    console.log(req.params)
    let data = await role.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "role data delete successfully" });
    }
    else {
        res.send({ message: "role data cannot delete successfully" })
    }
})

export default router;