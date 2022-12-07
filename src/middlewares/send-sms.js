const accountId="ACe7dcee648f316e99baf89a030bf860b7";
const authToken="91e8c145aa0be01d77b04a6cebc372e5"
const testNum=+19497870476
import twilio from "twilio";

const smsTwilio=twilio(accountId,authToken)
const sendSms=async(number,text)=>{
    
    console.log('number 1: ', number);
    try {
        await smsTwilio.messages.create({
           body:text,
           from:testNum,
           to:number
        })
        console.log("Send Sms Success");
    } catch (error) {
        console.log(error,"sms not sent");
    }
}
export default sendSms;