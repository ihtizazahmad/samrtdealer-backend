
import customer from '../models/customer.js'

export const getCustomer= async (req, res) => {
    let customerData = await customer.find(req.params)
    res.send(customerData);

}
export const searchCustomer= async (req, res) => {
    let customerData = await customer.find({
        "$or":[
        {FirstName:{$regex:req.params.key}},
        {LastName:{$regex:req.params.key}},
        {Email:{$regex:req.params.key}},
        {Phone:{$regex:req.params.key}},
        {Address1:{$regex:req.params.key}},
        {City:{$regex:req.params.key}},
        {State:{$regex:req.params.key}},
        ]
    })
    res.send(customerData);

}

export const postCustomer= async (req, res) => {
    const { CustomerId,FirstName,LastName,Phone,Address1,Address2,Address3,postalCode,City,State,CompanyName,Membership } = req.body;
    const customerData = await new customer({ CustomerId,FirstName,LastName,Phone,Address1,Address2,Address3,postalCode,City,State,CompanyName,Membership});
    await customerData.save().then(result => {
        console.log(result, "Customer data save to database")
          res.json({
            CustomerId:result.CustomerId,
            FirstName:result.FirstName,
            LastName:result.LastName,
            Phone:result.Phone,
            Address1:result.Address1,
            Address2:result.Address2,
            Address3:result.Address3,
            postalCode:result.postalCode,
            City:result.City,
            State:result.State,
            CompanyName:result.CompanyName,
            Membership:result.Membership
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updateCustomer= async (req, res) => {

    console.log(req.params.id)
    let data = await customer.findByIdAndUpdate(
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
export const deleteCustomer= async (req, res) => {
    console.log(req.params)
    let data = await customer.deleteOne(req.params)
    if (data) {
        res.send({ message: "customer data delete successfully" });
    }
    else {
        res.send({ message: "customer data cannot delete successfully" })
    }
}
