import payer from '../models/payerdata.js';

export const getPayer = async (req, res) => {
    let data = await payer.find(req.data);
    res.send(data);
}
// router.get('//:key', async (req, res) => {
//     console.log(req.params.key)
//     let data = await payer.find(
//         {
//             "$or": [
//                 { "Email": { $regex: req.params.key } }
//             ]
//         }
//     )
//     res.send(data);

// })
export const postPayer = async (req, res) => {
    const { FirstName, LastName, Email, State, Company, ZIP, Telephone, Address, City, Membership, CustomerId } = req.body;
    let data = new payer({ FirstName, LastName, Email, State, Company, ZIP, Telephone, Address, City, Membership, CustomerId });
    await data.save().then(result => {
        console.log(result, "Form save to database")
        res.json({
            FirstName: result.FirstName,
            LastName: result.LastName,
            Email: result.Email,
            State: result.State,
            Company: result.Company,
            ZIP: result.ZIP,
            Telephone: result.Telephone,
            Address: result.Address,
            City: result.City,
            Membership: result.Membership,
            CustomerId: result.CustomerId
        })
    }).catch((err) => {
        res.status(400).send("unable to save to database");
        console.log(err)
    })
    const resEmail = await payer.findOne({ Email });
    if (resEmail) {
        console.log("this mail is also regiter", resEmail)
        return res.send("this user is already registered")
    }
    await data.save().then(result => {
        console.log(result)
        res.json({ message: 'user data has been registered successfully' });

    }).catch(err => console.log(err));
}
export const updatePayer = async (req, res) => {
    await payer.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    )
    if (data) {
        res.send({ message: "payer data updated successfully" });
    }
    else {
        res.send({ message: "payer data cannot be updated successfully" })
    }
}
export const deletePayer = async (req, res) => {
    console.log(req.params)
    let data = await payer.deleteOne(req.params)

    if (data) {
        res.send({ message: "payer data delete successfully" });
    }
    else {
        res.send({ message: "payer data cannot delete successfully" })
    }
}
