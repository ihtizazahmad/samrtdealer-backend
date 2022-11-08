import sendMail from '../middlewares/send-email.js';
import emailMarketing from '../models/emailMarketing.js';
//reset password throght email

export const getemailMarketing = async (req, res) => {
    let filter={}
    if(req.query.userId){
     filter={userId:req.query.userId.split(',')}
    }
    let data = await emailMarketing.find(filter);
    res.send(data)
}

 export const postEmailMarketing = async (req, res) => {
    try { 
        const {email,subject,message, userId}=req.body;
        const emailMarketingS=await new emailMarketing({subject,email, message, userId})
     const data= emailMarketingS.save();
         
        await sendMail(email,subject, `<h4>${message}</h4> `);
        return res.json({ message: `link send to your gmail account ${data}` })

    } catch (error) {
        res.send("An error occured");
        console.log(error);
    }
};

