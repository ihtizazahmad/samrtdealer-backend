
import express from 'express';
import check from '../models/check.js'
const router = express.Router();

router.get('/check', async (req, res) => {
    let data = await check.find(req.params).populate('table');
    res.send(data);
})

router.post('/check', async (req, res) => {
    const { checkNo, operator, subTotal, tax, amount, table,   } = req.body;
    let data = await new check({  checkNo, operator, subTotal, tax, amount, table });
    await data.save().then(result => {
        console.log(result, "Check data save to database")
        res.send("Check data saved to database");

    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });

})
router.put('/check/:_id', async (req, res) => {

    let data = await check.findByIdAndUpdate(
     { _id: req.params._id},{
      $push:{table:req.body.table,}
     },
     {new:true},
     
    )
          // {
        //     $set: req.body
        // });
    if (data) {
        res.send({ message: "check data updated successfully" });
    }
    else {
        res.send({ message: "check data cannot be updated successfully" })
    }
})

router.delete('/check/:_id', async (req, res) => { 
    console.log(req.params)
    let data = await check.deleteOne(req.params)
    if (data) {
        res.send({ message: "check data delete successfully" });
    }
    else {
        res.send({ message: "check data cannot delete successfully" })
    }
})
export default router;