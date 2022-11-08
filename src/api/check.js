import check from '../models/check.js'

export const getCheck = async (req, res) => {
    let filter={}
    if(req.query.userId)
     filter={userId:req.query.userId.split(',')}
    
    let data = await check.find(filter).populate('table','tableNo').populate('userId','_id').populate('order','orderStatus')
    res.send(data);
}
export const postCheck = async (req, res) => {
    const { checkNo, operator, subTotal, tax, amount, table, userId,orderStatus } = req.body;
    let data = await new check({ checkNo, operator, subTotal, tax, amount, table, userId ,orderStatus});
    await data.save().then(result => {
        console.log(result, "Check data save to database")
        res.json({
            checkNo: result.checkNo,
            operator: result.operator,
            subTotal: result.subTotal,
            tax: result.tax,
            amount: result.amount,
            table: result.table,
            userId:result.userId,
            orderStatus:result.orderStatus
        });
    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });
}
export const updateCheck = async (req, res) => {
    let data = await check.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    )
    if (data) {
        res.send({ message: "check data updated successfully" });
    }
    else {
        res.send({ message: "check data cannot be updated successfully" })
    }
}
export const deleteCheck = async (req, res) => {
    console.log(req.params)
    let data = await check.deleteOne(req.params)
    if (data) {
        res.send({ message: "check data delete successfully" });
    }
    else {
        res.send({ message: "check data cannot delete successfully" })
    }
}