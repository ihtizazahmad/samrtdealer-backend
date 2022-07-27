
import posMenuSize from '../models/posMenuSize.js'

export const getPosMenuSize = async (req, res) => {
    let data = await posMenuSize.find(req.data);
    res.send(data);

}

export const postPosMenuSize = async (req, res) => {
    const { row, column } = req.body;
    const data = await new posMenuSize({ row, column });
    await data.save().then(result => {
        console.log(result, "PosMenuSize data save to database")
        res.json({
            row: result.row,
            column: result.column
        })

    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updatePosMenuSize = async (req, res) => {
    console.log(req.params)
    let data = await posMenuSize.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    }, { new: true }
    );
    if (data) {
        res.send({ message: "posmenusize data updated successfully" });
    }
    else {
        res.send({ message: "posmenusize data cannot be updated successfully" })
    }
}
export const deletePosMenuSize = async (req, res) => {
    console.log(req.params)
    let data = await posMenuSize.deleteOne(req.params)
    if (data) {
        res.send({ message: "posmenusize data delete successfully" });
    }
    else {
        res.send({ message: "posmenusize data cannot delete successfully" })
    }
}