import mongoose from 'mongoose'
const tableReservationAndWaitingListSchema=new mongoose.Schema({
    PartyName:{
        type:String
    },
    Guests:{
        type:Number
    },
    Email:{
        type:String,
    },
    Telefon:{
        type:Number
    },
    Note:{
        type:String
    },
    Private:{
        type:Boolean
    },
    Smoking:{
        type:Boolean
    },
    window:{
        type:Boolean
    },
    Booth:{
        type:Boolean
    },
    Boys:{
        type:Number
    },
    HighChairs:{
        type:Number
    },
    WheelChairs:{
        type:Number
    }    ,
    btnStatus:{
        type:String,
        enum:["Reservations","Waitinglist"]
    }
},
{timestamps:true});
const tableSelect=mongoose.model("tableRservationAndWaitingList",tableReservationAndWaitingListSchema);
export default tableSelect;