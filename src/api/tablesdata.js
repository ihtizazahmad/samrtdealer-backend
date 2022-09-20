import tabledata from '../models/tabledata.js';

export const getFtTable = async (req, res) => {
    console.log("this is get api of table")
    const data = await tabledata.find(req.data);
    res.send(data);

}
export const postFtTable = async (req, res) => {
    const { Operator, TableNo, TableName, Amount,userId } = req.body;
    let data = new tabledata({ Operator, TableNo, TableName, Amount,userId });
    await data.save().then(result => {
        console.log(result, "Table data save to database")
        res.json({
            Operator: result.Operator,
            TableNo: result.TableNo,
            TableName: result.TableName,
            Amount: result.Amount,
            userId:result.userId
        })
    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });
}

export const updateFtTable = async (req, res) => {
    console.log(req.params)
    let data = await tabledata.updateOne(
        { _id: req.params._id }, {
        $set: req.body
    }, { new: true }
    );
    if (data) {
        res.send({ message: "table data updated successfully" });
    }
    else {
        res.send({ message: "table data cannot be updated successfully" })
    }
}
export const deleteFtTable = async (req, res) => {
    console.log(req.params)
    let data = await tabledata.deleteOne(req.params)

    if (data) {
        res.send({ message: "table data delete successfully" });
    }
    else {
        res.send({ message: "table data cannot delete successfully" })
    }
}

