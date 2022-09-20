import paymentlist from '../models/paymentList.js';

export const getPayments = async (req, res) => {
    let data = await paymentlist.find(req.data);
    res.send(data);

}
export const getPayment = async (req, res) => {
    let data = await paymentlist.findOne(req.params);
    res.send(data);

}
export const postPayment = async (req, res) => {
    const { name, paymentsGTypeId, isActive, defaultPayment, showCaption ,userId} = req.body;
    const data = await new paymentlist({ name, paymentsGTypeId, isActive, defaultPayment, showCaption,userId});
    await data.save().then(result => {
        console.log(result, "PaymentList data save to database")
        res.json({
            name: result.name,
            paymentsGTypeId: result.paymentsGTypeId,
            isActive: result.isActive,
            defaultPayment: result.defaultPayment,
            showCaption: result.showCaption,
            updatedAt: result.updatedAt,
            userId:result.userId
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updatePayment = async (req, res) => {
    console.log(req.params.id)
    let data = await paymentlist.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    );
    if (data) {
        res.send({ message: "paymentList data updated successfully" });
    }
    else {
        res.send({ message: "paymentList data cannot be updated successfully" })
    }
}
export const deletePayment = async (req, res) => {
    console.log(req.params)
    let data = await paymentlist.deleteOne(req.params)
    if (data) {
        res.send({ message: "paymentList data delete successfully" });
    }
    else {
        res.send({ message: "paymentList data cannot delete successfully" })
    }
}
