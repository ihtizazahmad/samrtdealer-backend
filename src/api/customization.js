import customization from '../models/customization.js';

export const getCustomization = async (req, res) => {
    let filter = {}
    if (req.query.userId) {
        filter = { userId: req.query.userId.split(',') }
    }
    let data = await customization.find(filter);
    res.send(data);
}

export const postCustomization = async (req, res) => {
    const { components, logo, tax, itemDiscount, RecieptDiscount, ManagerDiscount, currency, userId } = req.body;
    const data = await new customization({ components, logo, tax, itemDiscount, RecieptDiscount, ManagerDiscount, currency, userId });
    await data.save().then(result => {
        console.log(result, "customization data save to database")
        res.json({
            components: result.components,
            logo: result.logo,
            tax: result.tax,
            itemDiscount: result.itemDiscount,
            RecieptDiscount: result.RecieptDiscount,
            ManagerDiscount: result.ManagerDiscount,
            currency: result.currency,
            userId: result.userId

        })
    }
    ).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    }
    )
}
export const updateCustomization = async (req, res) => {
    let data = await customization.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    )
    if (data) {
        res.send({ message: "customization data updated successfully" });
    }
    else {
        res.send({ message: "customization data cannot be updated successfully" })
    }
}

export const deleteCustomization = async (req, res) => {
    console.log(req.params)
    const customizationId = req.params
    let data = await customization.deleteOne(customizationId)
    if (data) {
        res.send({ message: "customization data delete successfully" });
    }
    else {
        res.send({ message: "customization data cannot delete successfully" })
    }
}
