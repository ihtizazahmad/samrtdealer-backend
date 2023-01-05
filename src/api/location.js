import { vLocation } from "../models/location";


export const villageAdd = async (req, res) => {
    const {name}=req.body
    if(!name){
      return  res.status(400).json({success:false,message:"please fill the name"})
    }
    try {
        let existLocation = await vLocation({name})
        if(existLocation){
            return  res.status(400).json({success:false,message:"Already register"})
        }
        const villageLocation = await new vLocation({name});
            
      let data=  await villageLocation.save()
      if(data){
        return res.status(200).json({success:true,data})
        }
        return res.status(400).json({success:false,message:"something went wrong"})
    } catch (error) {
        res.status(400).send('something went wrong');
    }
    
    
    }
    export const postProduct = async (req, res) => {
        const { name,description,categoryParents,userId,price,discountOnProduct,isActive } = req.body;
        const Product_pic = req.file ? req.file.location : null
        if(!name || !price || !categoryParents || !userId){
            res.status(400).json({message:"please fill the fields"})
        }
        // console.log("req body :",req.body)
        
        const productData = await new product({name,description,categoryParents,userId,price,discountOnProduct,Product_pic,isActive});
        
        await productData.save().then(data => {
            // console.log(data, "Product data save to database")
            res.json({
                data
            })
        }).catch(err => {
            res.status(400).send('unable to save database');
            console.log(err)
        })
    }