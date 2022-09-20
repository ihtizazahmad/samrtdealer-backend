import product from '../models/product.js'


export const getProduct = async (req, res) => {
    let filter = {}
    if (req.query.categoryId) {
        filter = { categoryId: req.query.categoryId.split(',') }
    }
    let productData = await product.find(filter).populate('categoryId', '_id').populate('categoryName', 'name').populate('categoryParents', 'name')
    res.send(productData);

}
export const getProductById = async (req, res) => {
    let productData = await product.findOne(req.params).populate('categoryId', '_id').populate('order').populate('categoryName', 'name').populate('categoryParents', 'name')
    res.send(productData);

}

export const postProduct = async (req, res) => {
    const { lavel, rows, cols, categoryName, categoryParents, quantity, barCode, name, price, shortDescription, fullDescription, order, active, categoryId, hasPicture, productPictureId, productId, productType,userId } = req.body;
    const productData = await new product({ lavel, rows, cols, categoryName, categoryParents, quantity, barCode, name, price, shortDescription, fullDescription, order, active, categoryId, hasPicture, productPictureId, productId, productType ,userId});
    await productData.save().then(result => {
        console.log(result, "Product data save to database")
        res.json({
            lavel: result.lavel,
            cols: result.cols,
            rows: result.rows,
            categoryName: result.categoryName,
            categoryParents: result.categoryParents,
            barCode: result.barCode,
            name: result.name,
            price: result.price,
            quantity: result.quantity,
            // inHouseTaxValue:result.inHouseTaxValue,
            // takeawayTaxValue:result.takeawayTaxValue,
            // shortDescription:result.shortDescription,
            // fullDescription:result.fullDescription,
            order: result.order,
            active: result.active,
            categoryId: result.categoryId,
            // inHouseTaxId:result.inHouseTaxId,
            // takeawayTaxId:result.takeawayTaxId,
            hasPicture: result.hasPicture,
            productPictureId: result.productPictureId,
            productId: result.productId,
            productType: result.productType,
            userId:result.userId
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updateProduct = async (req, res) => {

    console.log(req.params.id)
    let data = await product.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },

        { new: true }
    );
    if (data) {
        res.send({ message: "product data updated successfully" });
    }
    else {
        res.send({ message: "product data cannot be updated successfully" })
    }
}
export const deleteProduct = async (req, res) => {
    console.log(req.params)
    let data = await product.deleteOne(req.params)
    if (data) {
        res.send({ message: "product data delete successfully" });
    }
    else {
        res.send({ message: "product data cannot delete successfully" })
    }
}
