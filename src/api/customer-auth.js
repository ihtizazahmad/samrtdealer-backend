import customer from '../models/customer.js';
// import sendMail from '../middlewares/send-email.js';
// import express from 'express';
// const router = express.Router()
export const customerRegister = async (req, res) => {
    const { FirstName, LastName, Email, Password, ConfirmPassword } = req.body
    try {
        const user = await customer.findOne({ Email, FirstName, LastName })
        if (user) {
            const customerUpdate = await customer.findOneAndUpdate({ Email, FirstName, LastName }, {
                $push: { Password: req.body.Password, ConfirmPassword: req.body.ConfirmPassword }
            })
            if (customerUpdate) {
                res.status(200).send({ message: "Existing Customer login Successfully" })
            }

        } else if (!user) {
            const NewCustomer = await new customer({ FirstName, LastName, Email, Password, ConfirmPassword })
            if (NewCustomer) {
                return res.status(200).Send({ message: "New Customer Login Successfuly" })
            }
        }
    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
}
export const customerLogin = async (req, res) => {
  const { Email, Password } = req.body;
  const user = await customer.findOne({ Email })
  if (!user) {
    return res.status(400).send({ message: "User not found" });
  }
  if (user.Password !== Password) {
    return res.status(400).send({ message: "Wrong password" });
  }
 
  res.send({ message: "customer login successfully",user });

}