// import express from "express";
// import posMenuSchemas from "../models/posmenu.js";
// import posMenuSizes from "../models/posMenuSize.js";
// import posMenuItems from "../models/posMenuItem.js";

// const router=express.Router();
// //PosMenu
// router.get('posMenu',async (req,res)=>{
//     const posMenu=await posMenuSchemas.find(req.data);
//     res.send(posMenu);

// })

// router.post('posMenu',async (req,res)=>{
// const {id,name,comments,active,posMenuSize,firstColumnFixed,posMenuItem}=req.body;

// let data=new posMenuSchemas({id,name,comments,active,posMenuSize,firstColumnFixed,posMenuItem});
//    await data.save().then(result => {
//     res.status(200).send("pos Menu saved to database");
//     console.log(result, "pos Menu save to database")
// }).catch((err) => {
//     res.status(400).send("unable to save to database");
//     console.log(err)
// })
// const resId = await payer.findOne({ id });
//     if (resEmail) {
//         console.log("this product with this id  also regiter", resId)
//         return res.send("this product with this id already registered")
//     }

// await data.save().then(result => {
//     console.log(result)
//     res.json({ message: 'Pos Menu has been Saved successfully' });

// }).catch(err => console.log(err));

// })

// //PosMenuSize
// router.get('posMenuSize',async (req,res)=>{
//     const posMenu=await posMenuSizes.find(req.data);
//     res.send(posMenu);

// })

// router.post('posMenuSize',async (req,res)=>{
// const {id,name,rows,column}=req.body;

// let data=new posMenuSizes({id,name,rows,column});
//    await data.save().then(result => {
//     res.status(200).send("pos Menu Size saved to database");
//     console.log(result, "pos Menu Size saved to database")
// }).catch((err) => {
//     res.status(400).send("unable to save to database");
//     console.log(err)
// })


// })
// //PosMenuItem
// router.get('posMenuItem',async (req,res)=>{
//     const posMenu=await posMenuItems.find(req.data);
//     res.send(posMenu);

// })

// router.post('posMenuItem',async (req,res)=>{
// const {id,row,column,category,product}=req.body;

// let data=new posMenuItems({id,row,column,category,product});
//    await data.save().then(result => {
//     res.status(200).send("pos MenuItems saved to database");
//     console.log(result, "pos Menu Items saved to database")
// }).catch((err) => {
//     res.status(400).send("unable to save to database");
//     console.log(err)
// })


// })

// export default router;