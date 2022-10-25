import mongoose from 'mongoose';
const orderItemSchema = new mongoose.Schema({
    points: {
        type: Number
    },
    taxValue: {
        type: Number
    },
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "order",

    },
    productWithQty: [{
        productId: {
            type: String,//stringt
        },
        qty: {
            type: Number // number field
        },
        discount: {
            type: Number
        },
        reason: {
            type: String
        },

        oldAmount: {
            type: Number
        },
        newAmount: {
            type: Number
        },
        discountTypePr: {
            type: Boolean
        }

    }],
    product: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
    }],
    priceExclTax: {
        type: Number
    },

    lineValueExclTax: {
        type: Number
    },

    lineValueTax: {
        type: Number
    },

    lineValue: {
        type: Number
    },

    units: {
        type: Number
    },
    text: {
        type: String
    } ,
     userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'user'
    },
    displayManager:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'display'
    }
})
const orderitem = mongoose.model('orderitem', orderItemSchema);
export default orderitem;

// @Attribute({ serializedName: 'id' })
// id: string;

// @Attribute({ serializedName: 'orderId' })
// orderId: string;

// @Attribute({ serializedName: 'needToPrintQty' })
// needToPrintQty: number;

// @Attribute({ serializedName: 'productId' })
// productId: string;

// @Attribute({ serializedName: 'points' })
// points: number;

// @Attribute({ serializedName: 'taxValue' })
// taxValue: number;

// @Attribute({ serializedName: 'quantity' })
// quantity: number;

// @Attribute({ serializedName: 'priceExclTax' })
// priceExclTax: number;

// @Attribute({ serializedName: 'price' })
// price: number;

// @Attribute({ serializedName: 'lineValueExclTax' })
// lineValueExclTax: number;

// @Attribute({ serializedName: 'lineValueTax' })
// lineValueTax: number;

// @Attribute({ serializedName: 'lineValue' })
// lineValue: number;

// @Attribute({ serializedName: 'units' })
// units: number;

// @Attribute({ serializedName: 'productName' })
// productName: string;

// @Attribute({ serializedName: 'text' })
// text: string;

// fromProduct(product: Product, inHouse: boolean = true) {
//     console.log("product in order item : ", product);
//     this.quantity = 1;
//     this.productId = product.id;
//     this.productName = product.name;
//     this.price = product.price;
//     this.lineValue = this.price;
//     this.points = 0;
//     if (inHouse) {
//         this.priceExclTax = (product.price * 100) / (100 + product.inHouseTaxValue);
//         this.taxValue = product.inHouseTaxValue;
//     }
//     else {
//         this.priceExclTax = (product.price * 100) / (100 + product.takeawayTaxValue);
//         this.taxValue = product.takeawayTaxValue;
//     }
//     this.lineValueExclTax = this.priceExclTax;
//     this.lineValueTax = this.lineValue - this.lineValueExclTax;

//     this.units = 1;


// }