import express from 'express'
import product from '../models/product.js'

const router = express.Router()


router.get('/product', async (req, res) => {
    let data = await product.find(req.data)
    res.send(data);

})

router.post('/product', async (req, res) => {
    const { id, categoryName,categoryParents, barCode, name, price, inHouseTaxValue, takeawayTaxValue, shortDescription, fullDescription, order, active, categoryId, inHouseTaxId, takeawayTaxId, hasPicture, extraData, translations, productPictureId, productId,productType } = req.body;
    const data = await new product({ id, categoryName,categoryParents, barCode, name, price, inHouseTaxValue, takeawayTaxValue, shortDescription, fullDescription, order, active, categoryId, inHouseTaxId, takeawayTaxId, hasPicture, extraData, translations, productPictureId, productId,productType });
    await data.save().then(result => {
        console.log(result, "Product data save to database")
        res.send("Product data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
// router.put('/productcategory/:_id', async (req, res) => {

//     console.log(req.params.id)
//     let data = await product.findByIdAndUpdate(
//         { _id: req.params._id }, { $push: { category: req.body.categoryId } }, { new: true });
//     if (data) {
//         res.send({message:"product data updated successfully"});
//     }
//     else {
//         res.send({message:"product data cannot be updated successfully"})
//     }
// })
router.put('/product/:_id', async (req, res) => {

    console.log(req.params.id)
    let data = await product.updateOne(
        req.params,
        {
            $set: req.body
        });
    if (data) {
        res.send({message:"product data updated successfully"});
    }
    else {
        res.send({message:"product data cannot be updated successfully"})
    }
})
router.delete('/product/:_id', async (req, res) => {
    console.log(req.params)
    let data = await product.deleteOne(req.params)
    if (data) {
        res.send({ message: "product data delete successfully" });
    }
    else {
        res.send({ message: "product data cannot delete successfully" })
    }
})

export default router;