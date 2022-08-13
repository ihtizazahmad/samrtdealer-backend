
import loyalty from "../models/loyality";

export const getLoyalty= async (req, res) => {
    let loyaltyData = await loyalty.find(req.params)
    res.send(customerData);

}


export const postLoyalty= async (req, res) => {
    const { CardNo,Type,StartDate,ExpiresIn,Communication,BirthDate,Gender,History,Notes } = req.body;
    const loyaltyData = await new loyalty({ CardNo,Type,StartDate,ExpiresIn,Communication,BirthDate,Gender,History,Notes});
    await customerData.save().then(result => {
        console.log(result, "Customer data save to database")
          res.json({
            CardNo:result.CardNo,
            Type:result.Type,
            StartDate:result.StartDate,
            ExpiresIn:result.ExpiresIn,
            Communication:result.Communication,
            BirthDate:result.BirthDate,
            Gender:result.Gender,
            History:result.History,
            Notes:result.Notes
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updateLoyalty= async (req, res) => {

    console.log(req.params.id)
    let data = await loyalty.findByIdAndUpdate(
           {_id: req.params._id},{
                $set:req.body
            },

        {new:true}
    );
    if (data) {
        res.send({message:"customer data updated successfully"});
    }
    else {
        res.send({message:"customer data cannot be updated successfully"})
    }
}
export const deleteLoyalty= async (req, res) => {
    console.log(req.params)
    let data = await loyalty.deleteOne(req.params)
    if (data) {
        res.send({ message: "customer data delete successfully" });
    }
    else {
        res.send({ message: "customer data cannot delete successfully" })
    }
}
