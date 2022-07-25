import express from 'express'
import product from '../models/product.js'

const router = express.Router()


router.get('/product', async (req, res) => {
    let data = await product.find(req.params).populate('categoryId','_id').populate('order').populate('categoryParents')
    res.send(data);

})
router.get('/product/:_id', async (req, res) => {
    let data = await product.findOne(req.params).populate('categoryId','_id').populate('order').populate('categoryParents')
    res.send(data);

})

router.post('/product', async (req, res) => {
    const {id, categoryName,categoryParents, barCode, name, price, inHouseTaxValue, takeawayTaxValue, shortDescription, fullDescription, order, active, categoryId, inHouseTaxId, takeawayTaxId, hasPicture, extraData, translations, productPictureId, productId,productType } = req.body;
    const productData = await new product({ id, categoryName,categoryParents, barCode, name, price, inHouseTaxValue, takeawayTaxValue, shortDescription, fullDescription, order, active, categoryId, inHouseTaxId, takeawayTaxId, hasPicture, extraData, translations, productPictureId, productId,productType });
    await productData.save().then(result => {
        console.log(result, "Product data save to database")
          res.json({
            id: result.id,
            categoryName:result.categoryName,
            categoryParents:result.categoryParents,
            barCode:result.barCode,
            name:result.name,
            price:result.price,
            inHouseTaxValue:result.inHouseTaxValue,
            takeawayTaxValue:result.takeawayTaxValue,
            shortDescription:result.shortDescription,
            fullDescription:result.fullDescription,
            order:result.order,
            active:result.active,
            categoryId:result.categoryId,
            inHouseTaxId:result.inHouseTaxId,
            takeawayTaxId:result.takeawayTaxId,
            hasPicture:result.hasPicture,
            extraData:result.extraData,
            translations:result.translations,
            productPictureId:result.productPictureId,
            productId:result.productId,
            productType:result.productType
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
})
router.put('/product/:_id', async (req, res) => {

    console.log(req.params.id)
    let data = await product.findByIdAndUpdate(
           {_id: req.params._id},{
                $set:req.body
            },

        {new:true}
    );
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