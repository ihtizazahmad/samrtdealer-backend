// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/patronwork').then(() => {
//     console.log('Connected to MongoDB');

// }).catch(err => { console.log(err) });  
// const { ServerApiVersion } = require('mongodb')
const mongoose = require('mongoose');
const URLCONFIG = "mongodb+srv://mustafakhan:MirtBtNr08MG2Mlt@cluster0.wjhbs.mongodb.net/patronwork?retryWrites=true&w=majority"
mongoose.connect(URLCONFIG).then(() => {
    // ServerApiVersion = true

    console.log("connected to db")
}).catch(err => { console.log(err) })

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://locahost:27017/e-comm',).then(() => {
//     console.log("connected to db")
// }).catch(err=>{console.log(err)})
