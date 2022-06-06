// import mongoose from 'mongoose';
// import posMenuItems from './posMenuItem.js';
// import posMenuSizes from './posMenuSize.js';

// const posMenuSchema = new mongoose.Schema({

//     id: {
//         type: String,
//         required: true
//     },
//     name: {
//         type: String,
//         required: true
//     },
//     comments: {
//         type: String,
//         required: true
//     },
//     active: {
//         type: Boolean,
//         required: true
//     },
//     posMenuSize: { 
//         // type:[Schema.Types.ObjecttId],
//         ref:'posMenuSize'
// },
//     firstColumnFixed: {
//         type: Boolean,
//         required: true
//     },
//     posMenuItem:{
//         // type:[Schema.Types.ObjecttId],
//         ref:'posMenuItem'
//     }
    
// })
// const posMenuSchemas = mongoose.model('posMenu', posMenuSchema);
// export default posMenuSchemas;