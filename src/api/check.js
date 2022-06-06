
import express from 'express';
import check from '../models/check.js'
const router = express.Router();

router.get('/check', async (req, res) => {
    let data = await check.find(req.data);
    res.send(data);
})

router.post('/check', async (req, res) => {
    const { id, checkNo, operator, subTotal, tax, amount, table,   } = req.body;
    let data = await new check({ id, checkNo, operator, subTotal, tax, amount, table });
    await data.save().then(result => {
        console.log(result, "Check data save to database")
        res.send("Check data saved to database");

    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });

})
export default router