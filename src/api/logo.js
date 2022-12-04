import logo from '../models/logo.js'

export const getLogo = async (req, res) => {
    let filter = {}
    if (req.query.userId) {
        filter = { userId: req.query.userId.split(',') }
    }
    let data = await logo.find(filter);
    res.send(data);
}

export const postLogo = async (req, res) => {
    console.log("req : ", req.body);
    const { userId } = req.body;
    const myFile = req.file ? req.file.filename : null
    console.log("fileuri", myFile)
    const data = await new logo({ myFile, userId });
    await data.save().then(result => {
        console.log(result, "logo data save to database")
        res.json({
            myFile: result.myFile,
            userId: result.userId
        })
    }
    ).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    }
    )
}
export const updateLogo = async (req, res) => {
    let data = await logo.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    )
    if (data) {
        res.send({ message: "logo data updated successfully" });
    }
    else {
        res.send({ message: "logo data cannot be updated successfully" })
    }
}

export const deleteLogo = async (req, res) => {
    console.log(req.params)
    const logoId = req.params
    let data = await logo.deleteOne(logoId)
    if (data) {
        res.send({ message: "logo data delete successfully" });
    }
    else {
        res.send({ message: "logo data cannot delete successfully" })
    }
}
