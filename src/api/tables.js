import tables from '../models/tables.js';

export const getTables= async (req, res) => {
    let filter={}
    if(req.query.userId){
     filter={userId:req.query.userId.split(',')}
    }
    const data = await tables.find(filter).populate('operator').populate('Amount')
    res.send(data);
}
export const getTableById= async (req, res) => {
    const data = await tables.findOne(req.params);
    res.send(data);
}

export const postTables= async (req, res) => {
    const { tableNo, tableName,operator,description, hasLampixDevice ,userId,Amount} = req.body;
    let data = new tables({ tableNo, tableName,operator ,description, hasLampixDevice ,userId,Amount});
    await data.save().then(result => {
        console.log(result, "Tables data save to database")
         res.json({
            tableNo: result.tableNo,
            tableName: result.tableName,
            description: result.description,
            hasLampixDevice: result.hasLampixDevice,
            userId:result.userId,
            operator:result.operator,
            Amount:result.Amount
        })
    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });
}
export const updateTables= async (req, res) => {
    console.log(req.params)
    let data = await tables.findByIdAndUpdate(
        {_id: req.params._id},{
            $set:req.body
        },{new:true}
        );
    if (data) {
        res.send({ message: "tables data updated successfully" });
    }
    else {
        res.send({ message: "tables data cannot be updated successfully" })
    }
}
export const deleteTables= async (req, res) => {
    console.log(req.params)
    let data = await tables.deleteOne(req.params)
    
    if (data) {
        res.send({ message: "tables data delete successfully" });
    }
    else {
        res.send({ message: "tables data cannot delete successfully" })
    }
}