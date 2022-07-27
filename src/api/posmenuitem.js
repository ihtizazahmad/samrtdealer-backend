import posmenuitem from '../models/posmenuitem.js'


export const getPosMenuItem = async (req, res) => {
    let data = await posmenuitem.find(req.params).populate('category').populate('product')
    res.send(data);
}
export const getPosMenuItemById = async (req, res) => {
    let data = await posmenuitem.find(req.params).populate('product').populate('category')
    res.send(data);
}
export const postPosMenuItem = async (req, res) => {
    const { level, column, category, product, row } = req.body;
    console.log(req.body)

    const data = await new posmenuitem({ level, column, category, product, row })
    await data.save().then(result => {
        console.log(result, "posmenuitem data save to database")
        res.json({
            level: result.level,
            column: result.column,
            category: result.category,
            product: result.product,
            row: result.row
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}

export const updatePosMenuItem = async (req, res) => {
    console.log(req.params._id)
    let data = await posmenuitem.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    );
    if (data) {
        res.send({ message: "product and category data updated successfully" });
    }
    else {
        res.send({ message: "product data cannot be updated successfully" })
    }
}
export const deletePosMenuItem = async (req, res) => {
    console.log(req.params)
    let data = await posmenuitem.deleteOne(req.params)

    if (data) {
        res.send({ message: "posmenuitem data delete successfully" });
    }
    else {
        res.send({ message: "posmenuitem data cannot delete successfully" })
    }
}
