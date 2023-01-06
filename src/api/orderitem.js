import orderitem from '../models/orderitem.js'
import customer from '../models/customer.js'

export const getOrderItemByUserId = async (req, res) => {
    let filter = {}
    if (req.query.userId)
        filter = { userId: req.query.userId.split(',') }
    else if (req.query.orderId)
        filter = { orderId: req.query.orderId.split(',') }
    let data = await orderitem.find(filter).populate({ path: "product", populate: { path: "categoryId", model: "category", populate: { path: "displayManagerId", model: "display" } } }).populate('customerId')

    res.send(data);
}

export const getOrderItemById = async (req, res) => {

    let data = await orderitem.findOne(req.params).populate({ path: "product", populate: { path: "categoryId", model: "category", populate: { path: "displayManagerId", model: "display" } } }).populate('customerId')
    res.send(data);
}


// totalAmount: {
//     type: Number
// },
// address:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:"villageLocation"
// },
// addressDetail:{
//     type:String
// },
// userId:{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'retaileruser'
// },
// productDetail: [{
//     productId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "product",
//     },
//     qty: {
//         type: String
//     },
//     discount: {
//         type: String
//     },

// }]

export const postOrderItem = async (req, res) => {
    const {totalAmount,address,addressDetail,userId,productDetail } = req.body;
    try {
        const orderData = await new orderitem({ totalAmount,address,addressDetail,userId,productDetail });
       let data= await orderData.save()
        res.status(200).json({success:true,data,message:"order has been submitted successfully"})
    } catch (error) {
        res.status(400).json({success:false,message:"something went wrong!"});
    }
}

export const updateOrderItem = async (req, res) => {

    console.log(req.params.id)
    let data = await orderitem.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    );
    if (data) 
        res.status(200).json({success:true, message: "order data updated successfully" });
    else 
    res.status(400).json({success:false, message: "something went wrong!" })
}

export const deleteOrderItem = async (req, res) => {
    console.log(req.params)
    let data = await orderitem.deleteOne(req.params)
    if (data) 
        res.send({ message: "orderitem data delete successfully" });
    else 
        res.send({ message: "orderitem data cannot delete successfully" })
}


