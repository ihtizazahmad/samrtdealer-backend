


import role from '../models/role.js'

export const getRole = async (req, res) => {
    let data = await role.find(req.data);
    res.send(data);

}
export const postRole = async (req, res) => {
    const { name } = req.body;
    const data = await new role({ name });
    await data.save().then(result => {
        console.log(result, "Role data save to database")
        res.json({
            name: result.name
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updateRole = async (req, res) => {
    console.log(req.params)
    let data = await role.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    }, { new: true }
    )
    if (data) {
        res.send({ message: "role data updated successfully" });
    }
    else {
        res.send({ message: "role data cannot be updated successfully" })
    }
}
export const deleteRole = async (req, res) => {
    console.log(req.params)
    let data = await role.deleteOne(req.params)
    if (data) {
        res.send({ message: "role data delete successfully" });
    }
    else {
        res.send({ message: "role data cannot delete successfully" })
    }
}

