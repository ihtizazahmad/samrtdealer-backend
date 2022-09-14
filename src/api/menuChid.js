import menuChild from '../models/menuChild.js';


 export const getMenuChild = async (req, res) => {
    let data = await menuChild.find(req.params)
    if(!data){
        res.send({message:"no data found"})
    }
    res.send(data);
}
export const postMenuChild = async (req, res) => {
    const {  links,sublinks } = req.body;
    let data = await new menuChild({ links,  sublinks });
    await data.save().then(result => {
        console.log(result, "Menu data save to database")
        res.json({
            links: result.links,
            sublinks: result.sublinks,
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updateMenuChild = async (req, res) => {
    let data = await menuChild.findByIdAndUpdate(
        {_id: req.params._id},{
            $set:req.body
        },
        {new:true}
        );
    if (data) {
        res.send({ message: "menuChild data updated successfully" });
    }
    else {
        res.send({ message: "menuChild data cannot be updated successfully" })
    }
}

export const deleteMenuChild = async (req, res) => {
    console.log(req.params)
    let data = await menuChild.deleteOne(req.params)
    if (data) {
        res.send({ message: "menuChild data delete successfully" });
    }
    else {
        res.send({ message: "menuChild data cannot delete successfully" })
    }
}
