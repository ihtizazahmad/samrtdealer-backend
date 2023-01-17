import {loanApp} from '../models/loanApp.js';


 export const getMenu = async (req, res) => {
    let filter = {}
    if (req.query.superUserId) {
        filter = { superUserId: req.query.superUserId.split(',') }
    }
    let usermenuData = await menu.find(filter).populate('superUserId','_id')
    res.send(usermenuData)
}

export const getMenuById = async (req, res) => {
    let data = await menu.findOne(req.params).populate('superUserId','_id')
    if(!data){
        res.send({message:"no data found"})
    }
    res.send(data);
}


export const postLoanApp = async (req, res) => {
    const { userId ,highestEducation,sourceIncome,yearRetailBussinus,dependentsNo,
        childernNosGoingToSchool,depnetendsNoWorking,depentendsNoIncome,householdHeighEducation
        ,spouseHeighEducation,statusOfResidence,houseType,RoofingType,drinkingWaterType,ownTv
        ,ownRefrigeration,ownVehicle,ownAc,transactionType,mWallet,mWalletType
    } = req.body;
    if(!userId || !highestEducation || !sourceIncome || !yearRetailBussinus || !dependentsNo
      || !childernNosGoingToSchool || !depnetendsNoWorking || !depentendsNoIncome || !householdHeighEducation
        || !spouseHeighEducation || !statusOfResidence || !houseType || !RoofingType || !drinkingWaterType || !ownTv
        || !ownRefrigeration || !ownVehicle || !ownAc || !transactionType || !mWallet || !mWalletType){
            res.status(400).json({success:false,message:"please fill all the fields"})
        }   
    let data = await new loanApp(req.body);
    await data.save().then(result => {
        console.log(result, "Menu data save to database")
        res.json({
            treeData: result.treeData,
            superUserId: result.superUserId,
            role:result.role
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
