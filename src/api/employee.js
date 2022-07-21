import express from 'express';
import employee from '../models/employee.js';
const router = express.Router();

router.get('/employee', async (req, res) => {
    let data = await employee.find(req.params).populate('role');
    res.send(data);

})
router.post('/employee', async (req, res) => {
    const { userName, firstName, lastName, email, password, confirmPassword, role, } = req.body;
    const data = await new employee({ userName, firstName, lastName, email,password, confirmPassword, role, });
    await data.save().then(result => {
        console.log(result, "Employee data save to database")
        res.send("Employee data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
)
router.put('/employee/:_id', async(req, res) => {
    console.log(req.params);
    let data = await employee.updateOne(
    {_id:req.params._id},{
        $push:{role:req.body.role}
    },
    {new:true}
    )
    if (data) {
        res.send({ message: "employee data updated successfully" });
    }
    else {
        res.send({ message: "employee data cannot be updated successfully" })
    }
        
})
router.delete('/employee/:_id', async (req, res) => {
    console.log(req.params)
    let data = await employee.deleteOne(req.params)
    if (data) {
        res.send({ message: "employee data delete successfully" });
    }
    else {
        res.send({ message: "employee data cannot delete successfully" })
    }
})
export default router;