
import mongoose from "mongoose"
const URLCONFIG = "mongodb+srv://mustafakhan:MirtBtNr08MG2Mlt@cluster0.wjhbs.mongodb.net/patronwork?retryWrites=true&w=majority"
mongoose.connect(URLCONFIG).then(() => {


    console.log("connected to db")
}).catch(err => { console.log(err) })


