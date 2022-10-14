
import customer from '../models/customer.js'

export const getCustomer= async (req, res) => {
    let filter={}
    if(req.query.userId){
     filter={userId:req.query.userId.split(',')}
    }
    let customerData = await customer.find(filter)
    res.send(customerData);

}
export const searchCustomer= async (req, res) => {
    const {key}=req.params
   
    let customerData = await customer.find({
        "$or":[
        {FirstName:{$regex:String(key)}},
        {LastName:{$regex:String(key)}},
        {Email:{$regex:String(key)}},
        {Phone:{$eq:Number(key)}},
        {Address1:{$regex:String(key)}},
        {City:{$regex:String(key)}},
        {State:{$regex:String(key)}},
        {PostalCode:{$regex:Number(key)}},
        {CompanyName:{$regex:String(key)}},
        {CustomerId:{$regex:Number(key)}},
        ]
    })
    res.send(customerData);

}

export const postCustomer= async (req, res) => {
    const { CustomerId,userId,FirstName,LastName,Phone,Address1,Address2,Address3,postalCode,City,State,CompanyName,Membership, CustomerLoyalty } = req.body;
    const customerData = await new customer({ CustomerId,userId,FirstName,LastName,Phone,Address1,Address2,Address3,postalCode,City,State,CompanyName,Membership, CustomerLoyalty});
    await customerData.save().then(result => {
        console.log(result, "Customer data save to database")
          res.json({
            CustomerId:result.CustomerId,
            FirstName:result.FirstName,
            userId:result.userId,
            LastName:result.LastName,
            Phone:result.Phone,
            Address1:result.Address1,
            Address2:result.Address2,
            Address3:result.Address3,
            postalCode:result.postalCode,
            City:result.City,
            State:result.State,
            CompanyName:result.CompanyName,
            Membership:result.Membership,
            CustomerLoyalty:result.CustomerLoyalty
            // CardNo:result.CardNo,
            // Type:result.Type,
            // StartDate:result.StartDate,
            // ExpiresIn:result.ExpiresIn,
            // Communication:result.Communication,
            // BirthDate:result.BirthDate,
            // Gender:result.Gender,
            // History:result.History,
            // Notes:result.Notes
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
