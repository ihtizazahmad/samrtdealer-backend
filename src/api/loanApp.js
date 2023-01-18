import {loanApp} from '../models/loanApp.js';


 export const getLoanData = async (req, res) => {
    
    let usermenuData = await loanApp.find().populate("userId")
    res.status(200).json({success:true,data:usermenuData})
}

export const getloanAppById = async (req, res) => {
    let _id=req.params._id
    let data = await loanApp.findOne({_id}).populate('userId')
    if(!data){
        res.send({success:false,message:"no data found"})
    }
    res.status(200).json({success:true,data});
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
        return    res.status(400).json({success:false,message:"please fill all the fields"})
        }   
   try {
       let result = await new loanApp(req.body);
       let data = await result.save()
       res.status(200).json({message:"successfull submited",success:true,data})
    } catch (error) {
     res.status(400).json({message:"something went wrong!"})
    }
       
}
export const updateLoanAppForm = async (req, res) => {
    let data = await loanApp.findByIdAndUpdate(
        {_id: req.params._id},{
            $set:req.body
        },
        {new:true}
        );
    if (data) {
        res.send({ message: "Loan App data updated successfully" });
    }
    else {
        res.send({ message: "Loan App data cannot be updated successfully" })
    }
}

export const deleteLoanAppForm = async (req, res) => {
    console.log(req.params)
    let data = await loanApp.deleteOne(req.params)
    if (data) {
        res.status(200).json({success:true, message: "Loan App data delete successfully" });
    }
    else {
        res.status(400).json({success:false, message: "Loan App data cannot delete successfully" })
    }
}
