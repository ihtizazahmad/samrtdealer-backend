
import orderitem from '../models/orderitem.js'

export const getOrderItemByOrderId = async (req, res) => {
    let filter = {}
    if (req.query.orderId && req.query.productId) {
        filter = [
        { orderId: req.query.orderId.split(',') },
        { productId: req.query.productId.split(',')}
    ]
    }
    let data = await orderitem.find(filter).populate('orderId', '_id').populate('productId', '_id').populate('productName', 'name').populate('productQuantity').populate('productPrice','price')
    res.send(data);
}
export const getOrderItemByProductId = async (req, res) => {
    let filter = {}
    if (req.query.orderId && req.query.productId) {
        filter = [
        { orderId: req.query.orderId.split(',') },
        { productId: req.query.productId.split(',')}
    ]
    }
    let data = await orderitem.find(filter).populate('orderId', '_id').populate('productId', '_id').populate('productName', 'name').populate('productQuantity').populate('productPrice','price')
    res.send(data);
}
export const getOrderItemById = async (req, res) => {

    let data = await orderitem.findOne(req.params).populate('orderId', '_id').populate('productId', '_id')
    res.send(data);
}

export const postOrderItem = async (req, res) => {
    const { orderId,  productId, points, taxValue, productQuantity, priceExclTax, productPrice, lineValueExclTax, lineValueTax, lineValue, units, productName, text } = req.body;
    const data = await new orderitem({ orderId, productId, points, taxValue, productQuantity, priceExclTax, productPrice, lineValueExclTax, lineValueTax, lineValue, units, productName, text });
    await data.save().then(result => {
        console.log(result, "OrderItem data save to database")
        res.json({
            orderId: result.orderId,
            // needToPrintQty: result.needToPrintQty,
            productId: result.productId,
            points: result.points,
            taxValue: result.taxValue,
            productQuantity: result.productQuantity,
            priceExclTax: result.priceExclTax,
            productPrice: result.productPrice,
            lineValueExclTax: result.lineValueExclTax,
            lineValueTax: result.lineValueTax,
            lineValue: result.lineValue,
            units: result.units,
            productName: result.productName,
            text: result.text
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updateOrderItem = async (req, res) => {

    console.log(req.params.id)
    let data = await orderitem.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    );
    if (data) {
        res.send({ message: "orderitem data updated successfully" });
    }
    else {
        res.send({ message: "orderitem data cannot be updated successfully" })
    }
}

export const deleteOrderItem = async (req, res) => {
    console.log(req.params)
    let data = await orderitem.deleteOne(req.params)
    if (data) {
        res.send({ message: "orderitem data delete successfully" });
    }
    else {
        res.send({ message: "orderitem data cannot delete successfully" })
    }
}


