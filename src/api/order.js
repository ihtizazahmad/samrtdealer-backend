import order from '../models/order.js';
import orderitem from '../models/orderitem.js';

export const getOrder = async (req, res) => {
    let filter = {}
    if (req.query.userId) {
        filter = { userId: req.query.userId.split(',') }
    }
    let data = await order.find(filter)
    res.send(data);

}

export const postOrder = async (req, res) => {
    const { tableNo, tableName, currentOrderId, startDate, orderDate, points, orderValueExclTax, orderValueTax, orderValue, parentOrderNo, orderStatus, orderType, isHold, userId, operator, discount ,distype,customer} = req.body;

    const data = await new order({ tableNo, tableName, currentOrderId, startDate, orderDate, points, orderValueExclTax, orderValueTax, orderValue, parentOrderNo, orderStatus, orderType, isHold, userId, operator, discount,distype,customer });
    await data.save().then(result => {
        console.log(result, "Order data save to database")
        res.json({
            tableNo: result.tableNo,
            tableName: result.tableName,
            currentOrderId: result._id,
            startDate: result.startDate,
            orderDate: result.orderDate,
            points: result.points,
            orderValueExclTax: result.orderValueExclTax,
            orderValueTax: result.orderValueTax,
            orderValue: result.orderValue,
            parentOrderNo: result.parentOrderNo,
            orderStatus: result.orderStatus,
            orderType: result.orderType,
            userId: result.userId,
            discount: result.discount,
            operator: result.operator,
            isHold: result.isHold,
            distype:result.distype,
            customer:result.customer
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const deleteOrderItemByOrderId = async (req, res) => {
    const { orderId } = req.query
    console.log("orderId", orderId);
    let orderItem = await orderitem.findOneAndDelete({
        "$or":[
            {orderId:orderId}
        ]
     })
    if (orderItem) {
        res.send({ message: "orderitem data by orderId delete successfully" });
    } else {
        res.send({ message: "orderitem data cannot delete successfully" })
    }
}
export const updateOrder = async (req, res) => {

    let data = await order.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    )
    if (data) {
        res.status(200).json(
            { data, message: "order data updated successfully" });
    }
    else {
        res.send({ message: "order data cannot be updated successfully" })
    }

}


export const deleteOrder = async (req, res) => {
    console.log(req.params)
    let data = await order.deleteOne(req.params)
    if (data) {
        res.send({ message: "order data delete successfully" });
    }
    else {
        res.send({ message: "order data cannot delete successfully" })
    }
}