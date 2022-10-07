import mongoose from 'mongoose';
const orderSchema = new mongoose.Schema({
    tableId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"tables"
    }],
    orderDate: {
        type: Date,
        default:Date.now
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'orderitem'
    }],
    startDate: {
        type: Date,
        default:Date.now
    },
    orderNo: {
        type: Number
    },
    points: {
        type: Number
    },
    orderValueExclTax: {
        type: Number
    },
    orderValueTax: {
        type: Number
    },
    orderValue: {
        type: Number
    },
    parentOrderNo: {
        type: Number
    },
    orderStatus: {
        type: String, 
        enum:['new','proccessing','done']
    },
    orderType: {
        type: String,
        enum:['standard','notification'] 
    }


})
const order = mongoose.model('order', orderSchema);
export default order;
// @Attribute({ serializedName: 'id' })
// id: string;

// @Attribute({ serializedName: 'tableId', required: true })
// tableId: string;

// @Attribute({ serializedName: 'orderDate' })
// orderDate: Date;

// @Attribute({ serializedName: 'startDate' })
// startDate: Date;

// @Attribute({ serializedName: 'orderNo' })
// orderNo: number;

// @Attribute({ serializedName: 'points' })
// points: number;

// @Attribute({ serializedName: 'orderValueExclTax' })
// orderValueExclTax: number;

// @Attribute({ serializedName: 'orderValueTax' })
// orderValueTax: number;

// @Attribute({ serializedName: 'orderValue' })
// orderValue: number;

// @Attribute({ serializedName: 'tableNo' })
// tableNo: number;

// @Attribute({ serializedName: 'parentOrderNo' })
// parentOrderNo: number;

// @Attribute({ serializedName: 'orderStatus' })
// orderStatus: OrderStatus

// @Attribute({ serializedName: 'orderType' })
// orderType: OrderType


// }