import nodemailer from 'nodemailer'
// import { google } from 'googleapis'

// const CLIENT_ID = "394040363974-6hkuk1k0ti9gvqj8frksj1jbrm7a8hf6.apps.googleusercontent.com"
// const CLIENT_SECRET = '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'
// const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
// const REFRESH_TOKEN = '1//04nl8P87qDRi_CgYIARAAGAQSNwF-L9IrVJ-F69cnupCvqbRkZospgD1Ry66ImgHWLbK4nuwxrZSZdylI0H_5lCuUquCTaEFcpYw'
// const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
// oAuth2Client.setCredentials({
//     refresh_token: REFRESH_TOKEN

// })
const sendMail=async(email,subject,text)=>{
    
    console.log('email 1: ', email);
    try {
        // const accessToken = await oAuth2Client.getAccessToken()
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                // type: 'OAuth2',
                user: "saadk6401@gmail.com",
                pass:"pophphfzpbkefndp"
                // clientId: CLIENT_ID,
                // clientSecret: CLIENT_SECRET,
                // refreshToken: REFRESH_TOKEN,
                // accessToken: accessToken
            }
        })
        await transporter.sendMail({
            // from: 'SAADK6401 <saadk6401@gmail.com>',
            to:email,
            subject: subject,
            text: text
        })
        console.log("Send Eamil Success");
    } catch (error) {
        console.log(error,"email not sent");
    }
}
export default sendMail;