import { dLocation, pLocation, tLocation, vLocation } from "../models/location.js";


export const villageAdd = async (req, res) => {
    const {name,tehsil}=req.body
    if(!name || !tehsil){
      return  res.status(400).json({success:false,message:"please fill the fields"})
    }
    try {
        let existLocation = await vLocation.findOne({name})
        if(existLocation){
            return  res.status(400).json({success:false,message:"Already register"})
        }
        const villageLocation = await new vLocation({name,tehsil});
        
      let data=  await villageLocation.save()
      if(data){
        return res.status(200).json({success:true,data})
        }
        return res.status(400).json({success:false,message:"something went wrong"})
    } catch (error) {
        res.status(400).send('something went wrong');
    }
    
    
    }
    
    export const deleteVillageLoc = async (req, res) => {
        console.log(req.params)
        let data = await vLocation.deleteOne(req.params)
        if (data) {
            res.send({ message: "village data delete successfully" });
        }
        else {
            res.send({ message: "village data cannot delete successfully" })
        }
    }

    export const getVillageLoc = async (req, res) => {
        let filter = {}
        if (req.query._id) {
            filter = { _id: req.query._id.split(',') }
        }
        try {
            let data = await vLocation.find(filter).populate({path:"tehsil",populate:{path:"district",populate:{path:"province"}}})
            res.status(200).json({success:true, data })
        } catch (error) {
            res.status(400).json({ message: "something went wrong" })
        }
    
    }

    export const updateVillageLoc = async (req, res) => {
        try {
            let data = await vLocation.findByIdAndUpdate(
                { _id: req.params._id }, {
                $set: req.body
            },
                { new: true }
            );
            if (data) {
                res.send({success:true, message: "village data updated successfully" });
            }
            else {
                res.send({success:false, message: "village data cannot be updated successfully" })
            }
        } catch (error) {
            res.status(400).json({success:false,message:"something went wrong!"})
        }
       
    }

    // tehsil location 

    export const tehsilAdd = async (req, res) => {
        const {name,district}=req.body
        if(!name || !district){
          return  res.status(400).json({success:false,message:"please fill the feilds"})
        }
        try {
            let existLocation = await tLocation.findOne({name}).populate({path:"district",populate:{path:"province"}})
            if(existLocation){
                return  res.status(400).json({success:false,message:"Already register"})
            }
            const villageLocation = await new tLocation({name,district});
            
          let data=  await villageLocation.save()
          if(data){
            return res.status(200).json({success:true,data})
            }
            return res.status(400).json({success:false,message:"something went wrong"})
        } catch (error) {
            res.status(400).send('something went wrong');
        }
        
        
        }
        
        export const deleteTehsilLoc = async (req, res) => {
            console.log(req.params)
            let data = await tLocation.deleteOne(req.params)
            if (data) {
                res.send({ message: "tehsil data delete successfully" });
            }
            else {
                res.send({ message: "tehsil data cannot delete successfully" })
            }
        }
    
        export const getTehsileLoc = async (req, res) => {
            let filter = {}
            if (req.query._id) {
                filter = { _id: req.query._id.split(',') }
            }
            try {
                let data = await tLocation.find(filter).populate("district")
                res.status(200).json({success:true, data })
            } catch (error) {
                res.status(400).json({ message: "something went wrong" })
            }
        
        }
        export const updateTehsilLoc = async (req, res) => {
            try {
                let data = await tLocation.findByIdAndUpdate(
                    { _id: req.params._id }, {
                    $set: req.body
                },
                    { new: true }
                );
                if (data) {
                    res.send({success:true, message: "tehsil data updated successfully" });
                }
                else {
                    res.send({success:false, message: "tehsil data cannot be updated successfully" })
                }
            } catch (error) {
                res.status(400).json({success:false,message:"something went wrong!"})
            }
           
        }


    // province add 

    export const ProvinceAdd = async (req, res) => {
        const {name}=req.body
        if(!name){
          return  res.status(400).json({success:false,message:"please fill the feilds"})
        }
        try {
            let existLocation = await pLocation.findOne({name})
            if(existLocation){
                return  res.status(400).json({success:false,message:"Already register"})
            }
            const villageLocation = await new pLocation({name});
            
          let data=  await villageLocation.save()
          if(data){
            return res.status(200).json({success:true,data})
            }
            return res.status(400).json({success:false,message:"something went wrong"})
        } catch (error) {
            res.status(400).send('something went wrong');
        }
        
        
        }
        
        export const deleteProvinceLoc = async (req, res) => {
            console.log(req.params)
            let data = await pLocation.deleteOne(req.params)
            if (data) {
                res.send({ message: "province data delete successfully" });
            }
            else {
                res.send({ message: "province data cannot delete successfully" })
            }
        }
    
        export const getProvinceLoc = async (req, res) => {
            let filter = {}
            if (req.query._id) {
                filter = { _id: req.query._id.split(',') }
            }
            try {
                let data = await pLocation.find(filter)
                res.status(200).json({success:true, data })
            } catch (error) {
                res.status(400).json({ message: "something went wrong" })
            }
        
        }
        export const updateProvinceLoc = async (req, res) => {
            try {
                let data = await pLocation.findByIdAndUpdate(
                    { _id: req.params._id }, {
                    $set: req.body
                },
                    { new: true }
                );
                if (data) {
                    res.send({success:true, message: "province data updated successfully" });
                }
                else {
                    res.send({success:false, message: "province data cannot be updated successfully" })
                }
            } catch (error) {
                res.status(400).json({success:false,message:"something went wrong!"})
            }
           
        }

        // district portion 

        export const districtAdd = async (req, res) => {
            const {name,province}=req.body
            if(!name || !province){
              return  res.status(400).json({success:false,message:"please fill the feilds"})
            }
            try {
                let existLocation = await dLocation.findOne({name})
                if(existLocation){
                    return  res.status(400).json({success:false,message:"Already register"})
                }
                const villageLocation = await new dLocation({name,province});
                
              let data=  await villageLocation.save()
              if(data){
                return res.status(200).json({success:true,data})
                }
                return res.status(400).json({success:false,message:"something went wrong"})
            } catch (error) {
                res.status(400).send('something went wrong');
            }
            
            
            }
            
            
            export const deleteDistrictLoc = async (req, res) => {
                console.log(req.params)
                let data = await dLocation.deleteOne(req.params)
                if (data) {
                    res.send({ message: "district data delete successfully" });
                }
                else {
                    res.send({ message: "district data cannot delete successfully" })
                }
            }
        
            export const getDistrictLoc = async (req, res) => {
                let filter = {}
                if (req.query._id) {
                    filter = { _id: req.query._id.split(',') }
                }
                try {
                    let data = await dLocation.find(filter).populate("province")
                    res.status(200).json({success:true, data })
                } catch (error) {
                    res.status(400).json({ message: "something went wrong" })
                }
            
            }
            export const updateDistrictLoc = async (req, res) => {
                try {
                    let data = await dLocation.findByIdAndUpdate(
                        { _id: req.params._id }, {
                        $set: req.body
                    },
                        { new: true }
                    );
                    if (data) {
                        res.send({success:true, message: "district data updated successfully" });
                    }
                    else {
                        res.send({success:false, message: "district data cannot be updated successfully" })
                    }
                } catch (error) {
                    res.status(400).json({success:false,message:"something went wrong!"})
                }
               
            }