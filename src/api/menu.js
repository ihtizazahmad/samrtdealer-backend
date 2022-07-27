import menu from '../models/menu.js';


 export const getMenu = async (req, res) => {
    let data = await menu.find(req.params).populate('order')
    if(!data){
        res.send({message:"no data found"})
    }
    res.send(data);
}

export const getMenuById = async (req, res) => {
    let data = await menu.find(req.params).populate('order')
    if(!data){
        res.send({message:"no data found"})
    }
    res.send(data);
}

export const postMenu = async (req, res) => {
    const { header, icon, links,order, titles, sublinks, target, external, description, translationKey, color } = req.body;
    let data = await new menu({ header, order,icon, links, titles, sublinks, target, external, description, translationKey, color });
    await data.save().then(result => {
        console.log(result, "Menu data save to database")
        res.json({
            header: result.header,
            order: result.order,
            icon: result.icon,
            links: result.links,
            titles: result.titles,
            sublinks: result.sublinks,
            target: result.target,
            external: result.external,
            description: result.description,
            translationKey: result.translationKey,
            color: result.color
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
