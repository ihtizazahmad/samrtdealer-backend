import tables from '../models/tables.js';

export const getTables= async (req, res) => {
    const data = await tables.find(req.params);
    res.send(data);
}
export const getTableById= async (req, res) => {
    const data = await tables.findOne(req.params);
    res.send(data);
}

export const postTables= async (req, res) => {
    const { tableNo, name, description, hasLampixDevice } = req.body;
    let data = new tables({ tableNo, name, description, hasLampixDevice });
    await data.save().then(result => {
        console.log(result, "Tables data save to database")
         res.json({
            tableNo: result.tableNo,
            name: result.name,
            description: result.description,
            hasLampixDevice: result.hasLampixDevice
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