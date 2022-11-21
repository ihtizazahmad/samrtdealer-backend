const accountId="AC1de9639f6f845b268af3fbd1c38f91b6";
const authToken="0f3b6f573bd9ccb9d90e5a16f0e6fb85"
const testNum=+15005550006
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