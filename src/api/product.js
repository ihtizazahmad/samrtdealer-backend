import product from '../models/product.js';

export const getProduct = async (req, res) => {
    let filter = {}
    if (req.query.userId) {
        filter = { userId: req.query.userId.split(',') }
    }
    let productData = await product.find(filter).populate('categoryParents', 'name').populate('userId')

    res.send(productData);

}
export const getFilteredProduct=async(req,res)=>{
    let productData = await product.find().populate('categoryParents', 'name').populate('userId')
    let ActiveProduct = productData?.filter((item) => item.userId.isActive === true)
    res.send(ActiveProduct);
}
export const getProductById = async (req, res) => {
    let productData = await product.findOne(req.params).populate('categoryParents', 'name')
    res.send(productData);

}
export const getProductByKey = async (req, res) => {
    let productData = await product.find({
        "$or":[{
        name:{$regex:req.params.key}
        }]
    }).populate('categoryParents', 'name')
    res.send(productData);
}

export const postProduct = async (req, res) => {
    const { name,description,categoryParents,userId,price,discountOnProduct } = req.body;
    const Product_pic = req.file ? req.file.location : null
    if(!name || !price || !categoryParents || !userId){
        res.status(400).json({message:"please fill the fields"})
    }
    // console.log("req body :",req.body)
    
    const productData = await new product({name,description,categoryParents,userId,price,discountOnProduct,Product_pic});
    
    await productData.save().then(data => {
        console.log(data, "Product data save to database")
        res.json({
            data
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updateProduct = async (req, res) => {
    const Product_pic = req.file ? req.file.location : null
    console.log('Product_pic: ',  req.file.location );
    console.log(req.params._id)
    let data = await product.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body, Product_pic: Product_pic
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
