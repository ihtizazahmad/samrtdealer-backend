import category from '../models/category.js'

export const getCategories = async (req, res) => {
    let filter = {}
    if (req.query.parentId) {
        filter = { parentId: req.query.parentId.split(',') }
    }
    let data = await category.find(filter).populate('parentId','_id').populate('displayManagerId', '_id').populate('displayManagerName', 'name')

    res.send(data);
}

export const getCategoriesById = async (req, res) => {
  
    let data = await category.findOne(req.params).populate('parentId','_id').populate('displayManagerName', 'name').populate('displayManagerId', '_id')
    res.send(data);
}
export const postCategories = async (req, res) => {
    const { name, parent, extraData, categoryType, displayManagerName, order, hasPicture, active, displayManagerId, parentId, lampixIcon, translation, product, showPictures,userId } = req.body;
    let data = await new category({ name, parent, extraData, categoryType, displayManagerName, order, hasPicture, active, displayManagerId, parentId, lampixIcon, translation, product, showPictures,userId });
    await data.save().then(result => {
        console.log("Category data saved to database");
        res.json({
            id: result.id,
            name: result.name,
            parent: result.parent,
            extraData: result.extraData,
            categoryType: result.categoryType,
            displayManagerName: result.displayManagerName,
            order: result.order,
            hasPicture: result.hasPicture,
            active: result.active,
            displayManagerId: result.displayManagerId,
            parentId: result.parentId,
            lampixIcon: result.lampixIcon,
            translation: result.translation,
            product: result.product,
            showPictures: result.showPictures,
            userId:result.userId
        })
    }).catch(err => {
        res.status(400).send("unable to save to database");
        console.log(err)
    });
}
export const updateCategories = async (req, res) => {
    console.log(req.params)
    let data = await category.findByIdAndUpdate(
        { _id: req.params._id }, {
        $set: req.body
    },
        { new: true }
    );
    if (data) {
        res.send({ message: "category data updated successfully" });
    } else {
        res.send({ message: "category data cannot be updated successfully" })
    }
}
export const deleteCategories = async (req, res) => {
    console.log(req.params)
    let data = await category.deleteOne(req.params)
    if (data) {
        res.send({ message: "category data delete successfully" });
    } else {
        res.send({ message: "category data cannot delete successfully" })
    }
}

