import menu from '../models/menu.js';


 export const getMenu = async (req, res) => {
    let filter = {}
    if (req.query.userId) {
        filter = { categoryId: req.query.userId.split(',') }
    }
    let usermenuData = await menu.find(filter).populate('sublinks').populate('userId', '_id')
    res.send(usermenuData);

}

export const getMenuById = async (req, res) => {
    let data = await menu.find(req.params).populate('sublinks').populate('userId', '_id')
    if(!data){
        res.send({message:"no data found"})
    }
    res.send(data);
}

export const postMenu = async (req, res) => {
    const { links,  sublinks, color,userId } = req.body;
    let data = await new menu({  links,  sublinks,color,userId });
    await data.save().then(result => {
        console.log(result, "Menu data save to database")
        res.json({
            links: result.links,
            sublinks: result.sublinks,
            color: result.color,
        })
    }).catch(err => {
        res.status(400).send('unable to save database');
        console.log(err)
    })
}
export const updateMenu = async (req, res) => {
    let data = await menu.findByIdAndUpdate(
        {_id: req.params._id},{
            $set:req.body
        },
        {new:true}
        );
    if (data) {
        res.send({ message: "menu data updated successfully" });
    }
    else {
        res.send({ message: "menu data cannot be updated successfully" })
    }
}

export const deleteMenu = async (req, res) => {
    console.log(req.params)
    let data = await menu.deleteOne(req.params)
    if (data) {
        res.send({ message: "menu data delete successfully" });
    }
    else {
        res.send({ message: "menu data cannot delete successfully" })
    }
}
