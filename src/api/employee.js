import employee from '../models/employee.js';


export const getEmployee = async (req, res) => {
    let filter={}
    if(req.query.userId){
     filter={userId:req.query.userId.split(',')}
    }
    let data = await employee.find(filter)
    res.send(data);

}
export const getEmployeeById = async (req, res) => {
    let data = await employee.findOne(req.params)
    res.send(data);

}
export const postEmployee = async (req, res) => {
    const { userName, firstName, lastName, email, password, confirmPassword, userId } = req.body;
    const data = await new employee({ userName, firstName, lastName, email, password, confirmPassword,userId});
    await data.save().then(result => {
        console.log(result, "Employee data save to database")
        res.json({
            userName: result.userName,
            firstName: result.firstName,
            lastName: result.lastName,
            email: result.email,
            password: result.password,
            confirmPassword: result.confirmPassword,
            userId:result.userId,
            role:result.role
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const employeeLogin=async(req,res)=>{
    const {userName,email,password,confirmPassword}=req.body
     const employe= await employee.findOne({email,userName});
     if (!employe) {
        return res.status(400).send({ message: "employee does'nt Exists" });
      }
      if (employe.password !== password) {
        return res.status(400).send({ message: "wrong password" });
      }
      if(employe.password!==confirmPassword){
        return res.status(400).send({ message: "password did'nt match" });
      }
     res.send({ message: "Employee Login Successfully"});

}
export const updateEmployee = async (req, res) => {
    console.log(req.params);
    let data = await employee.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    )
    if (data) {
        res.send({ message: "employee data updated successfully" });
    }
    else {
        res.send({ message: "employee data cannot be updated successfully" })
    }
}
export const deleteEmployee = async (req, res) => {
    console.log(req.params)
    let data = await employee.deleteOne(req.params)
    if (data) {
        res.send({ message: "employee data delete successfully" });
    }
    else {
        res.send({ message: "employee data cannot delete successfully" })
    }
}
