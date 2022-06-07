import express from 'express';
import employee from '../models/employee.js';
const router = express.Router();

router.get('/employee', async (req, res) => {
    let data = await employee.find(req.data);
    res.send(data);

})
router.post('/employee/add', async (req, res) => {
    const { id, userName, firstName, lastName, email, password, confirmPassword, role, } = req.body;
    const data = await new employee({ id, userName, firstName, lastName, email,password, confirmPassword, role, });
    await data.save().then(result => {
        console.log(result, "Employee data save to database")
        res.send("Employee data saved to database");
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
)
router.put('/employee/edit/:id', async(req, res) => {
    // const data= await device();
    console.log(req.params);
    let data = await employee.updateOne(
        req.params.id,
        {
            $set: req.body
        });
    res.status(data, 'data updated').send('data updated')
        
})
export default router;