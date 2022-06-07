import express from 'express';
import language from '../models/language.js';

const router = express.Router();

router.get('/language', async (req, res) => {
    let data = await language.find(req.data);
    res.send(data);

})

router.post('/language', async (req, res) => {
    const { id, name, code, languageCulture, flagImageFileName, rtl, published, displayOrder } = req.body;
    const data = await new language({ id, name, code, languageCulture, flagImageFileName, rtl, published, displayOrder });
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
    console.log(req.params)
    let data = await language.updateOne(
        req.params,
        {
            $set: req.body
        });
    res.status(data,'data updated').send('data updated')
})
export default router;