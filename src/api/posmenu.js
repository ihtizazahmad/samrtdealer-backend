import posMenu from '../models/posmenu.js'

export const getPosMenu = async (req, res) => {
    let data = await posMenu.find(req.data);
    res.send(data);
}

export const postPosMenu = async (req, res) => {
    const { name, comments, firstColumnixed } = req.body;
    const data = await new posMenu({ name, comments, firstColumnixed });
    await data.save().then(result => {
        console.log(result, "Posmenu data save to database")
        res.json({
            name: result.name,
            comments: result.comments,
            firstColumnixed: result.firstColumnixed
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updatePosMenu = async (req, res) => {
    console.log(req.params.id)
    let data = await posMenu.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    );
    if (data) {
        res.send({ message: "posmenu data updated successfully" });
    }
    else {
        res.send({ message: "posmenu data cannot be updated successfully" })
    }
}
export const deletePosMenu = async (req, res) => {
    console.log(req.params)
    let data = await posMenu.deleteOne(req.params)
    if (data) {
        res.send({ message: "posmenu data delete successfully" });
    }
    else {
        res.send({ message: "posmenu data cannot delete successfully" })
    }
}

