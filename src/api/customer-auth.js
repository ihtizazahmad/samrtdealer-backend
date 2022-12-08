import customer from '../models/customer.js';

export const customerRegister = async (req, res) => {
    const { FirstName, LastName, Email, Password, ConfirmPassword } = req.body
    try {
        const user = await customer.findOne({ Email, FirstName, LastName })
        if (user) {
            const customerUpdate = await customer.findOneAndUpdate({ Email, FirstName, LastName }, { Password: req.body.Password, ConfirmPassword: req.body.ConfirmPassword
            })
            if (customerUpdate) {
                res.status(200).send({ message: "Existing Customer register Successfully" })
            } else {
                res.status(400).send({ message: "Existing Customer cannot register Successfully" })
            }

        } else if (!user) {
            const NewCustomer = await new customer({ FirstName, LastName, Email, Password, ConfirmPassword })
            if (NewCustomer) {
                return res.status(200).send({ message: "New Customer register Successfuly" })
            }else {
                res.status(400).send({ message: "New Customer cannot register Successfully" })
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

    res.status(200).send({ message: "customer login successfully", user });

}