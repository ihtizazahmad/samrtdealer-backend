import express from 'express';
import menu from '../models/menu.js';

const router = express.Router();

router.get('user/menus', async (req, res) => {
    let data = await menu.find(req.data);
    res.send(data);
})

router.post('user/menus', async (req, res) => {
    const { id, header, icon, links, titles, sublinks, target, external, description, translationKey, color } = req.body;
    let data = await new menu({ id, header, icon, links, titles, sublinks, target, external, description, translationKey, color });
    await data.save().then(result => {
        console.log(result, "Menu data save to database")
        res.send("Menu data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('user/menus:id', async (req, res) => {
    let data = await menu.updateOne(
        req.params.id,
        {
            $set: req.body
        });
    res.status(data, 'data updated').send('data updated')
})
export default router;