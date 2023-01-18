import product from '../models/product.js';

export const getProduct = async (req, res) => {
    let filter = {}
    if (req.query.userId) {
        filter = { userId: req.query.userId.split(',') }
    }
    let productData = await product.find(filter).populate('userId')
    res.send(productData);

}


export const getProductByManuf = async (req, res) => {
    let filter = {}
    if (!req.params.manufactureId || !req.params.productType) {
        res.status(400).json({success:false,message:"fill the fields"})
    }
    filter = { userId: req.params.manufactureId ,category:req.params.productType,isActive:true }
    let productData = await product.find(filter)
    .select('name description price discountOnProduct Product_pic userId')
    .populate('userId','name email')
    res.status(200).json({success:true,productData});

}

// product for retailer 

export const getProductRetailer = async (req, res) => {
    let filter = {}
    if (req.query.id) {
        filter = { categoryParents: req.query.id.split(','),isActive:true }
    }
    let productData = await product.find(filter).populate('userId')
    res.send(productData);

}

export const getProductByCategRetailer = async (req, res) => {
    let filter = {isActive:true,}
    
    let productData = await product.find(filter).populate('userId')
    // console.log("product data length :",productData.length)
    res.send(productData);

}

export const getFilteredProduct=async(req,res)=>{
    let productData = await product.find().populate('userId')
    let ActiveProduct = productData?.filter((item) => item.userId.isActive === true)
    res.send(ActiveProduct);
}
export const getProductById = async (req, res) => {
    let productData = await product.findOne(req.params)
    res.send(productData);

}
export const getProductByKey = async (req, res) => {
    let productData = await product.find({
        "$or":[{
        name:{$regex:req.params.key}
        }]
    })
    res.send(productData);
}

export const postProduct = async (req, res) => {
    const { name,description,category,userId,price,discountOnProduct,isActive } = req.body;
    const Product_pic = req.file ? req.file.location : null
//    return console.log("picture :",Product_pic)
    if(!name || !price || !category || !userId){
       return  res.status(400).json({message:"please fill the fields"})
    }
    
    const productData = await new product({name,description,category,userId,price,discountOnProduct,Product_pic,isActive});
    
     productData.save().then(data => {
        // console.log(data, "Product data save to database")
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
    // console.log('Product_pic: ',  req.file.location );
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
