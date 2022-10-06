import tables from '../models/tables.js';
import express from 'express'

const router=express.Router()
router.get('/',async(req,res)=>{
        
    //  const filteredUsers = await tables.find({
    //     "$and":[
    //         {tableNo:{$regex:req.query.tableNo}},
    //         {tableName:{$regex:req.query.tableName}}
    //     ]
    //  })
    //  return   res.send(filteredUsers);



 } );
    //  const {tableNo,tableName}=req.body
    // const posTable=await tables.find({
    //     "$and":[
    //          {tableNo:tableNo},
    //          {tableName:tableName}
    //     ]
    // })
   

export default router;