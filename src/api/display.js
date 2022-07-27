import display from '../models/display.js';

export const getDisplay = async (req, res) => {
    let data = await display.find(req.params).populate('order');
    res.send(data);
}
export const postDisplay = async (req, res) => {
    const { name, order, systemDisplay, displayKey } = req.body;
    const data = await new display({ name, order, systemDisplay, displayKey });
    await data.save().then(result => {
        console.log(result, "Display data save to database")
        res.json({
            name: result.name,
            order: result.order,
            systemDisplay: result.systemDisplay,
            displayKey: result.displayKey
        })
    }
    ).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    }
    )
}
export const updateDisplay = async (req, res) => {
    let data = await display.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    )
    if (data) {
        res.send({ message: "display data updated successfully" });
    }
    else {
        res.send({ message: "display data cannot be updated successfully" })
    }
}

export const deleteDisplay = async (req, res) => {
    console.log(req.params)
    const displayId = req.params
    let data = await display.deleteOne(displayId)
    if (data) {
        res.send({ message: "display data delete successfully" });
    }
    else {
        res.send({ message: "display data cannot delete successfully" })
    }
}
