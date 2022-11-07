import sendMail from '../middlewares/send-email.js';
import emailMarketing from '../models/emailMarketing.js';
//reset password throght email

 export const postEmailMarketing = async (req, res) => {
   
        const {email,subject, userId}=req.body;
        const emailMarketingS=await new emailMarketing({subject,email, userId})
        await emailMarketingS.save().then(async res=>{
            console.log("email:",res[0].email)
          const mail=  await sendMail(res[0].email,subject, `<h2>Welcome to Patronworks</h2> `);
            return res.json({ message: `link send to your gmail account ${mail}` })
            
        }).catch(error=> {
        res.send("An error occured");
        console.log(error);
    })
}


