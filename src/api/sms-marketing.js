import sendSms from '../middlewares/send-sms.js';
import smsMarketing from '../models/sms-marketing.js';
//reset password throght email

export const getsmsMarketing = async (req, res) => {
    let filter={}
    if(req.query.userId){
     filter={userId:req.query.userId.split(',')}
    }
    let data = await smsMarketing.find(filter);
    res.send(data)
}

 export const postSmsMarketing = async (req, res) => {
    try { 
        const {number,message, userId}=req.body;
        const smsMarketingS=await new smsMarketing({number, message, userId})
     const data= smsMarketingS.save();
         
        await sendSms(number,message);
        return res.json({ message: `link send to your mobile number` })

    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
};

