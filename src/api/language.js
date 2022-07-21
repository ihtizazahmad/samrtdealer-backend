import express from 'express';
import language from '../models/language.js';
import translate from 'translate';

const router = express.Router();

router.get('/language', async (req, res) => {
   
    const translation_string = await language(req.body);
    res.send(translation_string);
    console.log(translation_string);

})

router.post('/language', async (req, res) => {
    
    const { name } = req.body;
    const data = await new language({ name });
    await data.save().then(result => {
        console.log(result, "Language data save to database")
        res.send("Language data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/language/:_id', async (req, res) => {
    // const data= await device();
    console.log(req.params.id)
    let data = await language.updateOne(
        req.params,
        {
            $set: req.body
        });
    // res.status(data,'data updated').send('data updated')
    if (data) {
        res.send({ message: "language data updated successfully" });
    }
    else {
        res.send({ message: "language data cannot be updated successfully" })
    }
})

router.delete('/language/:_id', async (req, res) => {
    console.log(req.params)
    let data = await language.deleteOne(req.params)
    // res.send(data)
    if (data) {
        res.send({ message: "language data delete successfully" });
    }
    else {
        res.send({ message: "language data cannot delete successfully" })
    }
})
export default router;