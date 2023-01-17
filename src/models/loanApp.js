import mongoose from 'mongoose';

const loanAppSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"retaileruser"
    },
    highestEducation:{
        type:String
    },
    sourceIncome: {
        type: String
    },
    yearRetailBussinus: {
        type: String
    },
    dependentsNo: {
        type: String
    },
    childernNosGoingToSchool: {
        type: String
    },
    depnetendsNoWorking: {
        type: String
    },
    depentendsNoIncome: {
        type: String
    },
    householdHeighEducation: {
        type: String
    },
    spouseHeighEducation: {
        type: String
    },
    statusOfResidence: {
        type: String
    },
    houseType: {
        type: String
    },
    RoofingType: {
        type: String
    },
    drinkingWaterType: {
        type: String
    },
    ownTv:{
        type:String
    },
    ownRefrigeration: {
        type: String
    },
    ownVehicle: {
        type: String
    },
    ownAc: {
        type: String
    },
    transactionType: {
        type: String
    },
    mWallet: {
        type: Boolean
    },
    mWalletType:{
        type:String
    }


}, { timestamps: true })


export const loanApp = mongoose.model("loanapp", loanAppSchema);
